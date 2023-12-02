// src/assert.ts
function isObject(value) {
  return typeof value === 'object' && value != null && !Array.isArray(value);
}

// src/compact.ts
function compact(value) {
  return Object.fromEntries(
    Object.entries(value ?? {}).filter(([_, value2]) => value2 !== void 0)
  );
}

// src/condition.ts
var isBaseCondition = (v) => v === 'base';
function filterBaseConditions(c) {
  return c.slice().filter((v) => !isBaseCondition(v));
}

// src/css-important.ts
var importantRegex = /!(important)?$/;
function isImportant(value) {
  return typeof value === 'string' ? importantRegex.test(value) : false;
}
function withoutImportant(value) {
  return typeof value === 'string'
    ? value.replace(importantRegex, '').trim()
    : value;
}
function withoutSpace(str) {
  return typeof str === 'string' ? str.replaceAll(' ', '_') : str;
}

// src/hash.ts
function toChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
}
function toName(code) {
  let name = '';
  let x;
  for (x = Math.abs(code); x > 52; x = (x / 52) | 0)
    name = toChar(x % 52) + name;
  return toChar(x % 52) + name;
}
function toPhash(h, x) {
  let i = x.length;
  while (i) h = (h * 33) ^ x.charCodeAt(--i);
  return h;
}
function toHash(value) {
  return toName(toPhash(5381, value) >>> 0);
}

// src/merge-props.ts
function mergeProps(...sources) {
  const objects = sources.filter(Boolean);
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const prevValue = prev[key];
      const value = obj[key];
      if (isObject(prevValue) && isObject(value)) {
        prev[key] = mergeProps(prevValue, value);
      } else {
        prev[key] = value;
      }
    });
    return prev;
  }, {});
}

// src/walk-object.ts
var isNotNullish = (element) => element != null;
function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    if (isObject(value) || Array.isArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = getKey?.(prop) ?? prop;
        const childPath = [...path, key];
        if (stop?.(value, childPath)) {
          return predicate(value, path);
        }
        const next = inner(child, childPath);
        if (isNotNullish(next)) {
          result[key] = next;
        }
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}
function mapObject(obj, fn) {
  if (!isObject(obj)) return fn(obj);
  return walkObject(obj, (value) => fn(value));
}

// src/normalize-style-object.ts
function toResponsiveObject(values, breakpoints) {
  return values.reduce((acc, current, index) => {
    const key = breakpoints[index];
    if (current != null) {
      acc[key] = current;
    }
    return acc;
  }, {});
}
function normalizeShorthand(styles, context) {
  const { hasShorthand, resolveShorthand } = context.utility;
  return walkObject(styles, (v) => v, {
    getKey: (prop) => {
      return hasShorthand ? resolveShorthand(prop) : prop;
    },
  });
}
function normalizeStyleObject(styles, context) {
  const { utility, conditions } = context;
  const { hasShorthand, resolveShorthand } = utility;
  return walkObject(
    styles,
    (value) => {
      return Array.isArray(value)
        ? toResponsiveObject(value, conditions.breakpoints.keys)
        : value;
    },
    {
      stop: (value) => Array.isArray(value),
      getKey: (prop) => {
        return hasShorthand ? resolveShorthand(prop) : prop;
      },
    }
  );
}

// src/classname.ts
var fallbackCondition = {
  shift: (v) => v,
  finalize: (v) => v,
  breakpoints: { keys: [] },
};
var sanitize = (value) =>
  typeof value === 'string' ? value.replaceAll(/[\n\s]+/g, ' ') : value;
function createCss(context) {
  const { utility, hash, conditions: conds = fallbackCondition } = context;
  const formatClassName = (str) =>
    [utility.prefix, str].filter(Boolean).join('-');
  const hashFn = (conditions, className) => {
    let result;
    if (hash) {
      const baseArray = [...conds.finalize(conditions), className];
      result = formatClassName(toHash(baseArray.join(':')));
    } else {
      const baseArray = [
        ...conds.finalize(conditions),
        formatClassName(className),
      ];
      result = baseArray.join(':');
    }
    return result;
  };
  return (styleObject = {}) => {
    const normalizedObject = normalizeStyleObject(styleObject, context);
    const classNames = /* @__PURE__ */ new Set();
    walkObject(normalizedObject, (value, paths) => {
      const important = isImportant(value);
      if (value == null) return;
      const [prop, ...allConditions] = conds.shift(paths);
      const conditions = filterBaseConditions(allConditions);
      const transformed = utility.transform(
        prop,
        withoutImportant(sanitize(value))
      );
      let className = hashFn(conditions, transformed.className);
      if (important) className = `${className}!`;
      classNames.add(className);
    });
    return Array.from(classNames).join(' ');
  };
}
function compactStyles(...styles) {
  return styles.filter(
    (style) => isObject(style) && Object.keys(compact(style)).length > 0
  );
}
function createMergeCss(context) {
  function resolve(styles) {
    const allStyles = compactStyles(...styles);
    if (allStyles.length === 1) return allStyles;
    return allStyles.map((style) => normalizeShorthand(style, context));
  }
  function mergeCss(...styles) {
    return mergeProps(...resolve(styles));
  }
  function assignCss(...styles) {
    return Object.assign({}, ...resolve(styles));
  }
  return { mergeCss, assignCss };
}

// src/memo.ts
var memo = (fn) => {
  const cache = /* @__PURE__ */ new Map();
  const get = (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
  return get;
};

// src/hypenate-property.ts
var wordRegex = /([A-Z])/g;
var msRegex = /^ms-/;
var hypenateProperty = memo((property) => {
  if (property.startsWith('--')) return property;
  return property
    .replace(wordRegex, '-$1')
    .replace(msRegex, '-ms-')
    .toLowerCase();
});

// src/slot.ts
var getSlotRecipes = (recipe = {}) => {
  const init = (slot) => ({
    className: [recipe.className, slot].filter(Boolean).join('__'),
    base: recipe.base?.[slot] ?? {},
    variants: {},
    defaultVariants: recipe.defaultVariants ?? {},
    compoundVariants: recipe.compoundVariants
      ? getSlotCompoundVariant(recipe.compoundVariants, slot)
      : [],
  });
  const slots = recipe.slots ?? [];
  const recipeParts = slots.map((slot) => [slot, init(slot)]);
  for (const [variantsKey, variantsSpec] of Object.entries(
    recipe.variants ?? {}
  )) {
    for (const [variantKey, variantSpec] of Object.entries(variantsSpec)) {
      recipeParts.forEach(([slot, slotRecipe]) => {
        slotRecipe.variants[variantsKey] ??= {};
        slotRecipe.variants[variantsKey][variantKey] = variantSpec[slot] ?? {};
      });
    }
  }
  return Object.fromEntries(recipeParts);
};
var getSlotCompoundVariant = (compoundVariants, slotName) =>
  compoundVariants
    .filter((compoundVariant) => compoundVariant.css[slotName])
    .map((compoundVariant) => ({
      ...compoundVariant,
      css: compoundVariant.css[slotName],
    }));

// src/split-props.ts
function splitProps(props, ...keys) {
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const dKeys = Object.keys(descriptors);
  const split = (k) => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key]);
        delete descriptors[key];
      }
    }
    return clone;
  };
  const fn = (key) => split(Array.isArray(key) ? key : dKeys.filter(key));
  return keys.map(fn).concat(split(dKeys));
}

// src/uniq.ts
var uniq = (...items) =>
  items
    .filter(Boolean)
    .reduce(
      (acc, item) => Array.from(/* @__PURE__ */ new Set([...acc, ...item])),
      []
    );
export {
  compact,
  createCss,
  createMergeCss,
  filterBaseConditions,
  getSlotCompoundVariant,
  getSlotRecipes,
  hypenateProperty,
  isBaseCondition,
  isObject,
  mapObject,
  memo,
  mergeProps,
  splitProps,
  toHash,
  uniq,
  walkObject,
  withoutSpace,
};

export function __spreadValues(a, b) {
  return { ...a, ...b };
}

export function __objRest(source, exclude) {
  return Object.fromEntries(
    Object.entries(source).filter(([key]) => !exclude.includes(key))
  );
}

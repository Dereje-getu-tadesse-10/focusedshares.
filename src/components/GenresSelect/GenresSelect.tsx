import { GENRES } from '@/src/components/Forms/Youtube/genres';
import { css } from '../../../styled-system/css';
import { Select } from '@ark-ui/react';
import Image from 'next/image';

const label = css({
  height: '40px',
  color: 'var(--colors-text-muted)',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'medium',
  fontSize: 'sm',
});

const trigger = css({
  border: '1px solid var(--colors-input-focus)',
  rounded: 'sm',
  padding: '.5rem',
  outline: 'none',
  bg: 'var(--colors-background)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  cursor: 'pointer',
  color: 'var(--colors-text-muted)',
});

const content = css({
  boxSizing: 'border-box',
  zIndex: '102',
  bg: 'var(--colors-background)',
  borderRadius: 'sm',
  p: 1,
  border: '1px solid var(--colors-input-focus)',
});

const groubLabel = css({
  m: '1',
  px: '2',
  height: '40px',
  color: 'var(--colors-text-muted)',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'medium',
  fontSize: 'sm',
});

const items = css({
  display: 'flex',
  gap: '2',
  alignItems: 'center',
  color: 'var(--colors-text-muted)',
  height: '40px',
  px: '2',
  rounded: 'sm',
  cursor: 'pointer',
  _hover: {
    bg: 'var(--colors-input-focus)',
  },
  fontWeight: 'medium',
  fontSize: 'sm',
});

export const GenreSelect = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Select.Root
      id={'category'}
      value={[value]}
      onValueChange={(e) => onChange(e.value[0])}
      items={GENRES}
      name={'category'}
    >
      <Select.Label className={label} id={'genre'}>
        Genres
      </Select.Label>
      <Select.Control>
        <Select.Trigger className={trigger}>
          <Select.ValueText id={'genre'}>{value}</Select.ValueText>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner
        className={css({
          maxWidth: '466px',
          width: '100%',
        })}
      >
        <Select.Content className={content}>
          <Select.ItemGroup id='genre'>
            <Select.ItemGroupLabel htmlFor='genre' className={groubLabel}>
              Genres
            </Select.ItemGroupLabel>
            {GENRES.map((item) => (
              <Select.Item key={item.id} item={item.id} className={items}>
                <Image
                  src={item.image}
                  width={30}
                  height={30}
                  alt={item.name}
                  className={css({
                    borderRadius: 'sm',
                  })}
                />
                <div>
                  <Select.ItemText>{item.id}</Select.ItemText>
                </div>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

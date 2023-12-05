import { css } from '../../../styled-system/css';
import { Portal, Select } from '@ark-ui/react';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

export const GENRES = [
  {
    id: 'KPOP',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/mty2rbolcjzfmowqngmx',
    name: 'Kpop',
  },
  {
    id: 'LOFI',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/ymmmy7cikgaklud9brlf',
    name: 'Lofi',
  },
  {
    id: 'CLASSICAL',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/oehr8iow9q0e8zbwe3oq',
    name: 'Classical',
  },
  {
    id: 'AMBIENT',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/zj7h6bpqekjweyebdvff',
    name: 'Ambient',
  },
  {
    id: 'JAZZ',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/y800oq30izhvps708qeu',
    name: 'Jazz',
  },
  {
    id: 'ELECTRONIC',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/s5nc0o3zyuejbtatxzpc',
    name: 'Electronic',
  },
  {
    id: 'OTHER',
    image:
      'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto:low/v1/focusedshares/iiqv4aqmcplaenar0bgr',
    name: 'Other',
  },
];

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
  bg: 'var(--background)',
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
  bg: 'var(--background)',
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
      id={'genre'}
      value={[value]}
      onValueChange={(e) => onChange(e.value[0])}
      items={GENRES}
    >
      <Select.Label className={label} id={'genre'}>
        Genres
      </Select.Label>
      <Select.Control>
        <Select.Trigger className={trigger}>
          <Select.ValueText placeholder='Select a Genre' id={'genre'}>
            {value}
          </Select.ValueText>
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

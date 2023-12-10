import { Menu } from '@ark-ui/react';
import { LogOut, Plus, Trash2 } from 'lucide-react';
import { ProfileAvatar } from '@/src/stories/avatar/avatar';
import { css } from '@/styled-system/css';
import { signOut } from 'next-auth/react';
import { AddSong } from '@/src/components/Modals/AddSong';
import NiceModal from '@ebay/nice-modal-react';
import { ConfirmDeleteAccount } from '../Modals/ConfirmDeleteAccount';
import { useTranslations } from 'next-intl';

const menuItems = [
  {
    groupeName: 'account',
    items: [
      {
        id: 'song',
        label: 'addSong',
        icon: <Plus size={16} />,
        onClick: () => NiceModal.show(AddSong),
      },
      {
        id: 'logout',
        label: 'signOut',
        icon: <LogOut size={16} />,
        onClick: () => signOut(),
      },
    ],
  },
  {
    groupeName: 'dangerZone',
    items: [
      {
        id: 'delete',
        label: 'deleteAccount',
        icon: <Trash2 size={16} />,
        onClick: () => NiceModal.show(ConfirmDeleteAccount),
      },
    ],
  },
];

const content = css({
  bg: 'var(--colors-background)',
  border: '1px solid var(--colors-input-focus)',
  outline: 'none',
  rounded: 'sm',
  width: '200px',
});

const menu = css({
  display: 'flex',
  gap: '2',
  alignItems: 'center',
  color: 'var(--colors-text-muted)',
  height: '40px',
  px: '2',
  m: '1',
  rounded: 'sm',
  cursor: 'pointer',
  _hover: {
    bg: 'var(--colors-input-focus)',
  },
  fontWeight: 'medium',
  fontSize: 'sm',
});

const menuGroupLabel = css({
  m: '1',
  px: '2',
  height: '40px',
  color: 'var(--colors-text-muted)',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'medium',
  fontSize: 'sm',
});

export const AppMenu = ({ src, alt }: { src: string; alt: string }) => {
  const t = useTranslations('Menu');
  return (
    <Menu.Root
      onSelect={(id) => {
        const selectedItem = menuItems.find((item) =>
          item.items.some((subItem) => subItem.id === id.value)
        );

        if (selectedItem) {
          const subItem = selectedItem.items.find(
            (subItem) => subItem.id === id.value
          );
          if (subItem && subItem.onClick) {
            subItem.onClick();
          }
        }
      }}
    >
      <Menu.Trigger>
        <ProfileAvatar src={src} alt={alt} />
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content className={content}>
          {menuItems.map((item) => (
            <Menu.ItemGroup key={item.groupeName} id={item.groupeName}>
              <Menu.ItemGroupLabel
                className={menuGroupLabel}
                htmlFor={item.groupeName}
              >
                {t(item.groupeName)}
              </Menu.ItemGroupLabel>
              <Menu.Separator
                className={css({
                  color: 'var(--colors-input-focus)',
                })}
              />
              {item.items.map((item) => (
                <Menu.Item className={menu} id={item.id} key={item.id}>
                  <Menu.Item id={item.id}>{item.icon}</Menu.Item>
                  <Menu.Item id={item.id}>{t(item.label)}</Menu.Item>
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

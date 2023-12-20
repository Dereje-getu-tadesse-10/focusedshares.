import React from 'react';
import { Dialog, Portal, Tabs } from '@ark-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { YoutubeForm } from '../Forms/Youtube/Youtube';
import { css } from '@/styled-system/css';
import { SpotifyForm } from '../Forms/Spotify/Spotify';

export const AddSong = NiceModal.create(() => {
  const modal = useModal();

  return (
    <>
      <Dialog.Root
        open={modal.visible}
        onOpenChange={(e) => (e.open ? modal.show() : modal.hide())}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner
            className={css({
              position: 'fixed',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '103',
              left: '50%',
              top: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
            })}
          >
            <Dialog.Content
              className={css({
                backgroundColor: 'var(--colors-background)',
                borderRadius: 'sm',
                border: '1px solid var(--colors-input-focus)',
                width: '100%',
                maxWidth: '500px',
                maxHeight: '500px',
                overflow: 'auto',
                outline: 'none',
                padding: '1rem',
              })}
            >
              <Dialog.Title
                className={css({
                  fontWeight: '600',
                  fontSize: 'lg',
                  color: 'var(--colors-text)',
                })}
              >
                Add new song
              </Dialog.Title>
              <Dialog.Description
                className={css({
                  fontWeight: '400',
                  fontSize: 'sm',
                  color: 'var(--colors-text-muted)',
                })}
              >
                Add a new song to the playlist
              </Dialog.Description>
              <Tabs.Root
                defaultValue='youtube'
                lazyMount
                unmountOnExit
                className={css({
                  mt: '.8rem',
                })}
              >
                <Tabs.List
                  className={css({
                    display: 'flex',
                    flexDirection: 'row',
                    flexShrink: '0',
                    position: 'relative',
                    overflow: 'auto',
                    gap: '.4rem',
                  })}
                >
                  <Tabs.Trigger
                    className={css({
                      cursor: 'pointer',
                      padding: '3px',
                    })}
                    value='youtube'
                  >
                    Youtube
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className={css({
                      cursor: 'pointer',
                    })}
                    value='spotify'
                  >
                    Spotify
                  </Tabs.Trigger>
                  <Tabs.Indicator
                    className={css({
                      bg: 'var(--colors-primary)',
                      height: '2px',
                      width: '100%',
                      bottom: '0',
                    })}
                  />
                </Tabs.List>
                <Tabs.Content value='youtube'>
                  <YoutubeForm />
                </Tabs.Content>
                <Tabs.Content value='spotify'>
                  <SpotifyForm />
                </Tabs.Content>
              </Tabs.Root>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
});

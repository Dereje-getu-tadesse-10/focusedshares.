import React from 'react';
import { Dialog, Portal } from '@ark-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
// import { YoutubeForm } from '../Form/YoutubeForm';
import { css } from '@/styled-system/css';

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
              zIndex: '101',
              left: '50%',
              top: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
            })}
          >
            <Dialog.Content
              className={css({
                backgroundColor: 'var(--background)',
                borderRadius: 'sm',
                border: '1px solid var(--border)',
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
                  color: 'var(--text)',
                })}
              >
                Add new song
              </Dialog.Title>
              <Dialog.Description
                className={css({
                  fontWeight: '400',
                  fontSize: 'sm',
                  color: 'var(--text-tertiary)',
                })}
              >
                Add a new song to the playlist
              </Dialog.Description>
              {/* <YoutubeForm /> */}
              sfdf
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
});

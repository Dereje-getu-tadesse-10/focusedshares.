import React from 'react';
import { Dialog, Portal } from '@ark-ui/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { css } from '@/styled-system/css';
import { Button } from '@/src/stories/button/button';

const useDeleteAccount = () => {
  const request = async () => {
    const res = await fetch('/api/v1/users/delete', {
      method: 'DELETE',
    });
    return res.json();
  };

  const {
    mutate: deleteAccount,
    data,
    isPending,
  } = useMutation({
    mutationFn: request,
    onSuccess: (data) => {
      if (data.status === 200) {
        signOut();
      } else {
        toast.error(
          'Oops! Something went wrong trying to delete your account.'
        );
      }
    },
  });

  return {
    deleteAccount,
    data,
    isPending,
  };
};

export const ConfirmDeleteAccount = NiceModal.create(() => {
  const modal = useModal();
  const { deleteAccount, isPending } = useDeleteAccount();

  const handleDeleteAccount = async () => {
    deleteAccount();
  };

  return (
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
                color: 'var(--text)',
              })}
            >
              Delete your account
            </Dialog.Title>

            <p className={css({ mt: '3', color: 'gray.500' })}>
              If you delete your account, all your data will be lost and you
              will not be able to recover it.
            </p>
            <div
              className={css({
                mt: '5',
                display: 'flex',
                justifyContent: 'flex-end',
              })}
            >
              <Button onClick={handleDeleteAccount} type={'submit'}>
                Delete my account
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
});

import Avvvatars from 'avvvatars-react';

export const ProfileAvatar = ({ email }: { email: any }) => (
  <Avvvatars value={email} style='shape' size={36} />
);

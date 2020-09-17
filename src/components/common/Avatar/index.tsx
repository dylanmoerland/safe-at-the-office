import React, { useMemo } from 'react';
import { User } from 'app/auth/types';
import { Image, Fallback } from './styled';

const colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];

function resolveColor(name?: string): string {
  if (!name) return colors[0];

  const charCodes = name
    .split('')
    .map((char) => char.charCodeAt(0))
    .join('');

  return colors[parseInt(charCodes) % colors.length];
}

function rersolveInitials(name?: string): string {
  if (!name) return '-';

  if (name.includes(' ')) {
    return name.charAt(0) + name.charAt(name.indexOf(' ') + 1);
  } else {
    return name.charAt(0) + name.charAt(1);
  }
}

type AvatarProps = {
  user: User;
};

export const Avatar: React.FC<AvatarProps> = ({ user: { image, name } }) => {
  const color = useMemo(() => {
    return resolveColor(name);
  }, [name]);

  const initials = useMemo(() => {
    return rersolveInitials(name);
  }, [name]);

  if (image) return <Image image={image} />;

  return <Fallback color={color}>{initials}</Fallback>;
};

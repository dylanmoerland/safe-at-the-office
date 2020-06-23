import { useEffect } from 'react';

/**
 * Hook that calls a callback when a click outside of the passed ref occurs
 */
export function useOutsideClickListener(ref: React.RefObject<any>, onOutsideClick: () => void) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick, ref]);
}

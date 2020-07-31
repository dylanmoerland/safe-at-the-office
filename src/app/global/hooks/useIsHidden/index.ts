import { useEffect, useCallback, useState } from 'react';

export const useIsHidden = () => {
  const [hidden, setHidden] = useState(!!document.hidden);

  const handleChange = useCallback(() => {
    setHidden(!!document.hidden);
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleChange);

    return () => {
      document.removeEventListener('visibilitychange', handleChange);
    };
  }, [handleChange]);

  return hidden;
};

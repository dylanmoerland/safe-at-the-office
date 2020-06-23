import { useMemo } from 'react';
import { firestore } from 'app/global/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Visit } from 'app/visit/types';

export const useVisits = () => {
  const [response, loading, error] = useCollection(firestore.collection('visit'));

  return useMemo(
    () => ({
      visits: response?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Visit[],
      loading,
      error,
    }),
    [response, loading, error], // eslint-disable-line react-hooks/exhaustive-deps
    // FIXME: https://github.com/facebook/react/issues/19061
  );
};

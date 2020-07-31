import { useMemo } from 'react';
import { firestore } from 'app/global/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Visit } from 'app/visit/types';

const getQueryEndCode = (query: string) => {
  const strFrontCode = query.slice(0, query.length - 1);
  const strEndCode = query.slice(query.length - 1, query.length);

  return strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
};

export const useSearchVisits = (query: string) => {
  const [response, loading, error] = useCollection(
    query
      ? firestore
          .collection('visit')
          .where('user.searchName', '>=', query)
          .where('user.searchName', '<=', getQueryEndCode(query))
      : firestore.collection('visit'),
  );

  return useMemo(
    () => ({
      visits: response?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Visit[],
      loading,
      error,
    }),
    [response, loading, error],
  );
};

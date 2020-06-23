import React, { useContext, createContext, useMemo } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from 'app/global/firebase';
import { Config } from 'app/config/types';

type ConfigContextValue = {
  config: Config;
  loading: boolean;
  error?: Error;
};

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

const envPeopleLimit = process.env.REACT_APP_PEOPLE_LIMIT
  ? parseInt(process.env.REACT_APP_PEOPLE_LIMIT, 10)
  : 6;
const envDaysLimit = process.env.REACT_APP_DAYS_LIMIT
  ? parseInt(process.env.REACT_APP_DAYS_LIMIT, 10)
  : 21;

export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (!context) throw new Error('useConfig can only be used inside ConfigProvider');

  return context;
};

const today = new Date();

const ConfigProvider: React.FC = ({ children }) => {
  const [response, loading, error] = useCollection(
    firestore
      .collection('config')
      .orderBy('startDate', 'desc')
      .where('startDate', '<', today)
      .limit(1),
  );

  const config = useMemo(() =>  response?.docs[0]?.data(), [response]); // eslint-disable-line
  // FIXME: https://github.com/facebook/react/issues/19061

  const value = useMemo(
    () => ({
      config: {
        ...config,
        peopleLimit: config?.peopleLimit || envPeopleLimit,
        daysLimit: config?.daysLimit || envDaysLimit,
      } as Config,
      loading,
      error,
    }),
    [loading, error, config], // eslint-disable-line
    // FIXME: https://github.com/facebook/react/issues/19061
  );

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;

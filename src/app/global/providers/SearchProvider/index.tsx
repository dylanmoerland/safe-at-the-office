import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useMemo,
} from 'react';

type SearchContextValue = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) throw new Error('useSearch can only be used inside the SearchContext');

  return context;
};

const SearchProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');

  const value = useMemo(
    () => ({
      query,
      setQuery,
    }),
    [query, setQuery],
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchProvider;

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { auth } from 'app/global/firebase';
import { useOutsideClickListener } from 'app/global/hooks/useOutsideClickListener';
import { useSearch } from 'app/global/providers/SearchProvider';
import { useAuth } from 'app/auth/providers/AuthProvider';
import {
  Container,
  Toggle,
  StyledSearchIcon,
  StyledCloseIcon,
  IconContainer,
  TopPart,
  Content,
  Logout,
  Name,
  SearchContainer,
  SearchBar,
} from './styled';

export const HeaderBar = () => {
  const { query, setQuery } = useSearch();
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSearching(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isSearching) {
      setIsOpen(false);
      inputRef?.current?.focus();
    }
  }, [isSearching]);

  const handleToggleSearch = useCallback(() => {
    if (isSearching) {
      setQuery('');
    }

    setIsSearching(!isSearching);
  }, [isSearching, setQuery]);

  useOutsideClickListener(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <Container ref={containerRef}>
      <TopPart>
        <Toggle onClick={() => setIsOpen(!isOpen)} open={isOpen} hidden={isSearching}>
          <div>
            <span />
            <span />
          </div>
          <div>
            <span />
            <span />
          </div>
        </Toggle>
        <SearchContainer>
          <IconContainer onClick={handleToggleSearch}>
            {isSearching ? (
              <StyledCloseIcon hidden={isOpen} />
            ) : (
              <StyledSearchIcon hidden={isOpen} />
            )}
          </IconContainer>
          <SearchBar
            ref={inputRef}
            active={isSearching}
            value={query}
            placeholder="Search for a person"
            onChange={(event) => setQuery(event.target.value)}
            disabled={!isSearching}
          />
        </SearchContainer>
      </TopPart>
      <Content open={isOpen}>
        <Name>Hi, {user?.name}!</Name>
        <Logout onClick={() => auth.signOut()}>logout</Logout>
      </Content>
    </Container>
  );
};

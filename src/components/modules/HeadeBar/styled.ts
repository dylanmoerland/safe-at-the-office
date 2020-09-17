import styled, { css } from 'styled-components';
import { SearchIcon } from 'components/icons/SearchIcon';
import { CloseIcon } from 'components/icons/CloseIcon';

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 44px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 32px 24px 32px;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const Toggle = styled.button<{ open: boolean; hidden: boolean }>`
  transition: transform 0.4s ease, opacity 0.3s ease;
  transform: rotate(0deg);
  position: relative;
  display: flex;
  justify-content: space-between;
  background: transparent;
  flex-direction: column;
  border: none;
  height: 40px;
  min-width: 40px;
  position: relative;
  margin-left: -8px;
  outline: none;
  appearance: none;

  div {
    display: flex;
    flex: 1;
  }

  span {
    background-color: ${({ theme }) => theme.colors.white};
    width: 10px;
    height: 10px;
    border-radius: 20px;
    margin-right: 10px;
    margin-bottom: 10px;

    @supports (-webkit-hyphens: none) {
      margin-bottom: 20px;
    }
  }

  ${({ open }) =>
    open &&
    css`
      transform: rotate(45deg);
    `}

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}
`;

export const SearchContainer = styled.div`
  position: relative;
  with: 25px;
  height: 40px;
`;

export const StyledSearchIcon = styled(SearchIcon)<{ hidden: boolean }>`
  transition: opacity 0.3s ease;
  width: 25px;
  position: relative;
  top: 7px;
  right: 0;
  position: absolute;
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}
`;

export const StyledCloseIcon = styled(CloseIcon)<{ hidden: boolean }>`
  transition: opacity 0.3s ease;
  width: 20px;
  position: relative;
  top: 10px;
  right: 0;
  position: absolute;
  z-index: 2;
  color: ${({ theme }) => theme.colors.blue};

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}
`;

export const IconContainer = styled.div``;

export const SearchBar = styled.input<{ active: boolean }>`
  transition: width 0.4s ease, opacity 0.4s ease;
  oveflow: hidden;
  opacity: 0;
  z-index: 1;
  position: absolute;
  right: -8px;
  top: 0;
  height: 100%;
  width: 0;
  border: none;
  border-radius: 8px;
  outline: none;
  appearance: none;
  padding: 0 16px;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      width: calc(100vw - 48px);
    `}
`;

export const Content = styled.div<{ open: boolean }>`
  transition: max-height 0.8s ease;
  overflow: hidden;
  max-height: 0;

  ${({ open }) =>
    open &&
    css`
      max-height: 220px;
    `}
`;

export const Name = styled.h2``;

export const Company = styled.h3`
  opacity: 0.7;
  margin-top: -16px;
`;

export const Logout = styled.button`
  transition: opacity 0.3s ease;
  border: 0px;
  padding: 4px 12px;
  border-radius: 16px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  appearance: none;
  outline: none;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `};
`;

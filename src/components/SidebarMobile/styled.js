import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${({ theme }) => theme.zIndex.backdrop};

  ${({ $isShow }) =>
    !$isShow &&
    css`
      display: none;
    `}
`;

export const SidebarMobile = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 380px;
  height: 100vh;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding-right: 20px;
  margin-left: -380px;
  transition: all 0.5s;

  ${({ $isShow }) =>
    $isShow &&
    css`
      margin-left: 0;
    `}
`;

export const Inner = styled.div`
  height: 100vh;
  background-color: red;
  border-radius: 0 4px 4px 0;
  background-color: white;
  padding: 24px 24px 24px 55px;
`;

export const ButtonCloseWrapper = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: auto;
`;

export const Menus = styled.div``;

export const MenuItem = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 40px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  &.active {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;

export const Flags = styled.div`
  display: flex;
`;

export const FlagWrapper = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

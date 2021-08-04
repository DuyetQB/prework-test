import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { media } from 'styles/breakpoints';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: transparent;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.base};
  &.active {
    background-color: ${({ theme }) => theme.colors.blue2};
    color: ${({ theme }) => theme.colors.black};
  }
  &.noneactive {
    background: transparent;
  }
  ${media.tablet`
    padding: 16px;
  `}

  ${media.phone`
    padding: 12px 16px;
  `}
`;

export const HeaderNav = styled.div`
  display: flex;
  ${media.tablet`
    display: contents;
  `}
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
  ${media.phone`
    svg {
      width: 60px;
      height: 34px;
    }
  `}
`;

export const Menu = styled.ul`
  display: flex;
  padding-left: 50px;

  ${media.tablet`
    display: none;
  `}
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const MenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.4;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &.active {
    color: ${({ theme }) => theme.colors.yellow};
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`;

export const HeaderControl = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Flag = styled.div`
  cursor: pointer;
`;

export const ButtonLogin = styled.button`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: ${({ theme }) => theme.colors.white};
  margin: 0 20px;
  white-space: nowrap;
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const ButtonHamburger = styled.div`
  cursor: pointer;
`;

export const Avt = styled.div`
  margin-left: 8px;
  height: 45px;
  width: 45px;
  background-image: url(${({ $src }) => $src});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 50%;
`;

export const AvatarWrapper = styled.div`
  cursor: pointer;
`;

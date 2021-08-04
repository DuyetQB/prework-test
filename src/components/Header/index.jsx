import React, { useState, useCallback, useEffect, useRef } from 'react';

import useOnClickOutside from 'hooks/useOnClickOutside';

import SidebarMobile from 'components/SidebarMobile';
import UserMenu from './UserMenu';
import Logo from 'images/REVA-logo.png';

import * as S from './styled';

function Header() {
  const userBtnRef = useRef();
  const userMenuRef = useRef();

  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowUserMenu, setShowUserMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleCloseUserMenu = useCallback(() => {
    setShowUserMenu(false);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsShowSidebar(false);
    // document.getElementsByTagName('BODY')[0].style['overflow-y'] = 'unset';
  }, []);
  const handleOpenSidebar = useCallback(() => {
    setIsShowSidebar(true);
    // document.getElementsByTagName('BODY')[0].style['overflow-y'] = 'hidden';
  }, []);

  useOnClickOutside([userBtnRef, userMenuRef], handleCloseUserMenu);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScroll(true);
      } else {
        // upscroll code
        setScroll(false);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <S.HeaderWrapper className={scroll ? 'active' : 'nonactive'}>
      <SidebarMobile isShow={isShowSidebar} onClose={handleCloseSidebar} />

      <S.Inner>
        <S.HeaderNav>
          <S.HamburgerWrapper onClick={handleOpenSidebar}>
            <S.ButtonHamburger></S.ButtonHamburger>
          </S.HamburgerWrapper>
          <div>
            <S.LogoWrapper to="/">
              <img src={Logo} alt="" />
            </S.LogoWrapper>
          </div>
          <div></div>
        </S.HeaderNav>
        <S.HeaderControl>
          <S.Menu>
            <S.MenuItem>
              <S.MenuLink activeClassName="active" to="/" exact>
                Giải pháp
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink activeClassName="active" to="/value">
                Giá trị
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink activeClassName="active" to="/fearutes">
                Tính năng
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink activeClassName="active" to="/custommer">
                Khách hàng
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink activeClassName="active" to="/contact">
                Liên hệ
              </S.MenuLink>
            </S.MenuItem>
          </S.Menu>
          <UserMenu isShowUserMenu={isShowUserMenu} onClose={handleCloseUserMenu} ref={userMenuRef} />
        </S.HeaderControl>
      </S.Inner>
    </S.HeaderWrapper>
  );
}

export default Header;

import React from 'react';

import * as S from './styled';


export default function SidebarMobile({ isShow = false, onClose }) {
  return (
    <S.Wrapper>
      <S.Backdrop $isShow={isShow}></S.Backdrop>
      <S.SidebarMobile $isShow={isShow}>
        <S.Inner>
          <div>
            <S.ButtonCloseWrapper onClick={onClose}>
            
            </S.ButtonCloseWrapper>
          </div>
          <S.Menus>
            <S.MenuItem activeClassName="active" to="/" exact>
              Home
            </S.MenuItem>
            <S.MenuItem activeClassName="active" to="/directory">
              Directory
            </S.MenuItem>
            <S.MenuItem activeClassName="active" to="/get-quote">
              Get Quote
            </S.MenuItem>
            <S.MenuItem activeClassName="active" to="pricing">
              Pricing
            </S.MenuItem>
            <S.MenuItem activeClassName="active" to="/contact">
              Contact
            </S.MenuItem>
            <S.MenuItem activeClassName="active" to="about-us">
              About us{' '}
            </S.MenuItem>
          </S.Menus>
         
        </S.Inner>
      </S.SidebarMobile>
    </S.Wrapper>
  );
}

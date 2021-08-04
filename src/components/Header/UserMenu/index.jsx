import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

const UserMenu = ({ isShowUserMenu, onClose }, ref) => {
  return (
    <S.UserMenuWrapper $show={isShowUserMenu} ref={ref}>
      <Link to="/user-profile">
        <S.MenuItem onClick={onClose}>View Profile</S.MenuItem>
      </Link>
      <Link to="/profile-setting">
        <S.MenuItem onClick={onClose}>User Settings</S.MenuItem>
      </Link>
      <Link to="/company-microsite">
        <S.MenuItem onClick={onClose}>Company Site</S.MenuItem>
      </Link>
      <S.MenuItem>Sign Out</S.MenuItem>
    </S.UserMenuWrapper>
  );
};

export default forwardRef(UserMenu);

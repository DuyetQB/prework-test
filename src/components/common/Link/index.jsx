import React from 'react';
import * as S from './styled';

const Link = ({ children, ...rest }) => <S.Link {...rest}>{children}</S.Link>;

export default Link;

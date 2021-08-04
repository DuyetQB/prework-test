import React from 'react';
import * as S from './styled';

export const Text = ({ children, ...rest }) => <S.Text {...rest}>{children}</S.Text>;

export const Heading2 = ({ children, ...rest }) => <S.Heading2 {...rest}>{children}</S.Heading2>;

export const Heading3 = ({ children, ...rest }) => <S.Heading3 {...rest}>{children}</S.Heading3>;
export const Heading4 = ({ children, ...rest }) => <S.Heading4 {...rest}>{children}</S.Heading4>;
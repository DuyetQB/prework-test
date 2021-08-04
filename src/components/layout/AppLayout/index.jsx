import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import * as S from './styled';

function AppLayout({ children }) {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Wrapper>
  );
}

export default AppLayout;

import React from 'react';
import * as S from './styled';
function Card({ $src, children }) {
  return (
    <>
      <S.WrapCard >
        <S.CardIcon src={$src} />
        {children}
      </S.WrapCard>
    </>
  );
}

export default Card;

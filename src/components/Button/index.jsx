import React from 'react';

import * as S from './styled';

function Button({ $type, children, size = 'base', maxWidth, width, ...rest }) {
  if ($type === 'white')
    return (
      <S.WhiteButton type="button" $size={size} $maxWidth={maxWidth} $width={width} {...rest}>
        {children}
      </S.WhiteButton>
    );

  if ($type === 'secondary')
    return (
      <S.SecondaryButton type="button" $size={size} $maxWidth={maxWidth} $width={width} {...rest}>
        {children}
      </S.SecondaryButton>
    );

  if ($type === 'gray')
    return (
      <S.GrayButton type="button" $size={size} $maxWidth={maxWidth} $width={width} {...rest}>
        {children}
      </S.GrayButton>
    );
  if ($type === 'yellow')
    return (
      <S.YellowButton type="button" $size={size} $maxWidth={maxWidth} $width={width} {...rest}>
        {children}
      </S.YellowButton>
    );

  if ($type === 'showmore')
    return (
      <S.ShowMoreButton $size={size} $maxWidth={maxWidth} $width={width} {...rest}>
        {children}
      </S.ShowMoreButton>
    );

  return (
    <S.BlueButton type="button" $size={size} $maxWidth={maxWidth} $width={width} {...rest}>
      {children}
    </S.BlueButton>
  );
}

export default Button;

import React, { useState } from 'react';
import * as S from './styled';
import { ReactComponent as IconEye } from './images/icon-eye.svg';
import { ReactComponent as IconUnEye } from './images/icon-uneye.svg';

// generate random string id if not fill id
function PasswordInput({
  label = '',
  error,
  register = () => {},
  name,
  className,
  id = Math.random().toString(36).substring(2, 12),
  ...rest
}) {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <S.InputWrapper className={className}>
      {label && (
        <div>
          <S.Label htmlFor={id}>{label}</S.Label>{' '}
        </div>
      )}
      <S.InputArea>
        <S.Input
          $error={error}
          {...register(name)}
          name={name}
          autoComplete="off"
          type={isShow ? 'text' : 'password'}
          id={id}
          {...rest}
        />
        <S.IconWrapper onClick={handleShow}> {isShow ? <IconUnEye /> : <IconEye />}</S.IconWrapper>
      </S.InputArea>
      <S.Error>{error}</S.Error>
    </S.InputWrapper>
  );
}

export default PasswordInput;

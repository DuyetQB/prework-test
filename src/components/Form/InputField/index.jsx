import React from 'react';
import * as S from './styled';

// generate random string id if not fill id
function Input({
  label = '',
  required = false,
  error,
  icon,
  register = () => {},
  name,
  textArea = false,
  heightTextArea,
  className,
  id = Math.random().toString(36).substring(2, 12),
  ...rest
}) {
  return (
    <S.InputWrapper className={className}>
      {label && (
        <div>
          <S.Label htmlFor={id}>
            {label} {required && <S.Required>*</S.Required>}
          </S.Label>{' '}
        </div>
      )}
      {icon && (
        <div>
          <S.IconWrap className={className}>
            <div className="wrap-icon">
              <S.Icon src={icon}/>
              
            </div>
          </S.IconWrap>
        </div>
      )}

      {textArea ? (
        <S.TextArea
          $error={error}
          {...register(name)}
          name={name}
          $height={heightTextArea}
          autoComplete="off"
          id={id}
          {...rest}
        />
      ) : (
        <S.Input $error={error} {...register(name)} name={name} autoComplete="off" id={id} {...rest} />
      )}

      <S.Error>{error}</S.Error>
    </S.InputWrapper>
  );
}

export default Input;

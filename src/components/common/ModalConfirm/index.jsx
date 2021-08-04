import React from 'react';

import Modal from '../Modal';
import * as S from './styled';

const ModalConfirm = ({ title, onOk, onCancel, children, ...rest }) => {
  return (
    <Modal width={480} closeIcon={null} onCancel={onCancel} {...rest}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Body>{children}</S.Body>
        <S.Footer>
          <button onClick={onCancel}>Không</button>
          <button minWidth="181px" onClick={onOk}>
            Đồng ý
          </button>
        </S.Footer>
      </S.Content>
    </Modal>
  );
};

export default ModalConfirm;

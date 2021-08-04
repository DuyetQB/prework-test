import styled from 'styled-components';
import { Modal as BaseModal } from 'antd';

export const Modal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 0;
  }

  .ant-modal-header {
    border-bottom: 0;
    padding: 0;
  }

  .ant-modal-body {
    padding: 40px;
  }

  .ant-modal-close-x {
    width: 38px;
    height: 38px;
    line-height: 38px;
  }
`;

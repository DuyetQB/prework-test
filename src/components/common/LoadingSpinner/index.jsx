import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const upAndDown = keyframes`
  0% { opacity: 0; transform: translateY(0); }
  25% { opacity: 1; transform: translateY(-10px); }
  75% { opacity: 1; transform: translateY(-10px); }
  100% { opacity: 0; transform: translateY(0); }
`;

const StyledLoadingSpinner = styled.svg`
  display: block;
  margin: 0 auto;
  fill: #00a0ff;
  circle {
    animation-name: ${upAndDown};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.05, 0.2, 0.35, 1);
    animation-iteration-count: infinite;
    &:nth-child(2) {
      animation-delay: 0.18s;
    }
    &:nth-child(3) {
      animation-delay: 0.36s;
    }
  }
`;

const LoadingSpinner = () => (
  <LoadingSpinnerWrapper>
    <StyledLoadingSpinner width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="15" r="4" />
      <circle cx="30" cy="15" r="4" />
      <circle cx="53" cy="15" r="4" />
    </StyledLoadingSpinner>
  </LoadingSpinnerWrapper>
);

export default LoadingSpinner;

import React from "react";
import styled, { keyframes } from "styled-components";

const Preloader = () => (
    <StyledPreloader>
        <div></div>
        <div></div>
        <div></div>
    </StyledPreloader>
)

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledPreloader = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 4px;
    border: 4px solid #008cff;
    border-radius: 50%;
    animation: ${rotation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #008cff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export default Preloader;
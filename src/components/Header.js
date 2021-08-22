import React from "react";
import styled from "styled-components";
import {useBreakpoint} from "styled-breakpoints/react-styled";
import {down} from "styled-breakpoints";

import Back from "./BackBtn";

const Header = ({ title, active, onClick }) => {
    const isMobile = useBreakpoint(down('xs'));

    return (
        <StyledHeader>
            {(isMobile && active) && <Back onClick={onClick} />}
            <Title>{title}</Title>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 500px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  border: 2px solid #000000;
`;

export default Header;
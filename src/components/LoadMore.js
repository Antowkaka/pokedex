import React from "react";
import styled from "styled-components";

const LoadMore = ({ onClick }) => (
    <LoadMoreButton onClick={onClick} >
        Load More
    </LoadMoreButton>
);

const LoadMoreButton = styled.button`
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  height: 50px;
  background-color: #008cff;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export default LoadMore;



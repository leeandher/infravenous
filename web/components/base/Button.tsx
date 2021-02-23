import styled from "styled-components";

const Button = styled.button`
  border-radius: 2px;
  background: #fff7f8;
  outline: 0;
  border: 0px solid #ff7e6b;
  color: #ff7e6b;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 2rem;
  box-shadow: 0rem 0rem #ff7e6b;
  transition: all 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  &:hover {
    box-shadow: -0.25rem 0.25rem #ff7e6b;
  }
  &.small {
    margin: 1rem 2rem 1rem 0;
  }
  &.simple {
    border-radius: 0px;
    background: transparent;
    &:hover {
      box-shadow: 0 0.25rem #ff7e6b;
    }
  }
  &.primary {
    background: #ffa69e;
    color: #ffffff;
  }
`;

export { Button };

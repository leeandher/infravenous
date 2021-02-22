import styled from "styled-components";

const Input = styled.input`
  background: #ffffff;
  outline: 0;
  border: 0;
  display: block;
  padding: 0.5rem 1rem;
  border: 0 solid #ff7e6b;
  border-bottom-width: 2px;
  margin: 3rem 0;
  width: 100%;
  transition: all 0.05s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  &:focus {
    background: #fff7f8;
    border: 0 solid #8c5e58;
    border-bottom-width: 2px;
  }
`;

export { Input };

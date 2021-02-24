import styled from "styled-components";

function Input({ label, ...inputProps }) {
  return (
    <Label>
      {label}
      <StylishInput {...inputProps} />
    </Label>
  );
}

const Label = styled.label`
  color: #ff7e6b;
  margin-top: 3rem;
  display: block;
`;

const StylishInput = styled.input`
  color: #000000;
  background: #ffffff;
  outline: 0;
  border: 0;
  display: block;
  padding: 0.5rem 1rem;
  border: 0 solid #ff7e6b;
  font-size: 1.5rem;
  border-bottom-width: 2px;
  margin-bottom: 3rem;
  width: 100%;
  transition: all 0.05s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  &:focus {
    background: #fff7f8;
    border: 0 solid #8c5e58;
    border-bottom-width: 2px;
  }
`;

export { Input };

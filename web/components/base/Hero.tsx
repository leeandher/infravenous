import styled from "styled-components";

const NavHero = styled.main`
  display: flex;
  background: #fff7f8;
  padding: 5rem;
  padding-top: 12rem;
  align-items: top;
  justify-content: center;
  min-height: 90%;
  .item,
  .item-full {
    flex: 1;
    max-width: 500px;
    margin: 0 1.5rem;
  }
  .item-full {
    max-width: 900px;
  }
`;

export { NavHero };

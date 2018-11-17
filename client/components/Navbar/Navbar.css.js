import styled, { Link } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
`;

export const ButtonLink = styled(Link)`
  border-radius: 2px;
  border: 1px solid dodgerblue;
  margin: 10px;
  padding: 5px;
`;

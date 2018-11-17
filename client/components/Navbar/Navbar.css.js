import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
`;

export const ButtonLink = styled(Link)`
  align-items: center;
  background-color: none;
  border-radius: 3px;
  border: 1px solid grey;
  color: grey;
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: 25px;
  justify-content: center;
  margin: 10px 5px;
  padding: 0 10px;

  &:hover {
    background-color: dodgerblue;
    cursor: pointer;
  }

  &:disabled {
    background-color: grey;
    cursor: default;
  }
`;

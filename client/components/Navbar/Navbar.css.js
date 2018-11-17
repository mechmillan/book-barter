import styled from "styled-components";

import { Link } from "react-router-dom";

import { Color } from "../../styles";

export const Nav = styled.nav`
  display: flex;
  background-color: ${Color.DUMBLEDORE};
  flex-direction: row;
  justify-content: space-evenly;
  height: 50px;
`;

export const ButtonLink = styled(Link)`
  align-items: center;
  background-color: ${Color.HAGRID};
  border-radius: 3px;
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: 25px;
  justify-content: center;
  margin: 10px 5px;
  padding: 0 10px;
  text-transform: uppercase;

  &:hover {
    background-color: ${Color.RON};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${Color.HARRY};
    cursor: default;
  }
`;

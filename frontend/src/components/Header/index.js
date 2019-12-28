import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Container,
  LogoContainer,
  NavContainer,
  UserInfoContainer
} from "./styles";

import logo from "../../assets/logo-nav.png";

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="gympoint" />
        <span>gympoint</span>
      </LogoContainer>
      <NavContainer>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/students">
              Alunos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/plans">
              Planos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/registrations">
              Matrículas
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/help-orders">
              Pedidos de Auxílio
            </NavLink>
          </li>
        </ul>
        <UserInfoContainer>
          <span className="name">Fabiano Brancher</span>
          <Link to="/">
            <span className="link">Sair do sistema</span>
          </Link>
        </UserInfoContainer>
      </NavContainer>
    </Container>
  );
}

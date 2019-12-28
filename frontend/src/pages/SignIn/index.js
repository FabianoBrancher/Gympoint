import React from "react";
import { Container, Form } from "./styles";

import logo from "../../assets/logo.png";

export default function SignIn() {
  return (
    <Container>
      <Form>
        <div className="logoContainer">
          <img src={logo} alt="gympoint" />
        </div>

        <label htmlFor="email">Seu e-mail</label>
        <input id="email" type="email" placeholder="exemplo@email.com" />

        <label htmlFor="password">Sua senha</label>
        <input id="password" type="password" placeholder="Sua senha secreta" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import Logo from "../../assets/logo2.png";
import Heroes from "../../assets/heroes.png";

import { Container, Section, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Section>
        <Link to="/">
          <img src={Logo} alt="Be The Hero" />
        </Link>

        <Form>
          <h1>Faça seu Login</h1>
          <input type="text" placeholder="Sua ID:" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>
      <img src={Heroes} alt="Heroes" />
    </Container>
  );
}

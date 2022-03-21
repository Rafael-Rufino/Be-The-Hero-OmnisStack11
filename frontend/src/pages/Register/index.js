import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Section, Form, Group } from "./styles";
import Logo from "../../assets/logo2.png";

export function Register() {
  return (
    <Container>
      <Content>
        <Section>
          <Link to="/">
            <img src={Logo} alt="Be The Hero" />
          </Link>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho Cadastro
          </Link>
        </Section>
        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="WhatsApp" />
          <Group>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </Group>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}

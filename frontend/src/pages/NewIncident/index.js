import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Section, Form, Group } from "./styles";
import Logo from "../../assets/logo2.png";

export function NewIncident() {
  return (
    <Container>
      <Content>
        <Section>
          <Link to="/">
            <img src={Logo} alt="Be The Hero" />
          </Link>
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>
        <Form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input type="number" placeholder="Valor em reais" />
          <Group>
            <button type="button" className="button-cancelar">
              Cancelar
            </button>
            <button type="submit" className="button">
              Cadastrar
            </button>
          </Group>
        </Form>
      </Content>
    </Container>
  );
}

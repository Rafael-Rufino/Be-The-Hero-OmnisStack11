import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import Logo from "../../assets/logo2.png";
import Heroes from "../../assets/heroes.png";
import api from "../../services/api";

import { Container, Section, Form } from "./styles";

export function SignIn() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });
      alert(`Login Realizado com sucesso! ${response.data.name}`);

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      navigate("/profile");
    } catch (error) {
      alert(`Erro ao fazer Login com esse: ${id}, Tente novamente!`);
    }
  }
  return (
    <Container>
      <Section>
        <Link to="/">
          <img src={Logo} alt="Be The Hero" />
        </Link>

        <Form onSubmit={handleSignIn}>
          <h1>Faça seu Login</h1>
          <input
            type="text"
            placeholder="Sua ID:"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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

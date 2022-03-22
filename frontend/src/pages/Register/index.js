import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Section, Form, Group } from "./styles";
import Logo from "../../assets/logo2.png";
import api from "../../services/api";

export function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };
    console.log(data);

    try {
      const respose = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${respose.data.id}`);
      navigate("/");
    } catch (erro) {
      alert("Erro no cadastro, tente novamente");
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }
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
        <Form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />
          <Group>
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </Group>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}

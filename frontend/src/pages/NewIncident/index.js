import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Section, Form, Group } from "./styles";
import Logo from "../../assets/logo2.png";
import api from "../../services/api";

export function NewIncident() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");
  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    try {
      api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });
      navigate("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
  }
  function handleCancel() {
    navigate("/profile");
  }
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
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Group>
            <button
              type="button"
              className="button-cancelar"
              onClick={() => handleCancel()}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="button"
              onClick={handleNewIncident}
            >
              Cadastrar
            </button>
          </Group>
        </Form>
      </Content>
    </Container>
  );
}

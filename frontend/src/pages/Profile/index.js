import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Container, Header, Incident } from "./styles";

export function Profile() {
  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <img src={Logo} alt="Be the hero" />
          </Link>
        </div>
        <span>Bem vinda APAD</span>

        <Link to="/incidents/new" className="button">
          Cadastrar um novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>
      <Incident>
        <h1>Casos cadastrados</h1>
        <ul>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÂO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR: </strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÂO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR: </strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÂO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR: </strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇÂO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR: </strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </ul>
      </Incident>
    </Container>
  );
}

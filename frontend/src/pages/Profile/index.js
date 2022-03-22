import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Container, Header, Incident } from "./styles";
import api from "../../services/api";

export function Profile() {
  const navigate = useNavigate();

  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });
      /// recutar em tempo real
      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <img src={Logo} alt="Be the hero" />
          </Link>
        </div>
        <span>{`Bem vinda, ${ongName}`}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar um novo caso
        </Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>
      <Incident>
        <h1>Casos cadastrados</h1>
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÂO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR: </strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(incident.value)}
              </p>

              <button
                type="button"
                onClick={() => handleDeleteIncident(incident.id)}
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </Incident>
    </Container>
  );
}

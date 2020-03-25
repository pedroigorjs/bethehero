import React, { useEffect, useState } from 'react';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './profile/styles';

import logo from '../assets/svg/logo.svg';
import api from '../services/api';

export default function Profile() {
  const ngoName = localStorage.getItem('ngoName');
  const ngoId = localStorage.getItem('ngoId');
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadIncidents() {
      const { data } = await api.get('/profiles', {
        headers: {
          Authorization: ngoId,
        },
      });

      setIncidents(data);
    }

    loadIncidents();
  }, [ngoId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ngoId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <header>
        <div className="welcome">
          <img src={logo} alt="Be The Hero" />
          <p>
            Bem vinda,
            {ngoName}
          </p>
        </div>
        <nav>
          <Link className="btn btn-primary" type="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>
          <button type="button" onClick={handleLogout}>
            <FiPower size={24} color="#e02041" />
          </button>
        </nav>
      </header>

      <section>
        <h1>Casos cadastrados</h1>
        <ul className="cases">
          {incidents.map((incident) => (
            <li key={incident.id} className="case-item">
              <div className="name">
                <span>Caso:</span>
                <p>{incident.title}</p>
              </div>
              <div className="description">
                <span>Descrição:</span>
                <p>{incident.description}</p>
              </div>
              <div className="value">
                <span>Valor:</span>
                <p>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(incident.value)}
                </p>
              </div>
              <FiTrash2
                onClick={() => handleDeleteIncident(incident.id)}
                size={24}
                color="#A8A8B3"
              />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

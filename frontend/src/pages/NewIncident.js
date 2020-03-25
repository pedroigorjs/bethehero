import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './newincident/styles';

import api from '../services/api';
import logo from '../assets/svg/logo.svg';

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ngoId = localStorage.getItem('ngoId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ngoId,
        },
      });

      history.push('/profile');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <section>
        <div>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size={24} color="#E02041" />
            Voltar para a home
          </Link>
        </div>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
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
          <div className="actions">
            <button type="button">Cancelar</button>
            <button type="submit" className="btn-primary">
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
}

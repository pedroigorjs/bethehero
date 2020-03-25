import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../services/api';

import { Container } from './login/styles';
import logo from '../assets/svg/logo.svg';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const {
        data: { name },
      } = await api.post('sessions', { id });

      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', name);

      history.push('/profile', { name });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <img src={logo} alt="Be The Hero" />

      <h1>Faça seu logon</h1>
      <form onSubmit={handleLogon}>
        <input
          type="text"
          placeholder="Sua ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Entrar
        </button>

        <Link to="/register">
          <FiLogIn size={24} color="#e02041" />
          Não tenho cadastro
        </Link>
      </form>
    </Container>
  );
}

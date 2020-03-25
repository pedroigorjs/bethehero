import React from 'react';

import Login from '../components/Login';

import { Container } from './home/styles';

import heroes from '../assets/img/heroes.png';

export default function Home() {
  return (
    <Container>
      <Login />
      <img className="heroes" src={heroes} alt="Heroes" />
    </Container>
  );
}

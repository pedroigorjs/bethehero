import React from 'react';

import { Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;

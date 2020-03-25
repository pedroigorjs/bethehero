import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F5;
    color: #41414d;
  }

  body,
  input,
  button,
  textarea {
    font: 18px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  textarea,
  input,
  button,
  .btn {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    margin: 0.5rem 0;
    border: 1.5px solid #dcdce6;
    transition: background 0.2s ease-out;
  }

  input,
  textarea {
    padding: 1rem;
    background: #fff;

    ::placeholder {
      color: #a8a8b3;
    }
  }

  button,
  .btn {
    cursor: pointer;
    font-weight: 500;
    background: #f0f0f5;
  }

  button:hover,
  input:hover,
  input:focus {
    background-color: ${darken(0.02, '#fff')}
  }

  .btn-primary {
    background-color: #e02041;
    color: #fff;
    border: none;
  }

  .btn-primary:hover {
    background-color: ${darken(0.05, '#e02041')};
  }

  textarea {
    resize: none;
    height: 175px;
  }
`;

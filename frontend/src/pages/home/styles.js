import styled from 'styled-components';
import Login from '../../components/Login';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  .heroes {
    margin: 15vh 0;
  }

  ${Login} {
    grid-column: 1fr;
    margin-top: 10vh;
    margin-left: 10vw;
  }
`;

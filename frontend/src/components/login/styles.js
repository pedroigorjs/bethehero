import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 60vh;
  padding: 0 10vw;
  margin: 15vh 0;

  img {
    width: 300px;
  }

  h1 {
    color: #13131a;
    margin: 1rem 0;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    font-weight: 700;
    color: #13131a;
    text-decoration: none;

    svg {
      margin-right: 1rem;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    width: 70vw;
    padding: 15vh 10vw;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 10vh;

    div {
      grid-column: 1fr;

      img {
        width: 190px;
      }

      h1 {
        font-weight: 500;
        margin-top: 4rem;
        margin-bottom: 2rem;
      }

      p {
        color: #737380;
        line-height: 1.5;
      }

      a {
        display: flex;
        align-items: center;
        margin-top: 8rem;
        font-weight: 700;
        color: #13131a;
        text-decoration: none;

        svg {
          margin-right: 1rem;
        }
      }
    }

    form {
      grid-column: 1fr;

      div {
        display: grid;
        grid-template-columns: 4fr 1fr;
        gap: 1rem;

        input:nth-child(1) {
          grid-column: 4fr;
        }
      }
    }
  }
`;

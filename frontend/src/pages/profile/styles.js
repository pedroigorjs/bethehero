import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header,
  section {
    padding: 2rem;
    width: 75vw;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .welcome {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 25%;
    }

    nav {
      width: 20vw;
      display: grid;
      grid-template-columns: 4fr 1fr;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;
        grid-column: 4fr;
        text-decoration: none;
        justify-content: center;
      }
    }
  }

  section {
    h1 {
      align-self: flex-start;
    }

    .cases {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 2rem 0;
      list-style: none;

      .case-item {
        width: 30vw;
        height: 35vh;
        background-color: #fff;
        padding: 2rem;
        border-radius: 8px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          color: #41414d;
          font-weight: 500;
        }

        p {
          color: #737380;
          max-width: 450px;
          margin-top: 1rem;
        }

        svg {
          position: absolute;
          top: 2rem;
          right: 2rem;
          cursor: pointer;
          transition: stroke 0.2s ease-out;
        }

        svg:hover {
          stroke: #e02041;
        }
      }
    }
  }
`;

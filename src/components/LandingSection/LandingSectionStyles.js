import styled from 'styled-components';

const Wrapper = styled.section`
  background: #041525eb;
  height: calc(100% - 5rem);
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    height: 100%;
  }

  .info {
    margin-top: 2rem;
    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: hsl(240deg 6% 87%);
      span {
        color: #3b82f6e0;
        margin-left: 0.25rem;
      }
    }

    p {
      margin-top: 0.25rem;
      font-size: 1.0725rem;
      color: hsl(240deg 6% 87%);
    }
  }

  .main-img {
    width: 100%;
  }

  .btn-hero {
    color: #fff;
    width: 100%;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1.25rem;
    background: #3b82f6;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.5rem 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;

    &:hover {
      background: #1d4ed8;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }

  @media (min-width: 768px) {
    .page {
      flex-direction: row;
      justify-content: space-between;

      .info {
        margin-top: 0;
        h1 {
          font-size: 2.75rem;
        }
        p {
          font-size: 1.125rem;
        }
      }

      .main-img {
        width: 50%;
      }

      .btn-hero {
        width: auto;
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
      }
    }
  }
`;

export default Wrapper;

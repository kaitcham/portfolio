import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 0;

  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    line-height: 52px;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  .skill-items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 5rem 0;
  }

  .skill-items svg {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
      line-height: 42px;
    }

    .skill-items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      padding: 5rem 1rem;
    }

    .skill-items svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 0;
  h2 {
    color: #e3e1e1;
    font-size: 2rem;
    border-bottom: 2px solid yellow;
  }

  .about-content {
    display: flex;
    align-items: center;
    gap: 2rem;

    .about-image {
      flex: 1;
      height: 500px;
      position: relative;
      background: #041525;

      img {
        position: absolute;
        top: 0;
        left: 45px;
        width: 85%;
        transform: scaleX(-1);
      }
    }

    .about-info {
      flex: 2;
      h2 {
        border-bottom: none;
      }
      p {
        color: #e3e1e1;
        margin-top: 15px;
        font-size: 1.0725rem;
      }
    }
  }

  @media all and (max-width: 768px) {
    padding: 0 15px;
    h2 {
      margin-top: 15px;
    }
    .about-content {
      .about-image {
        display: none;
      }
    }
  }
`;

export default Wrapper;

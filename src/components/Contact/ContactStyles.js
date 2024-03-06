import styled from 'styled-components';

const Wrapper = styled.section`
  background: #6070ff;
  border-top-left-radius: 100px;
  margin-top: 60px;

  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 30px;

    h2 {
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      line-height: 52px;
      text-align: center;
      margin-top: 80px;
    }

    p {
      color: #fff;
      font-size: 1.0725rem;
      max-width: 480px;
      text-align: center;
    }

    form {
      input {
        width: 100%;
        padding: 15px;
        margin-bottom: 15px;
        background: #fff;
        border: 1px solid #cfd8dc;
        border-radius: 8px;

        &::placeholder {
          font-size: 1rem;
        }
      }

      textarea {
        width: 100%;
        padding: 15px;
        margin-bottom: 15px;
        background: #fff;
        border: 1px solid #cfd8dc;
        border-radius: 8px;
        height: 10rem;

        &::placeholder {
          font-size: 1rem;
        }
      }

      button {
        color: #6070ff;
        background: #fff;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 1.0725rem;
        border: 1px solid #cfd8dc;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background: #6070ff;
          color: #fff;
        }
      }
    }
  }

  @media all and (max-width: 768px) {
    .contact-form {
      padding: 30px 15px;

      h2 {
        font-size: 30px;
        margin-top: 16px;
      }

      p {
        font-size: 1rem;
        color: #ebebff;
      }
    }
  }
`;

export default Wrapper;

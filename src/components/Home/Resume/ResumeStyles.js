import styled from 'styled-components';

export default styled.section`
  .modal__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal__container {
    width: 900px;
    height: 80vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close__icon {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    position: fixed;
    top: 15px;
    right: 15px;
    padding: 5px 15px;
    border: none;
    text-align: center;
    border-radius: 5px;
    background-color: #a59f9f;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #a59f9f;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    .modal__container {
      width: 90%;
    }
  }
`;

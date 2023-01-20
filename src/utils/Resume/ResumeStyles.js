import styled from 'styled-components';

export default styled.section`
  .modal__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal__container {
    order: 1;
    width: 900px;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    background-color: #fff;
  }

  .close__icon {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    margin-top: -45px;
    margin-right: 15px;
    padding: 5px 15px;
    border: none;
    text-align: center;
    border-radius: 5px;
    align-self: flex-end;
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
      margin-top: 0px;
    }

    .close__icon {
      margin-right: 15px;
      margin-bottom: 25px;
    }
  }
`;

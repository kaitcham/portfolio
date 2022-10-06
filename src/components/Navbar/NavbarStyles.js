import styled from 'styled-components';

export default styled.nav`
  height: 4rem;
  width: 100%;
  display: flex;
  padding: 0 5rem;
  position: fixed;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .navbar__logo {
    font-size: 1.5rem;
    font-weight: 700;
    a {
      text-decoration: none;
      color: #000;
    }
  }

  .navbar__links {
    display: flex;
    list-style: none;
    li {
      margin: 0 1rem;
      a {
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #f50057;
        }
      }
    }
  }

  .navbar__icons {
    font-size: 1.5rem;
    cursor: pointer;
    align-items: center;
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    .navbar__links {
      position: absolute;
      top: 4rem;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: auto;
      background-color: #fff;
      justify-content: flex-start;
      align-items: flex-start;
      transition: all 0.3s ease-in-out;
      padding: 0 1rem;
      li:first-child {
        margin-top: 1.5rem;
      }
      li:last-child {
        margin-bottom: 1.5rem;
      }
      li {
        margin: 0.5rem 0;
        a {
          font-size: 1.5rem;
        }
      }
    }

    .navbar__icons {
      display: flex;
      background-color: transparent;
      font-size: 2rem;
      border: none;
      cursor: pointer;
    }
  }
`;

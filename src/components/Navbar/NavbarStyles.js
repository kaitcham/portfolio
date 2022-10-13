import styled from 'styled-components';

export default styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
  font-family: 'Poppins', sans-serif;

  .navbar__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar__logo {
    font-size: 2rem;
    font-weight: 700;
    color: rgb(63, 63, 65);
  }

  .navbar__icons {
    display: none;
  }

  .navbar__links {
    display: flex;
    list-style: none;
  }

  .navbar__links li {
    margin-left: 2rem;
  }

  .navbar__links a {
    font-size: 1.2rem;
    font-weight: 500;
    color: rgb(63, 63, 65);
    text-decoration: none;
  }

  .navbar__links a::after {
    content: '';
    display: block;
    height: 3px;
    width: 0;
    background: red;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .navbar__links a:hover::after {
    width: 100%;
    background: #ffdd40;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;

    .navbar__container {
      width: 100%;
    }

    .navbar__logo {
      font-size: 1.5rem;
    }

    .navbar__icons {
      display: flex;
      align-items: center;
      border: transparent;
      background: transparent;
      font-size: 1.5rem;
    }

    .navbar__links {
      display: none;
    }

    .navbar__links.active {
      display: flex;
      flex-direction: column;
    }

    .navbar__links.active li {
      margin: 0.75rem 0;
    }

    .navbar__links.active a {
      font-size: 1.25rem;
    }
  }
`;

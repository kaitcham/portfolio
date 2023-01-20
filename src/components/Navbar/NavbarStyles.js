import styled from 'styled-components';

const Wrapper = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    color: #0689d9;
    display: flex;
    font-size: 2rem;
    align-items: center;

    & span {
      &:last-child {
        font-size: 0.75rem;
        transform: translate(-1.75rem, 0.02rem);
      }
    }

    .primary-text {
      color: #fff;
      padding: 0.3rem;
      line-height: 0.9;
      background: #0689d9;
      border-radius: 0.2rem;
    }
    .secondary-text {
      font-size: 3.25rem;
    }
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;
    padding: 15px;
    height: calc(100vh - 5rem);
    background-color: #041525;
    transition: all 0.3s linear;
    transform: translateY(100%);

    li {
      margin: 0.5rem 0;
      a {
        color: var(--primary-color);
        font-size: 1.25rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        &:hover {
          color: orange;
          border-bottom: 2px solid orange;
          transition: all 0.3s linear;
          cursor: pointer;
        }
      }
    }
  }

  .show-nav {
    transform: translateY(0);
  }

  .social-icons {
    display: flex;
    align-items: center;
    transform: translateY(0.25rem);

    a {
      margin: 0 2rem;
      color: var(--primary-color);
      &:hover {
        color: var(--secondary-color);
      }

      &:first-child {
        margin-right: 0;
        svg {
          font-size: 1.45rem;
        }
      }

      &:last-child {
        svg {
          font-size: 1.75rem;
        }
      }
    }
  }

  .navbar-icons {
    color: #fff;
    display: flex;
    cursor: pointer;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transform: translateY(0.05rem);
  }

  @media (min-width: 768px) {
    .nav-links {
      position: relative;
      top: 0;
      left: 0;
      height: auto;
      flex-direction: row;
      transform: translateY(0);
      background-color: transparent;
      li {
        margin-left: 1rem;
        &:first-child {
          margin-left: 0;
        }
      }
    }

    .navbar-icons {
      display: none;
    }
  }
`;

export default Wrapper;

import styled from 'styled-components';

export default styled.section`
  height: 100%;
  display: flex;
  padding: 0 6rem;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;

  .social_media {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: tilt-shaking 0.5s forwards;

    .social_media_icon {
      font-size: 2.5rem;
      color: hsl(250, 69%, 61%);
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #f50057;
      }
    }
  }

  .img_container {
    order: 1;
    position: relative;
    bottom: 1.75rem;
    transform: translate(5rem, 7rem);
    animation: fadeOut 1.5s ease-in-out forwards;

    .profile_img {
      width: 30vw;
      max-width: 380px;
      min-width: 250px;
      fill: hsl(250, 69%, 61%);
    }

    .picture {
      width: 230px;
      transform: rotate(-15deg);
    }
  }

  .intro {
    padding: 0 4rem;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: rgb(63, 63, 65);
      max-width: max-content;
      position: relative;
    }

    h1::before,
    h1::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    h1::before {
      background-color: #fff;
      animation: typewriter 3s steps(16) 1s forwards;
    }

    h1::after {
      width: 0.125rem;
      margin-left: 0.125rem;
      background-color: #000;
      animation: typewriter 3s steps(16) 1s forwards,
        blink 650ms steps(16) infinite;
    }

    p {
      font-size: 1.125rem;
      opacity: 0;
      transform: translateY(1rem);
      animation: fadeInUp 2s ease 5s forwards;
    }

    button {
      text-align: center;
      margin-top: 30px;
      font-size: 1.25rem;
      color: rgb(63, 63, 65);
      padding: 0.75rem 1.25rem;
      background-color: transparent;
      border: 1px solid hsl(250, 69%, 61%);
      border-radius: 5px;
      cursor: pointer;
      opacity: 0;
      transform: translateY(1rem);
      animation: fadeInUp 2s ease 6.5s forwards;
    }
  }

  @media all and (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
    padding: 0 15px;
    margin-top: 80px;

    .social_media {
      .social_media_icon {
        font-size: 1.75rem;
      }
    }

    .img_container {
      order: 0;
      transform: translate(0, 0);
    }

    .intro {
      padding: 0;
      margin-top: 10px;

      p {
        margin-top: 10px;
      }

      button {
        width: 100%;
        margin-top: 50px;
      }
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background-color: transparent;
    }
  }
`;

import styled from 'styled-components';

export const HomeWrapper = styled.section`
  height: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Poppins', sans-serif;
  background-color: #fff;

  .profile {
    /* margin-top: -150px; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    .social_media {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    a:last-child {
      font-weight: bolder;
    }

    .social_media_icon {
      font-size: 1.75rem;
      color: hsl(250, 69%, 61%);

      &:hover {
        color: hsl(250, 57%, 53%);
      }
    }

    .profile_img {
      width: 230px;
      fill: #f3e4a0;
    }

    .picture {
      width: 230px;
      transform: rotate(-15deg);
    }
  }

  .intro {
    /* margin-top: 3rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h1 {
      font-size: 1.75rem;
      font-weight: 600;
      color: rgb(63, 63, 65);
      /* color: hsl(250, 69%, 61%); */
    }

    p {
      font-size: 1.125rem;
    }

    button {
      width: 100%;
      margin-top: 30px;
      font-size: 1.125rem;
      color: rgb(63, 63, 65);
      padding: 0.75rem 1.25rem;
      background-color: transparent;
      border: 1px solid hsl(250, 69%, 61%);
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

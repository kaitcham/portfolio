import styled from 'styled-components';

const Wrapper = styled.section`
  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    line-height: 52px;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 5rem 0;

    .project {
      background-color: #fff;
      border-radius: 10px;

      .project_img {
        width: 100%;
        height: 220px;
        padding: 0.5rem;

        img {
          height: 100%;
          width: 100%;
          border-radius: 10px;
        }
      }

      .project_details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        padding-top: 0.5rem;

        h3 {
          color: #000;
          font-size: 24px;
          font-weight: bold;
          line-height: 31px;
          text-transform: capitalize;
        }

        p {
          color: #000;
          font-size: 18px;
          line-height: 23px;
        }

        .links {
          display: flex;
          gap: 2rem;
          padding-top: 0.5rem;

          a {
            background-color: #cbd5e1;
            border-radius: 5px;
            color: #000;
            font-size: 18px;
            line-height: 23px;
            padding: 0.5rem 1rem;
            text-decoration: none;
            transition: 0.3s ease;

            &:hover {
              background-color: #e2e8f0;
              color: #0689d9;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;

      .project {
        border-radius: 5px;
        .project_img {
          padding: 0;
          height: 200px;
          img {
            border-radius: 5px 5px 0 0;
          }
        }

        .project_details {
          gap: 0.8rem;
          h3 {
            padding-top: 0.5rem;
            font-size: 20px;
          }

          .links {
            a {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;

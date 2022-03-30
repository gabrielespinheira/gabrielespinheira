import styled from 'styled-components'

export const Styled = styled.main`
  margin-bottom: 170px;

  .hero {
    background: transparent url(/wallpaper.png) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 100px 60px;
    overflow: hidden;

    .content {
      position: relative;
      z-index: 9;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 610px;
    }

    h1 {
      font-size: 42px;
      font-weight: 600;

      strong {
        font-size: 42px;
        font-weight: 600;
        color: var(--primary);
      }
    }

    h2 {
      font-size: 38px;
      font-weight: 600;
    }

    p {
      font-size: 22px;
      line-height: 34px;
      font-weight: 400;
    }

    strong {
      font-size: 22px;
      font-weight: 600;
    }

    .actions {
      display: flex;
      flex-direction: row;
      gap: 18px;
      margin-top: 42px;

      a {
        width: 100%;
      }
    }

    button {
      padding-left: 18px;
      padding-right: 18px;
    }

    .thumb {
      position: relative;
      z-index: 9;

      & > div {
        height: 525px;
      }
    }
  }

  .bubble {
    position: absolute;
    z-index: 5;
    background: var(--primary);
    box-shadow: 0 0 140px 220px var(--primary);
    border-radius: 50%;
    overflow: hidden;
    width: 1px;
    height: 1px;
    animation-name: bubble;
    animation-iteration-count: infinite;
    animation-duration: 10s;

    [data-theme='light'] & {
      opacity: 0.5;
      background: var(--primary);
      box-shadow: 0 0 140px 220px var(--primary);
    }
  }

  @keyframes bubble {
    0% {
      top: 10%;
      right: 10%;
    }
    50% {
      top: 80%;
      right: 90%;
    }
    100% {
      top: 10%;
      right: 10%;
    }
  }

  @media (max-width: 899px) {
    @keyframes bubble {
      0% {
        top: 10%;
        left: 0%;
      }
      50% {
        top: 10%;
        left: 100%;
      }
      100% {
        top: 10%;
        left: 0%;
      }
    }

    .bubble {
      animation-duration: 3s;
    }
  }

  @media (max-width: 1299px) {
    .hero {
      gap: 24px;
      .thumb {
        max-width: 400px;

        & > div {
          height: auto;
          display: flex;
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .hero {
      h1,
      h1 strong {
        font-size: 32px;
      }

      h2 {
        font-size: 30px;
      }

      p,
      strong {
        font-size: 20px;
      }

      .actions {
        margin-top: 32px;
        gap: 12px;

        button {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 999px) {
    .hero {
      justify-content: center;
      align-items: center;
      padding: 60px 24px;

      .thumb {
        max-width: 240px;
      }

      h1,
      h1 strong {
        font-size: 28px;
      }

      h2 {
        font-size: 26px;
      }

      p,
      strong {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 899px) {
    margin-bottom: 100px;

    .hero {
      flex-direction: column-reverse;
      padding: 42px 32px;

      .thumb {
        max-width: 320px;
      }

      .content {
        max-width: 100%;
      }

      .actions {
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 12px;

        & > a {
          flex-basis: calc(100% / 4 - 12px * 3);
        }

        button {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 659px) {
    .hero {
      padding: 32px 24px;

      p {
        font-weight: 500;
      }

      .actions {
        & > a {
          flex-basis: calc(100% / 2 - 12px);
        }
      }
    }
  }

  @media (max-width: 499px) {
    .hero {
      h1,
      h1 strong {
        font-size: 22px;
      }

      h2 {
        font-size: 20px;
      }

      p,
      strong {
        font-size: 16px;
      }

      .actions > a {
        flex-basis: calc(100% / 4 - 12px);

        span {
          display: none;
        }
      }
    }
  }

  /* @media (max-width: 399px) {
    .hero .actions > a {
      flex-basis: 100%;
    }
  } */
`

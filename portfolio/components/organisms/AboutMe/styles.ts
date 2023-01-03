import styled from 'styled-components'

export const Styled = styled.main`
  margin-bottom: 130px;

  .aboutme {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 75px;
    margin-bottom: 120px;

    .thumb {
      width: 100%;
      max-width: 446px;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .content {
      width: 100%;

      h2 {
        font-size: 42px;
        font-weight: bold;
        line-height: 56px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 26px;
      }
    }
  }

  .techs {
    background: var(--shape);
    padding: 50px 0;

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 32px;
      row-gap: 38px;
      padding: 0 20px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        flex-basis: calc(100% / 8 - 32px);
        outline: none;

        & > svg {
          color: var(--navyBlue);
          outline: none;
        }

        span {
          font-size: 16px;
          font-weight: 500;
          color: var(--navyBlue);
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .aboutme {
      gap: 24px;
      align-items: flex-start;

      .thumb {
        max-width: 340px;
      }
    }
  }

  @media (max-width: 899px) {
    margin-bottom: 70px;

    .aboutme {
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;

      .content {
        h2 {
          text-align: center;
          font-size: 38px;
        }
      }

      .thumb {
        max-width: 320px;
      }
    }

    .techs {
      .container div {
        flex-basis: calc(100% / 5 - 32px);
      }
    }
  }

  @media (max-width: 599px) {
    .techs {
      .container div {
        flex-basis: calc(100% / 3 - 32px);
      }
    }
  }
`

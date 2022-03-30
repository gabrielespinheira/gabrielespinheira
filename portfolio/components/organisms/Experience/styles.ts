import styled from 'styled-components'

export const Styled = styled.main`
  .experience {
    margin-bottom: 120px;

    h2 {
      width: 100%;
      text-align: center;
      font-size: 42px;
      font-weight: bold;
      line-height: 56px;
      margin-bottom: 64px;
    }

    .jobs {
      .job {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      h3 {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;

        span {
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
        }
      }

      .role,
      .location,
      .description {
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
      }

      .location {
        font-style: italic;
      }

      .description {
        margin: 0;
      }
    }
  }

  @media (max-width: 899px) {
    .experience {
      margin-bottom: 80px;
    }
  }

  @media (max-width: 460px) {
    .experience .jobs {
      h3 {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 4px;
        line-height: 18px;

        span {
          margin-bottom: 4px;
        }
      }

      .role,
      .location,
      .description {
        font-size: 14px;
      }
    }
  }
`

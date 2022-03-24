import styled from 'styled-components'

export const Styled = styled.main`
  margin-bottom: 170px;

  .hero {
    background: url(/wallpaper.png) no-repeat center center;
    background-size: cover;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 100px 60px;

    .content {
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
      font-weight: 300;
    }

    strong {
      font-size: 22px;
      font-weight: 600;
    }

    button {
      margin-top: 42px;
      width: 185px;
    }

    img {
      border-radius: 8px 50px 8px 50px;
      overflow: hidden;
    }
  }
`

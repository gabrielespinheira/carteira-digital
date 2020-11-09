import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font: 400 18px Poppins, sans-serif;

    @media (min-width: 560px) {
      background: #ececec;
    }
  }

  a {
    text-decoration: none;
  }

  .box-link {
    cursor: pointer;
  }

  p, button, input, textarea {
    font: 400 18px Poppins, sans-serif;
  }

  button, input, textarea {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  input, textarea, button {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  div, p, button, h1, h2, h3, h4, h5, h6 {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  .bullet {
    transition: all .8s;
  }

  .select {
    position: relative;

    select {
      width: 100%;
      border: 1px solid ${(props) => props.theme.colors.gray};
      border-radius: ${(props) => props.theme.radii.md};
      padding-left: ${(props) => props.theme.space.sm}px;
      padding-right: ${(props) => props.theme.space.sm}px;
      background: ${(props) => props.theme.colors.white};
      font: 400 ${(props) => props.theme.fontSizes.sm} Poppins, sans-serif;
      outline: none;
      height: 60px;
      -webkit-appearance: none;
    }

    svg {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }

  /* toastify */
  .Toastify__toast-container {
    padding: 7px;

    .Toastify__toast {
    border-radius: 7px;
    min-height: initial;
    margin-bottom: 5px;
    font: 400 15px Poppins, sans-serif;

    .Toastify__toast-body {
      line-height: 1.6;
      margin: 4px;
    }
  }
  }

  /* scroll bar */
  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.white};
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: #ccc;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #999;
    }
  }

  /* responsive */
  @media (max-width: 380px) {
    .tab-control {
          > div > div {
          flex-direction: column;

          & > div {
            min-height: initial;
            margin-left: 0;
            margin-right: 0;
          }

          p {
            font-size: 20px;
          }
        }
      }
    }

  @media (max-height: 815px) {
    .tab-account {
      .total-balance {
        min-height: 100px;

        p {
          font-size: 22px;
        }

        p + p {
          font-size: 17px;
        }
      }
    }
  }

  @media (max-height: 780px) {
    .tab-account {
      .card-display .backgroundCard {
        padding: 16px;
        min-height: 200px;
      }

      .bank-balance, .card-balance {
        min-height: 100px;
      }
    }
  }
`

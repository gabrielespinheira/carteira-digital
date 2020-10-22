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

  select {
    border: 1px solid ${(props) => props.theme.colors.gray};
    border-radius: ${(props) => props.theme.radii.md};
    padding-left: ${(props) => props.theme.space.sm}px;
    padding-right: ${(props) => props.theme.space.sm}px;
    background: ${(props) => props.theme.colors.white};
    font: 400 ${(props) => props.theme.fontSizes.sm} Poppins, sans-serif;
    outline: none;
    height: 60px;
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
`

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:  #D9E6F6;
  }
  #__next{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  img{
    height: auto;
    max-width: 100%;
    display: block;

  }
`;

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

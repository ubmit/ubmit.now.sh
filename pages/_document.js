import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: linear-gradient(340deg, purple, #991346);
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: whitesmoke;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>
            Guilherme de Andrade - Frontend Development, JavaScript, React
          </title>
          {this.props.styleTags}
          <script defer src="/static/icons/icons.min.js" />
          <link rel="shortcut icon" href="/static/favicon/GA.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

const {
  Html,
  Head,
  Main,
  NextScript,
  default: Document,
} = require("next/document");

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

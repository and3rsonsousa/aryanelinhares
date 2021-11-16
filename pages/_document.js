import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

const MyDocument = (ctx) => (
  <Html lang="pt-br">
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="pt-BR" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta content="#003388" name="theme-color" />

      <link rel="shortcut icon" href="/favicon.png" />
      <meta
        name="description"
        content="Bolos, Tortas, Croissants e os melhores cafés de Sobral."
      />
      <meta name="robots" content="all" />
      <meta name="author" content="CANIVETE - Branding & Advertising" />
      <meta
        name="keywords"
        content="bolo, tortas, croissants, cafés, bolos por encomendas, brigadeiros, tapiocas, cuscuz, waffle, bala baiana"
      />
      <meta property="og:type" content="page" />
      <meta property="og:url" content="aryanelinhares.cnvt.link" />
      <meta property="og:title" content="Aryane Linhares" />
      <meta property="og:image" content="/seo.jpg" />
      <meta property="og:image:width" content="1200px" />
      <meta property="og:image:height" content="630px" />
      <meta
        property="og:description"
        content="Bolos, Tortas, Croissants e os melhores cafés de Sobral."
      />
      <meta
        property="article:author"
        content="CANIVETE - Branding & Advertising"
      />
    </Head>
    <body>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;

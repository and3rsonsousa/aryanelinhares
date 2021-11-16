import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-8 app bg-gradient-to-br from-brand-1 to-brand-2">
      <div className="container relative z-10 max-w-sm mx-auto">
        <header>
          <div>
            <Image src="/logo.png" width={120} height={120} />
          </div>
        </header>
        <Component {...pageProps} />
      </div>
      <div style={{ display: "none" }}>
        <Image src="/seo.jpg" alt="Aryane Linhares" width={600} height={315} />
      </div>
    </div>
  );
}

export default MyApp;

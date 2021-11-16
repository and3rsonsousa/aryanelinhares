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
      <img src="/seo.jpg" alt="" style={{ display: "none" }} />
    </div>
  );
}

export default MyApp;

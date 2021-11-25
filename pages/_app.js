import "../styles/globals.css";
import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";
import { GTM_ID, pageview } from "../lib/gtm";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
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
          <Image
            src="/seo.jpg"
            alt="Aryane Linhares"
            width={600}
            height={315}
          />
        </div>
      </div>
    </>
  );
}

export default MyApp;

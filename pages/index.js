import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aryane Linhares</title>
      </Head>

      <section>
        <div className="py-4 space-y-4">
          <div>
            <Link href="/whatsapp">
              <a className="justify-center font-semibold button button-primary">
                <span className="block">Fazer pedido</span>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-1">
        <Link href="/encomendas">
          <a className="justify-center button">
            <span> Fazer uma Encomendas </span>
          </a>
        </Link>
      </section>
      <section className="py-1">
        <a
          href="https://g.page/aryanelinhares"
          className="justify-center button"
        >
          <span> Onde estamos ( Mapa ) </span>
        </a>
      </section>
    </>
  );
}

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

      <div className="p-4 mb-4 rounded-lg bg-brand-2">
        <div className="mb-2 font-bold tracking-widest text-center animate-pulse">
          NOVIDADE
        </div>
        <section className="py-1">
          <Link href="/encomendas">
            <a className="justify-center button">
              <span> Faça sua Encomenda </span>
            </a>
          </Link>
        </section>
      </div>
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

import { useState } from "react";
import Head from "next/head";

const Encomendas = () => {
  const [encomenda, setEncomenda] = useState({
    tamanho: "PP",
    massa: "Branca",
    recheios: [],
    cobertura: "",
  });
  let encomendaText = `*E N C O M E N D A* \n\n Tamanho: *${
    encomenda.tamanho
  }* \n Massa: *${encomenda.massa}* \n Recheios: *${encomenda.recheios.join(
    " e "
  )}* \n Cobertura: *${encomenda.cobertura}* \n`;
  return (
    <div>
      <Head>
        <title>Aryane Linhares - Solicite seu Orçamento</title>
      </Head>
      <h3 className="mb-2">Faça sua Encomenda</h3>
      <p>Escolha as opções do seu bolo.</p>

      {/* Tamanho */}

      <section>
        <h4>Tamanho</h4>
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              name: "PP",
              description: "8 fatias",
            },
            {
              name: "P",
              description: "15 fatias",
            },
            {
              name: "M",
              description: "25 fatias",
            },
            {
              name: "G",
              description: "35 fatias",
            },
          ].map((item) => (
            <div
              key={item.name}
              className={`py-3 px-2 text-center cursor-pointer rounded-xl ${
                encomenda.tamanho == item.name
                  ? "bg-brand-3 text-brand-1"
                  : "bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setEncomenda(() => ({ ...encomenda, tamanho: item.name }));
              }}
            >
              <span className="font-semibold">{item.name}</span>
              <br />
              <span className="text-xs tracking-wider uppercase opacity-60">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Massa */}
      <section>
        <h4>Massa</h4>
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              name: "Branca",
            },
            {
              name: "Preta",
            },
            {
              name: "Maria Celeste",
              description: "Branca e Preta",
            },
          ].map((item) => (
            <div
              key={item.name}
              className={`py-2 px-4 text-center cursor-pointer rounded-xl ${
                encomenda.massa == item.name
                  ? "bg-brand-3 text-brand-1"
                  : "bg-white"
              } ${
                item.description ? "col-span-2" : "col-span-1"
              } flex items-center justify-center flex-col`}
              onClick={(e) => {
                e.preventDefault();
                setEncomenda(() => ({ ...encomenda, massa: item.name }));
              }}
            >
              <span className="font-semibold">{item.name}</span>
              {item.description && (
                <span className="text-xs tracking-wider uppercase opacity-60">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Recheios */}
      <section>
        <h4>Recheios</h4>
        <h5 className="opacity-60">Tradicionais</h5>
        <div className="grid grid-cols-6 gap-2 ">
          {[
            {
              name: "Brigadeiro",
            },
            {
              name: "Beijinho",
            },
            {
              name: "Ninho",
            },
            {
              name: "Doce de Leite",
            },
            {
              name: "Doce de Leite com crocante",
            },
            {
              name: "Leite Condensado",
            },
            {
              name: "Leite Condensado com Crocante",
            },
          ].map((item, i) => (
            <div
              key={item.name}
              className={`py-3 px-4 text-center cursor-pointer rounded-xl leading-none ${
                encomenda.recheios.filter((recheio) => recheio == item.name)
                  .length > 0
                  ? "bg-brand-3 text-brand-1"
                  : "bg-white"
              } ${
                i > 2 ? "col-span-3" : "col-span-2"
              } flex items-center justify-center flex-col`}
              onClick={(e) => {
                e.preventDefault();
                if (
                  encomenda.recheios.filter((recheio) => recheio == item.name)
                    .length > 0
                ) {
                  setEncomenda(() => ({
                    ...encomenda,
                    recheios: [
                      ...encomenda.recheios.filter(
                        (recheio) => recheio != item.name
                      ),
                    ],
                  }));
                } else if (encomenda.recheios.length < 2) {
                  setEncomenda(() => ({
                    ...encomenda,
                    recheios:
                      encomenda.recheios.filter(
                        (recheio) => recheio == item.name
                      ).length > 0
                        ? [
                            ...encomenda.recheios.filter(
                              (recheio) => recheio != item.name
                            ),
                          ]
                        : [...encomenda.recheios, item.name],
                  }));
                } else {
                  alert(
                    "Você só pode escolher dois recheio. Para selecionar um sabor diferente, você precisa remover algum dos que já estão selecionados."
                  );
                }
              }}
            >
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
        <h5 className="mt-8 opacity-60">Especiais</h5>
        <div className="grid grid-cols-2 gap-2 ">
          {[
            {
              name: "Ninho com Nutella",
            },
            {
              name: "Kit Kat",
            },
          ].map((item, i) => (
            <div
              key={item.name}
              className={`py-3 px-4 text-center cursor-pointer rounded-xl leading-none ${
                encomenda.recheios.filter((recheio) => recheio == item.name)
                  .length > 0
                  ? "bg-brand-3 text-brand-1"
                  : "bg-white"
              } flex items-center justify-center flex-col`}
              onClick={(e) => {
                e.preventDefault();
                if (
                  encomenda.recheios.filter((recheio) => recheio == item.name)
                    .length > 0
                ) {
                  setEncomenda(() => ({
                    ...encomenda,
                    recheios: [
                      ...encomenda.recheios.filter(
                        (recheio) => recheio != item.name
                      ),
                    ],
                  }));
                } else if (encomenda.recheios.length < 2) {
                  setEncomenda(() => ({
                    ...encomenda,
                    recheios:
                      encomenda.recheios.filter(
                        (recheio) => recheio == item.name
                      ).length > 0
                        ? [
                            ...encomenda.recheios.filter(
                              (recheio) => recheio != item.name
                            ),
                          ]
                        : [...encomenda.recheios, item.name],
                  }));
                } else {
                  alert("Você só pode escolher dois recheio");
                }
              }}
            >
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h4>Coberturas</h4>
        <div className="grid grid-cols-2 gap-2 ">
          {[
            {
              name: "Brigadeiro",
            },
            {
              name: "Ninho",
            },
            {
              name: "Leite Condensado",
            },
            {
              name: "Leite Condensado com Crocante",
            },
            {
              name: "Doce de Leite",
            },
            {
              name: "Beijinho",
            },
          ].map((item, i) => (
            <div
              key={item.name}
              className={`py-3 px-4 text-center cursor-pointer rounded-xl leading-none ${
                encomenda.cobertura == item.name
                  ? "bg-brand-3 text-brand-1"
                  : "bg-white"
              } flex items-center justify-center flex-col`}
              onClick={(e) => {
                e.preventDefault();
                setEncomenda(() => ({
                  ...encomenda,
                  cobertura: item.name,
                }));
              }}
            >
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-16 ">
        <h3>Confira o seu pedido</h3>
        <div className="p-8 mt-4 bg-brand-1 rounded-xl">
          <div className="flex justify-between py-4 border-b border-brand-2">
            <div className="w-20 space-y-4">
              <span className="font-semibold">Tamanho</span>
            </div>
            <div className="ml-8 space-y-4 text-right">
              <div>{encomenda.tamanho}</div>
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-brand-2">
            <div className="w-20 space-y-4">
              <span className="font-semibold">Massa</span>
            </div>
            <div className="ml-8 space-y-4 text-right">
              <div>{encomenda.massa}</div>
            </div>
          </div>
          <div className="flex justify-between py-4 border-b border-brand-2">
            <div className="w-20 space-y-4">
              <span className="font-semibold">Recheios</span>
            </div>
            <div className="ml-8 space-y-4 text-right">
              <div>
                {encomenda.recheios.length === 0 ? (
                  <span className="text-xs tracking-wide uppercase opacity-60">
                    Sem Recheios
                  </span>
                ) : (
                  encomenda.recheios.join(" e ")
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between py-2">
            <div className="w-20 space-y-4">
              <span className="font-semibold">Cobertura</span>
            </div>
            <div className="ml-8 space-y-4 text-right">
              <div>
                {encomenda.cobertura ? (
                  encomenda.cobertura
                ) : (
                  <span className="text-xs tracking-wide uppercase opacity-60">
                    Sem Cobertura
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16 mt-8">
        <a
          href={`https://wa.me/+5588981082050?text=${encodeURI(encomendaText)}`}
          className="justify-center button button-primary"
        >
          Solicitar Orçamento
        </a>
        <div className="mt-2 text-sm text-center">
          Retornaremos o seu contato confirmando a sua encomenda
        </div>
      </div>
    </div>
  );
};

export default Encomendas;

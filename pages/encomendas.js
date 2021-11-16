import { useState } from "react";

const Encomendas = () => {
  const [encomenda, setEncomenda] = useState({
    tamanho: "PP",
    massa: "Branca",
    recheio: "",
    cobertura: "",
  });
  return (
    <div>
      <h3>Faça sua Encomenda</h3>
      <section>
        <h4>Tamanho</h4>
        <div className="grid grid-cols-4 rounded-xl overflow-hidden">
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
              className={`py-2 px-4 text-center cursor-pointer ${
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
              <span className="text-xs uppercase tracking-wider opacity-60">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h4>Massa</h4>
        <div className="grid grid-cols-4 rounded-xl overflow-hidden">
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
              className={`py-2 px-4 text-center cursor-pointer ${
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
                <span className="text-xs uppercase tracking-wider opacity-60">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h4>Recheio</h4>
        <div className="grid grid-cols-2 rounded-xl overflow-hidden">
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
              className={`py-2 px-4 text-center cursor-pointer ${
                encomenda.massa == item.name
                  ? "bg-brand-3 text-brand-1"
                  : "bg-white"
              } flex items-center justify-center flex-col`}
              onClick={(e) => {
                e.preventDefault();
                setEncomenda(() => ({ ...encomenda, massa: item.name }));
              }}
            >
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h4>Coberturas</h4>
        <div className="grid grid-cols-2 space-y-2 space-x-4"></div>
      </section>
      <div className="mt-16">
        <h3>Confira o seu pedido</h3>
        <div className="rounded-xl mt-4 bg-brand-1 p-8 flex justify-between">
          <div className="w-20">
            <div>
              <span className="font-semibold">Tamanho</span>
            </div>
            <div>
              <span className="font-semibold">Massa</span>
            </div>
            <div>
              <span className="font-semibold">Recheio</span>
            </div>
            <div>
              <span className="font-semibold">Cobertura</span>
            </div>
          </div>
          <div className="ml-8 text-right">
            <div>{encomenda.tamanho}</div>
            <div>{encomenda.massa}</div>
            <div>{encomenda.recheio}</div>
            <div>{encomenda.cobertura}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encomendas;

import { useState } from 'react';
import { usePublicacoes } from '../hooks/usePublicacoes';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function Explorar() {
  const [limite, setLimite] = useState(6);
  const { dados, loading, erro } = usePublicacoes(limite);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Explorar Publicações (API Conectada)
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            Dados carregados via <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">services/api.js</code> e <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">hooks/usePublicacoes.js</code>.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setLimite(3)}>
            3 itens
          </Button>
          <Button variant="primary" onClick={() => setLimite(6)}>
            6 itens
          </Button>
        </div>
      </div>

      {loading && (
        <div className="py-12 text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
          Carregando registros da API...
        </div>
      )}

      {erro && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
          {erro}
        </div>
      )}

      {!loading && !erro && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dados.map((post) => (
            <Card
              key={post.id}
              badge={`Registro #${post.id}`}
              titulo={post.title}
              descricao={post.body}
            />
          ))}
        </div>
      )}
    </div>
  );
}
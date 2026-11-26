import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';

export function Home() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-8">
      <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
          Entrega Parcial • Arquitetura Limpa
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Base Estrutural do Projeto Final React
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Aplicação estruturada com separação de responsabilidades (<strong>components</strong>, <strong>pages</strong>, <strong>services</strong>, <strong>contexts</strong> e <strong>hooks</strong>), roteamento SPA via React Router, consumo de API REST e alternância global de tema salva no <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs">localStorage</code>.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => navigate('/explorar')}>
            Ver Dados da API Conectada →
          </Button>
          <Button variant="secondary" onClick={toggleTheme}>
            Alternar Tema (Atual: {theme === 'light' ? 'Claro' : 'Escuro'})
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card
          badge="Roteamento"
          titulo="Layout & Outlet"
          descricao="Header, NavLink ativo e Footer compartilhados de forma persistente entre todas as rotas."
        />
        <Card
          badge="Serviços & Hooks"
          titulo="API Desacoplada"
          descricao="Requisições isoladas em src/services/api.js e consumidas de forma reativa via custom hook."
        />
        <Card
          badge="Estado Global"
          titulo="ThemeContext"
          descricao="Context API controlando o modo claro/escuro em toda a árvore de componentes com persistência."
        />
      </section>
    </div>
  );
}
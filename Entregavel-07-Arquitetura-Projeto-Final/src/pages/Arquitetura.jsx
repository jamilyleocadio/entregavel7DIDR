import { Card } from '../components/Card';

const DIRETORIOS = [
  {
    pasta: 'src/components/',
    papel: 'Componentes UI Reutilizáveis',
    descricao: 'Contém Button, Card, Header, Footer e Layout. Não possui regras de negócio ou chamadas diretas de API.'
  },
  {
    pasta: 'src/pages/',
    papel: 'Telas / Rotas da Aplicação',
    descricao: 'Contém Home, Explorar e Arquitetura. Orquestra os componentes visuais e conecta os dados de cada rota.'
  },
  {
    pasta: 'src/services/',
    papel: 'Comunicação Externa (API)',
    descricao: 'Centraliza o fetch, URLs base e validação de resposta HTTP (api.js), isolando o acesso a dados.'
  },
  {
    pasta: 'src/contexts/',
    papel: 'Estado Global (Context API)',
    descricao: 'Armazena o ThemeContext para compartilhar o tema claro/escuro e sincronizar com o localStorage.'
  },
  {
    pasta: 'src/hooks/',
    papel: 'Hooks Personalizados',
    descricao: 'Encapsula lógicas reativas reutilizáveis como usePublicacoes, gerenciando loading, erro e dados.'
  }
];

export function Arquitetura() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Estrutura de Pastas & Escopo
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
          Organização modular planejada para escalabilidade e manutenção do projeto final.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {DIRETORIOS.map((dir) => (
          <Card
            key={dir.pasta}
            badge={dir.pasta}
            titulo={dir.papel}
            descricao={dir.descricao}
          />
        ))}
      </div>
    </div>
  );
}
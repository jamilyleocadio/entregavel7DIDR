import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm">
            PF
          </span>
          <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            Projeto Final • Hub
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={linkClass}>
            Início
          </NavLink>
          <NavLink to="/explorar" className={linkClass}>
            Explorar API
          </NavLink>
          <NavLink to="/arquitetura" className={linkClass}>
            Arquitetura
          </NavLink>

          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="ml-2 px-3 py-2 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
          </button>
        </div>
      </nav>
    </header>
  );
}
export function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  const base = 'px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 focus:ring-slate-400',
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant] || variants.primary}`}>
      {children}
    </button>
  );
}
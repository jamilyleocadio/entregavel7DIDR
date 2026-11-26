export function Card({ badge, titulo, descricao, footer }) {
  return (
    <article className="bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex flex-col justify-between transition-colors">
      <div>
        {badge && (
          <span className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
            {badge}
          </span>
        )}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 capitalize">
          {titulo}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {descricao}
        </p>
      </div>

      {footer && (
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-end gap-2">
          {footer}
        </div>
      )}
    </article>
  );
}
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Explorar } from './pages/Explorar';
import { Arquitetura } from './pages/Arquitetura';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explorar" element={<Explorar />} />
            <Route path="arquitetura" element={<Arquitetura />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
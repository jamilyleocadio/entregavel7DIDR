import { useState, useEffect } from 'react';
import { buscarPublicacoes } from '../services/api';

export function usePublicacoes(limite = 6) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    let ativo = true;
    setLoading(true);
    setErro('');

    buscarPublicacoes(limite)
      .then((res) => {
        if (ativo) setDados(res);
      })
      .catch((err) => {
        if (ativo) setErro(err.message || 'Falha ao conectar com a API.');
      })
      .finally(() => {
        if (ativo) setLoading(false);
      });

    return () => {
      ativo = false;
    };
  }, [limite]);

  return { dados, loading, erro };
}
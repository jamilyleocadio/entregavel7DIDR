const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function buscarPublicacoes(limite = 6) {
  const resposta = await fetch(`${BASE_URL}/posts?_limit=${limite}`);
  if (!resposta.ok) {
    throw new Error(`Erro HTTP ${resposta.status} ao carregar dados da API.`);
  }
  return resposta.json();
}
export const api = async (path: string, options: RequestInit = {}) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  let res = await fetch(`${baseUrl}${path}`, { credentials: 'include', ...options });
  
  if (res.status === 401 && !path.includes('/auth/refresh')) {
    await fetch(`${baseUrl}/auth/refresh`, { method: 'POST', credentials: 'include' }).catch(() => {});
    res = await fetch(`${baseUrl}${path}`, options);
  }
  
  const data = await res.json().catch(() => ({ error: 'Resposta inválida' }));
  if (!res.ok) throw new Error(data.error || data.message || 'Falha de comunicação');
  return data;
};

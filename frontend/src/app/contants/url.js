export const API_URL = process.env.API_URL || 'http://api.yokaicdmx.com/graphql';
export const BASE_URL = process.env.BASE_URL || 'http://api.yokaicdmx.com/';

// Helper function to get full image URL
export const getImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  // Elimina la barra final de BASE_URL y la inicial de url antes de unir
  const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const path = url.startsWith('/') ? url.slice(1) : url;
  return `${base}/${path}`;
};

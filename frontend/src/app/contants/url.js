export const API_URL = process.env.API_URL || 'http://localhost:5000/api';
export const BASE_URL = process.env.BASE_URL || 'http://192.168.100.11:1337';

// Helper function to get full image URL
export const getImageUrl = (url) => {
  if (!url) return '';
  // If URL is already complete (starts with http), return as is
  if (url.startsWith('http')) return url;
  // Otherwise, prepend BASE_URL if it exists
  return BASE_URL ? `${BASE_URL}${url}` : url;
};

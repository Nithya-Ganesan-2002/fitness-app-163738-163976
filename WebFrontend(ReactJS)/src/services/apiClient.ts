import axios from 'axios';
import { useAuthStore } from '@store/authStore';

const apiBase = import.meta.env.VITE_API_BASE_URL as string | undefined;

// PUBLIC_INTERFACE
export const api = axios.create({
  baseURL: apiBase ?? 'http://localhost:8000',
  timeout: 15000
});

/**
 * PUBLIC_INTERFACE
 * Configure axios interceptors to attach auth token and handle errors.
 */
export function setupApiInterceptors() {
  api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err?.response?.status === 401) {
        useAuthStore.getState().logout();
        // Allow caller to handle redirect.
      }
      return Promise.reject(err);
    }
  );
}

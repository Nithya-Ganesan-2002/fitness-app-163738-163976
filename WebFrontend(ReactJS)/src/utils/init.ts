import { setupApiInterceptors } from '@services/apiClient';

// PUBLIC_INTERFACE
export function initializeApp() {
  /** Initialize app-wide services (API interceptors, etc.). */
  setupApiInterceptors();
}

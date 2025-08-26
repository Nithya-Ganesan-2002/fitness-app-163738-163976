import { initializeApp } from '@utils/init';

// PUBLIC_INTERFACE
export function appInitOnce() {
  /** Initialize app subsystems exactly once. */
  initializeApp();
}

appInitOnce();

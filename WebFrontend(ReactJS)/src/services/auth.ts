import { api } from './apiClient';

export type Credentials = { email: string; password: string };
export type Registration = { email: string; password: string; name?: string };

// PUBLIC_INTERFACE
export async function loginRequest(creds: Credentials): Promise<{ token: string; user: { id: string; email: string; name?: string } }> {
  /** Sends login request to backend; placeholder if API not ready. */
  try {
    const { data } = await api.post('/auth/login', creds);
    return data;
  } catch {
    // Mocked fallback
    await new Promise((r) => setTimeout(r, 500));
    return {
      token: 'mock-token',
      user: { id: 'u_1', email: creds.email, name: 'Mock User' }
    };
  }
}

// PUBLIC_INTERFACE
export async function registerRequest(payload: Registration): Promise<{ id: string; email: string; name?: string }> {
  /** Sends registration request to backend; placeholder if API not ready. */
  try {
    const { data } = await api.post('/auth/register', payload);
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 500));
    return { id: 'u_1', email: payload.email, name: payload.name };
  }
}

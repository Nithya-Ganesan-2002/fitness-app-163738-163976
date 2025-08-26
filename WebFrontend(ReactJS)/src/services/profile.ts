import { api } from './apiClient';

export type Profile = {
  id: string;
  email: string;
  name?: string;
  heightCm?: number;
  weightKg?: number;
  goal?: string;
};

// PUBLIC_INTERFACE
export async function fetchProfile(): Promise<Profile> {
  /** Fetch user profile (placeholder). */
  try {
    const { data } = await api.get('/profile/me');
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    return { id: 'u_1', email: 'user@example.com', name: 'Mock User', heightCm: 175, weightKg: 68.5, goal: 'Build strength' };
  }
}

// PUBLIC_INTERFACE
export async function updateProfile(patch: Partial<Profile>): Promise<Profile> {
  /** Update user profile (placeholder). */
  try {
    const { data } = await api.patch('/profile/me', patch);
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    return { id: 'u_1', email: 'user@example.com', name: patch.name ?? 'Mock User', heightCm: patch.heightCm ?? 175, weightKg: patch.weightKg ?? 68.5, goal: patch.goal ?? 'Build strength' };
  }
}

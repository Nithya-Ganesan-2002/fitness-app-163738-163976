import { api } from './apiClient';

export type Exercise = {
  id: string;
  name: string;
  muscles: string[];
  equipment?: string[];
  instructions?: string;
};

// PUBLIC_INTERFACE
export async function fetchExercises(query?: string): Promise<Exercise[]> {
  /** Fetch exercise library (placeholder). */
  try {
    const { data } = await api.get('/library', { params: { q: query } });
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    const all: Exercise[] = [
      { id: '1', name: 'Squat', muscles: ['Quadriceps', 'Glutes'], instructions: 'Stand with feet shoulder-width apart and squat down.' },
      { id: '2', name: 'Bench Press', muscles: ['Chest', 'Triceps'], instructions: 'Press the barbell from chest to full extension.' },
      { id: '3', name: 'Deadlift', muscles: ['Back', 'Hamstrings'], instructions: 'Lift the barbell from the floor while keeping back neutral.' }
    ];
    if (!query) return all;
    return all.filter((e) => e.name.toLowerCase().includes(query.toLowerCase()));
  }
}

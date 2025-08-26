import { api } from './apiClient';

export type WorkoutEntry = {
  date: string; // ISO
  exercise: string;
  sets: number;
  reps: number;
  weight?: number;
  durationMin?: number;
  notes?: string;
};

// PUBLIC_INTERFACE
export async function logWorkout(entry: WorkoutEntry): Promise<{ ok: true }> {
  /** Log a workout entry to backend (placeholder). */
  try {
    await api.post('/workouts/log', entry);
    return { ok: true };
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    return { ok: true };
  }
}

// PUBLIC_INTERFACE
export async function fetchWorkoutSummary(): Promise<{ weeklyVolume: number[]; labels: string[] }> {
  /** Fetch weekly volume summary (placeholder). */
  try {
    const { data } = await api.get('/workouts/summary');
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    return { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], weeklyVolume: [32, 44, 28, 50, 40, 22, 35] };
  }
}

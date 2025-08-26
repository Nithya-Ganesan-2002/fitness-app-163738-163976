import { api } from './apiClient';

export type Recommendation = {
  id: string;
  title: string;
  rationale: string;
  plan: { day: string; exercises: { name: string; sets: number; reps: number }[] }[];
};

// PUBLIC_INTERFACE
export async function fetchRecommendations(): Promise<Recommendation[]> {
  /** Fetch adaptive recommendations based on recent logs (placeholder). */
  try {
    const { data } = await api.get('/recommendations');
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    return [
      {
        id: 'r1',
        title: 'Hypertrophy Focus',
        rationale: 'You responded well to higher volume last week.',
        plan: [
          { day: 'Day 1', exercises: [{ name: 'Squat', sets: 4, reps: 10 }, { name: 'Leg Press', sets: 3, reps: 12 }] },
          { day: 'Day 2', exercises: [{ name: 'Bench Press', sets: 4, reps: 10 }, { name: 'Incline DB Press', sets: 3, reps: 12 }] }
        ]
      }
    ];
  }
}

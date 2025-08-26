import { api } from './apiClient';

// PUBLIC_INTERFACE
export async function fetchProgress(): Promise<{ dates: string[]; weight: number[]; pr: number[] }> {
  /** Fetch user progress time series (placeholder). */
  try {
    const { data } = await api.get('/analytics/progress');
    return data;
  } catch {
    await new Promise((r) => setTimeout(r, 300));
    const dates = Array.from({ length: 8 }).map((_, i) => `W${i + 1}`);
    return { dates, weight: [70, 69.5, 69, 68.7, 68.4, 68.3, 68.0, 67.8], pr: [50, 52.5, 55, 57.5, 60, 62.5, 65, 67.5] };
  }
}

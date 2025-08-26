import React, { useEffect, useState } from 'react';
import { Exercise, fetchExercises } from '@services/library';
import { Card } from '@components/common/Card';

const Library: React.FC = () => {
  /** Browse exercise library with search filter. */
  const [q, setQ] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async (query?: string) => {
    setLoading(true);
    const items = await fetchExercises(query);
    setExercises(items);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Exercise Library</h1>
      <div className="form-control" role="search">
        <label className="label" htmlFor="q">Search exercises</label>
        <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g., squat, bench..." />
        <div style={{ marginTop: '.5rem' }}>
          <button onClick={() => load(q)} disabled={loading} aria-disabled={loading}>
            {loading ? 'Searching…' : 'Search'}
          </button>
        </div>
      </div>

      <div className="grid grid-2">
        {exercises.map((e) => (
          <Card key={e.id} title={e.name} ariaLabel={`${e.name} card`}>
            <p><strong>Muscles:</strong> {e.muscles.join(', ')}</p>
            {e.instructions && <p><strong>How to:</strong> {e.instructions}</p>}
          </Card>
        ))}
        {exercises.length === 0 && !loading && <p role="status">No exercises found.</p>}
      </div>
    </div>
  );
};

export default Library;

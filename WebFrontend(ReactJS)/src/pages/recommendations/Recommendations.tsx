import React, { useEffect, useState } from 'react';
import { Recommendation, fetchRecommendations } from '@services/recommendations';
import { Card } from '@components/common/Card';

const Recommendations: React.FC = () => {
  /** Adaptive recommendations page. */
  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRecommendations().then(setRecs).finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid">
      <Card title="Adaptive Recommendations">
        {loading && <p role="status">Loading…</p>}
        {!loading && recs.length === 0 && <p>No recommendations available.</p>}
        {recs.map((r) => (
          <Card key={r.id} title={r.title} ariaLabel={`Recommendation ${r.title}`}>
            <p style={{ color: 'var(--muted)' }}>{r.rationale}</p>
            <ul>
              {r.plan.map((d) => (
                <li key={d.day} style={{ marginBottom: '.5rem' }}>
                  <strong>{d.day}</strong>
                  <ul>
                    {d.exercises.map((ex, i) => (
                      <li key={i}>{ex.name} — {ex.sets}x{ex.reps}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default Recommendations;

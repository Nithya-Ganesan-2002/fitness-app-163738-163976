import React, { useEffect, useState } from 'react';
import { Card } from '@components/common/Card';
import { fetchWorkoutSummary } from '@services/workouts';
import { useAuthStore } from '@store/authStore';
import { Link } from 'react-router-dom';
import { initializeApp } from '@utils/init';

const Dashboard: React.FC = () => {
  /** Personalized dashboard with quick stats and links. */
  const user = useAuthStore((s) => s.user);
  const [summary, setSummary] = useState<{ labels: string[]; weeklyVolume: number[] } | null>(null);

  useEffect(() => {
    initializeApp();
    fetchWorkoutSummary().then(setSummary).catch(() => setSummary(null));
  }, []);

  return (
    <div className="grid">
      <Card title={`Welcome${user?.name ? `, ${user.name}` : ''}`} ariaLabel="Welcome card">
        <p>Your adaptive plan is ready. Log today’s session and view recommendations to keep progressing.</p>
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
          <Link className="btn" to="/workouts/log">Log Workout</Link>
          <Link className="btn" to="/recommendations">View Recommendations</Link>
          <Link className="btn" to="/analytics">See Analytics</Link>
        </div>
      </Card>

      <Card title="This Week's Volume" ariaLabel="Weekly volume chart">
        {summary ? (
          <ul aria-label="Weekly volume list">
            {summary.labels.map((d, i) => (
              <li key={d} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1f2937', padding: '.4rem 0' }}>
                <span>{d}</span>
                <span>{summary.weeklyVolume[i]} units</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted">No data available.</p>
        )}
      </Card>
    </div>
  );
};

export default Dashboard;

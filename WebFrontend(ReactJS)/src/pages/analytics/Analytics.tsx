import React, { useEffect, useState } from 'react';
import { fetchProgress } from '@services/analytics';
import { Card } from '@components/common/Card';

const Analytics: React.FC = () => {
  /** Progress analytics visualization. */
  const [data, setData] = useState<{ dates: string[]; weight: number[]; pr: number[] } | null>(null);

  useEffect(() => {
    fetchProgress().then(setData).catch(() => setData(null));
  }, []);

  return (
    <div className="grid">
      <Card title="Weight Trend">
        {data ? (
          <ul aria-label="Weight over time">
            {data.dates.map((d, i) => (
              <li key={d} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{d}</span>
                <span>{data.weight[i]} kg</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </Card>

      <Card title="Personal Records">
        {data ? (
          <ul aria-label="PR over time">
            {data.dates.map((d, i) => (
              <li key={d} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{d}</span>
                <span>{data.pr[i]} kg</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </Card>
    </div>
  );
};

export default Analytics;

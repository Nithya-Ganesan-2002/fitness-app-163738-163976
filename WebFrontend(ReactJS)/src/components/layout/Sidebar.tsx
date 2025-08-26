import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
const Sidebar: React.FC = () => {
  /** Sidebar for quick access to modules. */
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <ul role="list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li><NavLink to="/" end>Dashboard</NavLink></li>
        <li><NavLink to="/workouts/log">Log Workout</NavLink></li>
        <li><NavLink to="/analytics">Progress Analytics</NavLink></li>
        <li><NavLink to="/library">Exercise Library</NavLink></li>
        <li><NavLink to="/recommendations">Adaptive Recommendations</NavLink></li>
        <li><NavLink to="/profile">User Profile</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

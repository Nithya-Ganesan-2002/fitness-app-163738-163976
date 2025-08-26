import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

// PUBLIC_INTERFACE
const Header: React.FC = () => {
  /** Header navigation bar with auth-aware links. */
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <header className="header" role="banner">
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
        <Link to="/" aria-label="Adaptive Fitness Home" style={{ color: 'white', textDecoration: 'none', fontWeight: 800 }}>
          AdaptiveFitness
        </Link>
        <nav className="nav" aria-label="Primary">
          {isAuthenticated ? (
            <>
              <NavLink to="/" end>Dashboard</NavLink>
              <NavLink to="/workouts/log">Log Workout</NavLink>
              <NavLink to="/analytics">Analytics</NavLink>
              <NavLink to="/library">Library</NavLink>
              <NavLink to="/recommendations">Recommendations</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
        {isAuthenticated && (
          <button aria-label="Sign out" onClick={logout}>
            Sign out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

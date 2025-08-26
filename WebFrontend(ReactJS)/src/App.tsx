import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/auth/Login';
import Register from '@pages/auth/Register';
import WorkoutLog from '@pages/workouts/WorkoutLog';
import Analytics from '@pages/analytics/Analytics';
import Library from '@pages/library/Library';
import Recommendations from '@pages/recommendations/Recommendations';
import Profile from '@pages/profile/Profile';
import ProtectedRoute from '@components/routing/ProtectedRoute';
import { useAuthStore } from '@store/authStore';
import Header from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import Footer from '@components/layout/Footer';

const App: React.FC = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <div className="layout">
      <Header />
      <div id="main" className="main" role="main" aria-live="polite">
        {isAuthenticated && <Sidebar />}
        <div className="content">
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/workouts/log" element={
              <ProtectedRoute>
                <WorkoutLog />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            } />
            <Route path="/library" element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            } />
            <Route path="/recommendations" element={
              <ProtectedRoute>
                <Recommendations />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="*" element={
              <div>
                <h1>Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <NavLink to="/">Go to Dashboard</NavLink>
              </div>
            } />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

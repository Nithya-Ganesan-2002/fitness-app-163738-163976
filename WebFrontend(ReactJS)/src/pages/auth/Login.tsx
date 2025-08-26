import React from 'react';
import { useForm } from 'react-hook-form';
import { loginRequest } from '@services/auth';
import { useAuthStore } from '@store/authStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type FormValues = { email: string; password: string };

const Login: React.FC = () => {
  /** Login form with error handling. */
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname ?? '/';

  const onSubmit = async (values: FormValues) => {
    const { token, user } = await loginRequest(values);
    login(user, token);
    navigate(from, { replace: true });
  };

  return (
    <div className="container" style={{ maxWidth: 420 }}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} aria-describedby="login-help">
        <p id="login-help" className="muted">Enter your credentials to access your dashboard.</p>
        <div className="form-control">
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" {...register('email', { required: 'Email is required' })} />
          {errors.email && <span role="alert" className="error">{errors.email.message}</span>}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" {...register('password', { required: 'Password is required' })} />
          {errors.password && <span role="alert" className="error">{errors.password.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
          {isSubmitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;

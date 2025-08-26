import React from 'react';
import { useForm } from 'react-hook-form';
import { registerRequest } from '@services/auth';
import { Link, useNavigate } from 'react-router-dom';

type FormValues = { email: string; password: string; name?: string };

const Register: React.FC = () => {
  /** Registration form with client-side validation. */
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = async (values: FormValues) => {
    await registerRequest(values);
    navigate('/login', { replace: true });
  };

  return (
    <div className="container" style={{ maxWidth: 480 }}>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit(onSubmit)} aria-describedby="register-help">
        <p id="register-help" className="muted">Sign up to start your adaptive fitness journey.</p>
        <div className="form-control">
          <label className="label" htmlFor="name">Name</label>
          <input id="name" type="text" {...register('name')} placeholder="Optional" />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" {...register('email', { required: 'Email is required' })} />
          {errors.email && <span role="alert" className="error">{errors.email.message}</span>}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="new-password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'At least 6 characters' } })} />
          {errors.password && <span role="alert" className="error">{errors.password.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
          {isSubmitting ? 'Creating…' : 'Create account'}
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Register;

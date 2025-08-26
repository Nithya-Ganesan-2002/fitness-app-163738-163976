import React, { useEffect, useState } from 'react';
import { Profile as ProfileType, fetchProfile, updateProfile } from '@services/profile';
import { useForm } from 'react-hook-form';

const Profile: React.FC = () => {
  /** User profile management page. */
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ProfileType>();

  useEffect(() => {
    fetchProfile().then((p) => {
      setProfile(p);
      reset(p);
    });
  }, [reset]);

  const onSubmit = async (patch: Partial<ProfileType>) => {
    const updated = await updateProfile(patch);
    setProfile(updated);
    reset(updated);
    alert('Profile updated');
  };

  if (!profile) return <p role="status">Loading profile…</p>;

  return (
    <div className="grid">
      <section className="card" aria-label="Profile">
        <h1 style={{ marginTop: 0 }}>Your Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-2">
          <div className="form-control">
            <label className="label" htmlFor="name">Name</label>
            <input id="name" type="text" {...register('name')} />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} disabled aria-disabled="true" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="heightCm">Height (cm)</label>
            <input id="heightCm" type="number" step="0.5" {...register('heightCm', { valueAsNumber: true })} />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="weightKg">Weight (kg)</label>
            <input id="weightKg" type="number" step="0.1" {...register('weightKg', { valueAsNumber: true })} />
          </div>
          <div className="form-control" style={{ gridColumn: '1 / -1' }}>
            <label className="label" htmlFor="goal">Primary goal</label>
            <input id="goal" type="text" {...register('goal')} placeholder="e.g., fat loss, strength, endurance" />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
              {isSubmitting ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;

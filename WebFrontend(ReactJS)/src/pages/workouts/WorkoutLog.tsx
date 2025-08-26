import React from 'react';
import { useForm } from 'react-hook-form';
import { logWorkout, WorkoutEntry } from '@services/workouts';

const WorkoutLog: React.FC = () => {
  /** Form to log a workout entry. */
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<WorkoutEntry>({
    defaultValues: {
      date: new Date().toISOString().slice(0, 10),
      sets: 3,
      reps: 10
    } as any
  });

  const onSubmit = async (values: WorkoutEntry) => {
    await logWorkout(values);
    reset({ ...values, notes: '' });
    alert('Workout logged!');
  };

  return (
    <div>
      <h1>Log Workout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-2" aria-label="Workout log form">
        <div className="form-control">
          <label className="label" htmlFor="date">Date</label>
          <input id="date" type="date" {...register('date', { required: 'Required' })} />
          {errors.date && <span className="error">{errors.date.message}</span>}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="exercise">Exercise</label>
          <input id="exercise" type="text" placeholder="e.g., Squat" {...register('exercise', { required: 'Required' })} />
          {errors.exercise && <span className="error">{errors.exercise.message}</span>}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="sets">Sets</label>
          <input id="sets" type="number" min={1} {...register('sets', { valueAsNumber: true, required: 'Required' })} />
          {errors.sets && <span className="error">{errors.sets.message}</span>}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="reps">Reps</label>
          <input id="reps" type="number" min={1} {...register('reps', { valueAsNumber: true, required: 'Required' })} />
          {errors.reps && <span className="error">{errors.reps.message}</span>}
        </div>
        <div className="form-control">
          <label className="label" htmlFor="weight">Weight (kg)</label>
          <input id="weight" type="number" step="0.5" min={0} {...register('weight', { valueAsNumber: true })} />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="durationMin">Duration (min)</label>
          <input id="durationMin" type="number" min={0} {...register('durationMin', { valueAsNumber: true })} />
        </div>
        <div className="form-control" style={{ gridColumn: '1 / -1' }}>
          <label className="label" htmlFor="notes">Notes</label>
          <textarea id="notes" rows={3} placeholder="How did it feel?" {...register('notes')} />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
            {isSubmitting ? 'Saving…' : 'Save Entry'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutLog;

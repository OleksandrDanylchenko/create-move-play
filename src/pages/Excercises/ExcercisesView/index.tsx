import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { IExercise } from '../../../redux/reducers/exercises';
import ExerciseCard from '../components/ExerciseCard';

interface ExercisesView {
  exercises: IExercise[];
}

type ExercisesViewProps = ExercisesView;

const ExercisesView: FunctionComponent<ExercisesViewProps> = ({
  exercises
}) => {
  return (
    <div className={styles.container}>
      <article className={styles.info}>
        <header className={styles.header}>
          <h1>Оберіть бажану вправу:</h1>
        </header>
        <section className={styles.exercisesList}>
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </section>
      </article>
    </div>
  );
};

export default ExercisesView;

import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { IExercise } from '../../../redux/reducers/exercises';

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
        <section>
          <pre>{JSON.stringify(exercises, null, 2)}</pre>
        </section>
      </article>
    </div>
  );
};

export default ExercisesView;

import { IExercise } from '../../../../redux/reducers/exercises';
import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faSortDown,
  faSortUp
} from '@fortawesome/free-solid-svg-icons';

interface ExerciseCard {
  exercise: IExercise;
}

type ExerciseCardProps = ExerciseCard;

const ExerciseCard: FunctionComponent<ExerciseCardProps> = ({ exercise }) => {
  const [showDescription, setShowDescription] = useState(false);

  const onCardClick = useCallback(() => {
    setShowDescription((prev) => !prev);
  }, []);

  const startExerciseButton = useRef<HTMLButtonElement | null>(null);
  const onStartExerciseButtonCreation = useCallback(
    (element: HTMLButtonElement) => {
      startExerciseButton.current = element;
      if (startExerciseButton.current) {
        startExerciseButton.current.scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        });
      }
    },
    []
  );

  const onStartExerciseClick = useCallback(
    (event) => {
      event.stopPropagation();
      alert(`Ви обрали вправу: ${exercise.name}`);
    },
    [exercise.name]
  );

  return (
    <article className={styles.cardContainer} onClick={onCardClick}>
      <img
        src={exercise.photoUrl}
        alt={exercise.name}
        className={styles.cardImage}
      />
      <header>
        <h3 className={styles.cardName}>{exercise.name}</h3>
        <h5 className={styles.cardPopularity}>
          Популярна у {exercise.popularity}% користувачів
        </h5>
      </header>
      <section className={styles.cardMainMuscles}>
        Основні м&apos;язи: <span>{exercise.primaryMuscle}</span>
      </section>
      {exercise.secondaryMuscles?.length > 0 && (
        <section className={styles.cardSecondaryMuscles}>
          Супутні м&apos;язи:{' '}
          <span>{exercise.secondaryMuscles.join(', ')}</span>
        </section>
      )}
      <section className={styles.cardLevel}>
        Рівень: <span>{exercise.level}</span>
      </section>
      <div className={styles.expansionStrip}>
        <FontAwesomeIcon
          icon={showDescription ? faSortUp : faSortDown}
          className={
            showDescription ? styles.expansionIconUp : styles.expansionIconDown
          }
        />
      </div>
      {showDescription && (
        <>
          <section className={styles.cardDescription}>
            {exercise.shortDescription}
          </section>
          <button
            onClick={onStartExerciseClick}
            ref={onStartExerciseButtonCreation}
            className={styles.startExerciseButton}
          >
            Почати виконання
            <FontAwesomeIcon icon={faDumbbell} />
          </button>
        </>
      )}
    </article>
  );
};

export default ExerciseCard;

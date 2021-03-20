import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../../redux/state';
import ExercisesView from '../ExcercisesView';
import { IExercise } from '../../../redux/reducers/exercises';

type ExercisesContainerProps = ReturnType<typeof mapStateToProps>;

const ExercisesContainer: FunctionComponent<ExercisesContainerProps> = ({
  userAnswers,
  exercises
}) => {
  const [filteredExercises, setFilteredExercises] = useState<IExercise[]>([]);

  useEffect(() => {
    const filteredExercises = exercises.filter(
      (exercise) =>
        !exercise.incompatibleDiseases.some((disease) =>
          userAnswers?.diseases.includes(disease)
        )
    );
    setFilteredExercises(filteredExercises);
  }, [exercises, userAnswers?.diseases]);

  return <>{userAnswers && <ExercisesView exercises={filteredExercises} />}</>;
};

const mapStateToProps = (state: IState) => ({
  userAnswers: state.user.userAnswers,
  exercises: state.exercises.availableExercises
});

export default connect(mapStateToProps)(ExercisesContainer);

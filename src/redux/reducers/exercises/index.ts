import { Routine } from 'redux-saga-routines';
import { availableExercises } from './initialState';

export interface IExercise {
  name: string;
  photoUrl: string;
  popularity: number;
  shortDescription: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  level: string;
  incompatibleDiseases: string[];
}

export interface IExercisesState {
  availableExercises: IExercise[];
}

const initialState: IExercisesState = {
  availableExercises: availableExercises
};

export const exercises = (
  state = initialState,
  action: Routine<any>
): IExercisesState => {
  switch (action.type) {
    default:
      return state;
  }
};

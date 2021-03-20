import { IUserState } from './reducers/user';
import { IExercisesState } from './reducers/exercises';

export interface IState {
  user: IUserState;
  exercises: IExercisesState;
}

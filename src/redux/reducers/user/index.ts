import { Routine } from 'redux-saga-routines';
import {
  clearUserAnswersRoutine,
  saveUserAnswersRoutine
} from '../../routines';

export interface IUserAnswers {
  name: string;
  age: string;
  diseases: string;
  preferredDayPeriod: string;
}

export interface IUserState {
  userAnswers?: IUserAnswers;
}

const initialState: IUserState = {
  userAnswers: undefined
};

export const user = (
  state = initialState,
  action: Routine<any>
): IUserState => {
  switch (action.type) {
    case saveUserAnswersRoutine.SUCCESS:
      return {
        ...state,
        userAnswers: action.payload
      };
    case clearUserAnswersRoutine.SUCCESS:
      return {
        ...state,
        userAnswers: action.payload
      };
    default:
      return state;
  }
};

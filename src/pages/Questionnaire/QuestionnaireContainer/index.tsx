import React, { FunctionComponent, useCallback } from 'react';
import QuestionnaireView from '../QuestionnaireView';

export interface IUserData {
  name: string;
  age: string;
  diseases: string;
  preferredDayPeriod: string;
}

const QuestionnaireContainer: FunctionComponent = () => {
  const onSubmit = useCallback((data: IUserData) => {
    console.log(data);
  }, []);

  return <QuestionnaireView onSubmit={onSubmit} />;
};

export default QuestionnaireContainer;

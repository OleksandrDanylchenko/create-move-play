import React, { FunctionComponent, useCallback } from 'react';
import QuestionnaireView from '../QuestionnaireView';
import { IUserAnswers } from '../../../redux/reducers/user';

const QuestionnaireContainer: FunctionComponent = () => {
  const onSubmit = useCallback((data: IUserAnswers) => {
    console.log(data);
  }, []);

  return <QuestionnaireView onSubmit={onSubmit} />;
};

export default QuestionnaireContainer;

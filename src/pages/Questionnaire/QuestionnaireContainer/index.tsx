import React, { FunctionComponent } from 'react';
import QuestionnaireView from '../QuestionnaireView';
import { IUserAnswers } from '../../../redux/reducers/user';
import { connect } from 'react-redux';
import { IBindingCallback1 } from '../../../models/callbacks';
import { saveUserAnswersRoutine } from '../../../redux/routines';

type QuestionnaireContainerProps = typeof mapDispatchToProps;

const QuestionnaireContainer: FunctionComponent<QuestionnaireContainerProps> = ({
  saveUserAnswers
}) => {
  return <QuestionnaireView onSubmit={saveUserAnswers} />;
};

const mapDispatchToProps = {
  saveUserAnswers: saveUserAnswersRoutine as IBindingCallback1<IUserAnswers>
};

export default connect(null, mapDispatchToProps)(QuestionnaireContainer);

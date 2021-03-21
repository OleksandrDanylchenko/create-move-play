import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { clearUserAnswersRoutine } from '../../../../../../../redux/routines';
import { IBindingAction } from '../../../../../../../models/callbacks';
import SignOutButtonView from '../SignOutButtonView';

type SignOutButtonContainerProps = typeof mapDispatchToProps;

const SignOutButtonContainer: FunctionComponent<SignOutButtonContainerProps> = ({
  clearUserAnswers
}) => {
  return <SignOutButtonView onSignOut={clearUserAnswers} />;
};

const mapDispatchToProps = {
  clearUserAnswers: clearUserAnswersRoutine as IBindingAction
};

export default connect(null, mapDispatchToProps)(SignOutButtonContainer);

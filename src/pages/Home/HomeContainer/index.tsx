import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import HomeView from '../HomeView';
import { IState } from '../../../redux/state';

type HomeContainerProps = ReturnType<typeof mapStateToProps>;

const HomeContainer: FunctionComponent<HomeContainerProps> = ({
  userAnswers
}) => {
  return <>{userAnswers && <HomeView userAnswers={userAnswers} />}</>;
};

const mapStateToProps = (state: IState) => ({
  userAnswers: state.user.userAnswers
});

export default connect(mapStateToProps)(HomeContainer);

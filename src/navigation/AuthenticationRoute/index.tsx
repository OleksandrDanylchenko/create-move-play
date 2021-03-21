import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IState } from '../../redux/state';

interface AuthenticationRoute {
  component: React.ElementType;
  path: string;
  title?: string;
  exact?: boolean;
}

type AuthenticationRouteProps = AuthenticationRoute &
  ReturnType<typeof mapStateToProps>;

const AuthenticationRoute: React.FunctionComponent<AuthenticationRouteProps> = ({
  component: Component,
  title,
  path,
  exact,
  userAnswers
}) => (
  <>
    {userAnswers ? (
      <Redirect to={'/'} from={location.pathname} />
    ) : (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          if (title) document.title = title;
          return <Component {...routeProps} />;
        }}
      />
    )}
  </>
);

const mapStateToProps = (state: IState) => ({
  userAnswers: state.user.userAnswers
});

export default connect(mapStateToProps)(AuthenticationRoute);

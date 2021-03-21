import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IState } from '../../redux/state';

interface ProtectedRoute {
  component: React.ElementType;
  path: string;
  title?: string;
  exact?: boolean;
}

type ProtectedRouteProps = ProtectedRoute & ReturnType<typeof mapStateToProps>;

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  component: Component,
  title,
  path,
  exact,
  userAnswers
}) => (
  <>
    {!userAnswers ? (
      <Redirect to={'/intro'} from={location.pathname} />
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

export default connect(mapStateToProps)(ProtectedRoute);

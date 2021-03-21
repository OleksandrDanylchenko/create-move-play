import { createBrowserHistory } from 'history';
import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import QuestionnaireContainer from '../pages/Questionnaire/QuestionnaireContainer';
import AuthenticationRoute from './AuthenticationRoute';
import ProtectedRoute from './ProtectedRoute';
import HomeContainer from '../pages/Home/HomeContainer';
import IntroView from '../pages/Intro/IntroView';

export const history = createBrowserHistory();

const Routing: FunctionComponent = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <AuthenticationRoute
          exact
          path="/intro"
          title="Привіт! | Твори.Рухайся.Грай"
          component={IntroView}
        />
        <AuthenticationRoute
          exact
          path="/questionnaire"
          title="Пройдіть опитування | Твори.Рухайся.Грай"
          component={QuestionnaireContainer}
        />
        <ProtectedRoute
          exact
          path="/"
          title="Твори.Рухайся.Грай"
          component={HomeContainer}
        />
        <Route path="/*">
          <Redirect to="/intro" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routing;

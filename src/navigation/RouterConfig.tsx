import { createBrowserHistory } from 'history';
import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import IntroView from '../pages/Intro';
import { AnimatePresence } from 'framer-motion';
import QuestionnaireContainer from '../pages/Questionnaire/QuestionnaireContainer';

export const history = createBrowserHistory();

const Routing: FunctionComponent = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <PublicRoute
          exact
          path="/intro"
          title="Привіт! | Твори.Рухайся.Грай"
          component={IntroView}
        />
        <PublicRoute
          exact
          path="/questionnaire"
          title="Пройдіть опитування | Твори.Рухайся.Грай"
          component={QuestionnaireContainer}
        />
        {/*<PublicRoute*/}
        {/*  exact*/}
        {/*  path="/"*/}
        {/*  title="Твори.Рухайся.Грай"*/}
        {/*  component={HomeContainer}*/}
        {/*/>*/}
        <Route path="/*">
          <Redirect to="/intro" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routing;

import { createBrowserHistory } from 'history';
import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import IntroView from '../pages/Intro';

export const history = createBrowserHistory();

const Routing: FunctionComponent = () => (
  <Switch>
    <PublicRoute
      exact
      path="/intro"
      title="Привіт! | Твори.Рухайся.Грай"
      component={IntroView}
    />
    {/*<PublicRoute*/}
    {/*  exact*/}
    {/*  path="/questionnaire"*/}
    {/*  title="Пройдіть опитування | Твори.Рухайся.Грай"*/}
    {/*  component={QuestionnaireContainer}*/}
    {/*/>*/}
    {/*<PublicRoute*/}
    {/*  exact*/}
    {/*  path="/"*/}
    {/*  title="Твори.Рухайся.Грай"*/}
    {/*  component={HomeContainer}*/}
    {/*/>*/}
    <Route path="/*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default Routing;

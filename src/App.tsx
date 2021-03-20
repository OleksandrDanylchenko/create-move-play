import React, { FunctionComponent } from 'react';
import { Router } from 'react-router-dom';
import Routing, { history } from './navigation/RouterConfig';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      {/*   <PersistGate*/}
      {/*     loading={<SuspenseLoader />}*/}
      {/*      eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*      @ts-ignore*/}
      {/*     persistor={persistor}*/}
      {/*   >*/}
      <Router history={history}>
        <Routing />
      </Router>
      {/*   </PersistGate>*/}
    </Provider>
  );
};

export default App;

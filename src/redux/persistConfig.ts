import { createBlacklistFilter } from 'redux-persist-transform-filter';
// import storage from 'redux-persist-indexeddb-storage';
import storage from 'redux-persist/lib/storage';

const userFilter = createBlacklistFilter('user', []);

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  transforms: [userFilter]
};

// export const persistConfig = {
//   key: 'root',
//   storage: storage('chart-of-accounts-db'),
//       whitelist: ['questionnaire'],
//      transforms: [questionnaireFilter]
// };

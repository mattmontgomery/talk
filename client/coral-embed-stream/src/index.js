import React from 'react';
import {render} from 'react-dom';
import {ApolloProvider} from 'react-apollo';

import {client} from 'coral-framework/services/client';
import store from 'coral-framework/services/store';

import AppRouter from './AppRouter';

render(
  <ApolloProvider client={client} store={store}>
    <AppRouter />
  </ApolloProvider>
  , document.querySelector('#coralStream')
);

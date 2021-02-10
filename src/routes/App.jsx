import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Success from '../containers/Success';
import Payment from '../containers/Payment';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/checkout/information" component={Information} />
            <Route path="/checkout/payment" component={Payment} />
            <Route path="/checkout/success" component={Success} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
};

export default App;

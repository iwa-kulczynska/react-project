import React from 'react';
import Home from '../Home/HomeContainer';
import InfoContainer from '../Info/infoContainer';
import FAQ from '../FAQ/FAQContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <div>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={InfoContainer} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
      </MainLayout>
    </div>
  </BrowserRouter>
);

export default App;
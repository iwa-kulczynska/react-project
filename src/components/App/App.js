import React from 'react';
import Home from '../Home/HomeContainer';
import InfoContainer from '../Info/infoContainer';
import FAQ from '../FAQ/FAQContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <MainLayout>
        <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className={styles.switchWrapper} >
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={InfoContainer} />
          <Route exact path='/faq' component={FAQ} />
        </AnimatedSwitch>
      </MainLayout>
    </div>
  </BrowserRouter>
);

export default App;
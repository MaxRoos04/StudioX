import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/Services';
import PreviousWork from './Pages/PreviousWork';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/about',
    component: PreviousWork,
    exact: true
  },
];

export default routes;

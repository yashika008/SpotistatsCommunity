import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <div className='tt'> <Route  path='/' exact component={Home} /></div>
       
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;

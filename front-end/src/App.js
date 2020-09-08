import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyHelloPage from './components/MyHelloPage';
import MyNavBar from './components/MyNavBar';
import MyItemPage from './components/MyItemPage';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <Router>
      <MyNavBar></MyNavBar>
      <Switch>
        <Route path="/hello">
          <MyHelloPage></MyHelloPage>
        </Route>
        <Route path="/counter">
          <Counter></Counter>
        </Route>
        <Route path="/item/">
          <MyItemPage></MyItemPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

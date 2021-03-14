import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Page2 from './pages/page2/Page2'
import Page1 from './pages/page1/Page1'

class App extends Component{
  constructor(){
    super();
    this.state={}
  }
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/page1' component={Page1} />
          <Route exact path='/page2' component={Page2} />
        </Switch>
      </div>
    )
  }
}

export default App;

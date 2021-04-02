import React from 'react'
import './assets/style/style.scss';
import Routes from './shared/config/route'
import { BrowserRouter  as Router, Route, Link, Switch } from 'react-router-dom'

const App:React.FC<{}> =() => {
  return (
    <div className="App-root">
      <Router>
       <Switch>
       {
         Routes.map((route,index)=>(
           <Route exact path={route.path} component={route.component} key={index}/>
         ))
       }
       </Switch>
    </Router>
    </div>
  );
}

export default App;

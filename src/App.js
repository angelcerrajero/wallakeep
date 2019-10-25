import React from 'react';
import Register from "./components/Register/Register";
import List from "./components/advert/List"
import DetailAd from "./components/advert/DetailAd"
import 'bootstrap/dist/css/bootstrap.min.css';

// import './css/styles.css'

//import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
              <Route exact path="/" component={Register} />
              <Route exact path="/advert" component={List} />
              <Route exact path="/advert/:adId" component={DetailAd} />
              <Route exact path="/register" component={Register} />
              <Route component={List} />
          </Switch>
        </Router>
      </div>
    )
  }
}
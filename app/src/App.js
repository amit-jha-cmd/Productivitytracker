import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
          <div className={"app-main"}>
              <div>
                <h1>Hello World</h1>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
  )
}

export default App;

import React from 'react';
import {Provider} from 'react-redux'
import store from './Store'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import routes from "./Router";
import HDHeader from "./Components/Header/HDHeader"
import HDAside from "./Components/Asider/HDAside";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <HDHeader/>
          <div className="main">
            <HDAside/>
            {
              routes.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route
                      key={key}
                      exact
                      path={route.path}
                      render={props => (
                        <route.component {...props}/>
                      )}
                    />
                  )
                } else {
                  return (
                    <Route
                      key={key}
                      path={route.path}
                      render={props => (
                        <route.component {...props}/>
                      )}
                    />
                  )
                }
              })
            }
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

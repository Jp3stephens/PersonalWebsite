import React from 'react';
import Categories from './Categories'
import {Switch, Route} from 'react-router-dom'; 
import Projects from './Projects'
const Main = () => {
  return (
    <div className="main">
      <div className="upperNav"> \(-_-)/ </div>
      <div className = "mainContent">
        <Switch>
          <Route path="/" exact>
          <h1>Projects </h1>  
          <Categories/>
          </Route>
          <Route path="/Resume" exact>
            Resume
          </Route>
          <Route path="/blog" exact >
            Blog
          </Route>
          <Route path = "/project/:id"component={Projects}><h1>This my Project!</h1></Route>
        </Switch>
      </div>
    </div>
  )
}

export default Main;

import React from 'react';
import {ReactComponent as InfoIcon} from '../logo.svg'
const Main = () => {
  return (
    <div className="main">
      <div className="upperNav"> \(-_-)/ </div>
      <div className = "mainContent">
        <h1>Projects </h1>
        <div className="cardsWrap">
          <div className="cardsWrapInner">
            <div className="card">
              <div className="cardImage">
              <img src="https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Pic1"/>
              </div>
                <div className="cardContent">
                  <h3>
                  Project - Name 
                  </h3>
                </div>
                  <span className="infoIcon">
                    <InfoIcon/>
                  </span>
          
            </div>
            <div className="card">
              <div className="cardImage">
              <img src="https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Pic1"/>
              </div>
                <div className="cardContent">
                  <h3>
                  Project - Name 
                  </h3>
                </div>
                  <span className="infoIcon">
                    <InfoIcon/>
                  </span>
          
            </div>
            <div className="card">
              <div className="cardImage">
              <img src="https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Pic1"/>
              </div>
                <div className="cardContent">
                  <h3>
                  Project - Name 
                  </h3>
                </div>
                  <span className="infoIcon">
                    <InfoIcon/>
                  </span>
          
            </div>
          </div>
        </div>
          
        
        
      </div>
    </div>
  )
}

export default Main;

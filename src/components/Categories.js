import React from 'react'; 
import {ReactComponent as InfoIcon} from '../logo.svg'
import {Link} from 'react-router-dom'; 
const Categories = () => {
    return (
        <div>
                <div className="cardsWrap">
          <span className="seeGithub">See Github</span>
          <div className="cardsWrapInner">


        <Link to = {'/project/1'}>
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
            </Link>
        <Link to = {'/project/2'}>
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
        </Link>
        <Link to ={'/project/3'}>
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
        </Link>
          </div>
        </div>
        </div>
    )
}

export default Categories; 
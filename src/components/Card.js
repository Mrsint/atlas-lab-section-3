import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            
            <CardImage image ={props.island.image}/>
            <CardInfo name = {props.island.name} description={props.island.description} lat={props.island.coords.lat} log={props.island.coords.lon} />
        </div>
      </div>
    </li>
  );
}

export default Card;

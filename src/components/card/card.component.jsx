import React from 'react';
import './card.styles.css';


export const Card = (props) => { // TODO what is diff between ( and {
  return <div className='card-container'>
    <img
      alt="person"
      src={`https://robohash.org/${props.person.id}?set=set2180x180}`}
    />
    <h2> {props.person.name} </h2>
    <p> {props.person.email} </p>
  </div>
}
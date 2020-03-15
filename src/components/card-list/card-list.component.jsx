import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
  return <div className='card-list'>
    {
      props.people.map(person => {
        console.log(person)
        return (
          <Card key={person.id} person={person}/> // This is using the Card com
        );
      })
    }
  </div>
}
import React from 'react';
import Card from '../Card';
import './CardList.css';

const CardList = ({ robots }) => {
  return (
    <div className='card-list'>
      {robots.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default CardList;

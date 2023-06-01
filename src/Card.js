import React from 'react';
import './Card.css'

const Card = ({name, email, id}) => {

 return (
    <div className='card'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robofriends' />
      <div className='card-info'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-email'>{email}</p>
      </div>
    </div>
  );
};

export default Card;
import React, {useState} from 'react';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([{
      name: 'Elon Musk'
  }]);

  return <div className="tinderCards"></div>;
}

export default TinderCards;

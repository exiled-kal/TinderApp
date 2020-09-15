import React, {useState} from 'react';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([{
      name: 'Elon Mush'
  }]);

  return <div className="tinderCards"></div>;
}

export default TinderCards;

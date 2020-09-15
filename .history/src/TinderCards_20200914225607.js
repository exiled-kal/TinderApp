import React, {useState} from 'react';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([{
      name: 'Elon Musk',
      url: "https://newsabc.net/wp-content/uploads/2020/08/Elon-Musk-today-proposes-brain-chip-that-can-give-you.jpg"
  }]);

  return <div className="tinderCards">{people.map(person)}</div>;
}

export default TinderCards;

import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url:
        'https://newsabc.net/wp-content/uploads/2020/08/Elon-Musk-today-proposes-brain-chip-that-can-give-you.jpg',
    },
    {
      name: 'Jeff  Bezos',
      url:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard 
          className="swipe"
          key={character.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir => swiped)}>
              
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

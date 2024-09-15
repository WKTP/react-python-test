import React from 'react';
import MyCard from './Card';
import './App.css';

const App: React.FC = () => {
  const cards = [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' }
  ];

  return (
    <div className="app-container">
      {cards.map((card, index) => (
        <MyCard 
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default App;

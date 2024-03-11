import React, { useState } from 'react';

const ItineraryBuilder = () => {
  const [itineraryItems, setItineraryItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItineraryItems([...itineraryItems, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...itineraryItems];
    updatedItems.splice(index, 1);
    setItineraryItems(updatedItems);
  };

  return (
    <div>
      <h2>Itinerary Builder</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add attraction or activity"
      />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {itineraryItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={() => setItineraryItems([])}>Clear Itinerary</button>
    </div>
  );
};

export default ItineraryBuilder;

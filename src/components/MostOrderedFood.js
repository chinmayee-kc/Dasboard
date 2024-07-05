import React from 'react';

const foodItems = [
  {
    name: 'Fresh Salad Bowl',
    price: 'IDR 45.000',
    image:  'pexels-dana-tentis-118658-1213710 (1).jpg',
  },
  {
    name: 'Chicken Noodles',
    price: 'IDR 75.000',
    image: 'pexels-enginakyurt-2456435 (1).jpg', 
  },
  {
    name: 'Smoothie Fruits',
    price: 'IDR 45.000',
    image: 'pexels-janetrangdoan-1092730 (1).jpg',
  },
  {
    name: 'Hot Chicken Wings',
    price: 'IDR 45.000',
    image: 'pexels-owpictures-106343.jpg', 
  },
];

const MostOrderedFood = () => {
  return (
    <div className="food-list-container">
      <h2>Most Ordered Food</h2>
      <p>Adipiscing elit, sed do eiusmod tempor</p>
      <ul className="food-list">
        {foodItems.map((item, index) => (
          <li key={index} className="food-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <div className="food-details">
              <span className="food-name">{item.name}</span>
              <span className="food-price">{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostOrderedFood;

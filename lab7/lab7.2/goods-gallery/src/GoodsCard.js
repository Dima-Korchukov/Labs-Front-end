import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
      <p>{price} грн</p>
    </div>
  );
}

export default GoodsCard;

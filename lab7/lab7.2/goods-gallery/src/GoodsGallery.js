import React from 'react';
import GoodsCard from './GoodsCard';

function GoodsGallery() {
  const products = [
    { image: 'product1.jpg', name: 'Набір ручок гелевих', price: 150 },
    { image: 'product2.jpg', name: 'Набір кольорових олівців', price: 120 },
    { image: 'product3.jpg', name: 'Штангенциркуль', price: 150 },
    { image: 'product4.jpg', name: 'Набір лінійок', price: 180 },
    { image: 'product5.jpg', name: 'Пачка паперу А4', price: 500 },
    { image: 'product6.jpeg', name: 'Офісне крісло', price: 9000 }
  ];

  return (
    <div className="goods-gallery">
      {products.map((product, index) => (
        <GoodsCard 
          key={index} 
          image={product.image} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

export default GoodsGallery;

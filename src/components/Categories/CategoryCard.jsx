import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '1.5rem',
      margin: '1rem',
      minWidth: '200px',
      maxWidth: '220px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 6px 16px rgb(50, 14, 212)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}
    >
      <h3 style={{ color: '#333', fontSize: '1.2rem' }}>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;

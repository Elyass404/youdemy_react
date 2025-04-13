// src/components/categories/CategoryList.jsx
import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import api from '../../services/api';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/Categories')
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load categories");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;

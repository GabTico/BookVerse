import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ThemeContext } from '../context/ThemeContext';

function Category() {
  const { name } = useParams(); // ← Agarra la categoría desde la URL
  const [productos, setProductos] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error cargando productos por categoría', err));
  }, [name]);

  return (
    <div style={styles.grid}>
      {productos.map((item) => (
        <ProductCard key={item.id} producto={item} darkMode={darkMode} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  },
};

export default Category;

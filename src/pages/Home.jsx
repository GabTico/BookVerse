import { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ThemeContext } from '../context/ThemeContext';


function Home() {
  const [productos, setProductos] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error cargando productos', err));
  }, []);

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

export default Home;
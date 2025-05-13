function ProductCard({ producto, darkMode }) {
  const styles = {
    card: {
      backgroundColor: darkMode ? '#2b2b2b' : 'white',
      color: darkMode ? '#f1f1f1' : '#000',
      borderRadius: '10px',
      padding: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '200px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'contain',
      marginBottom: '0.5rem',
    },
    title: {
      fontSize: '1rem',
      height: '3rem',
      overflow: 'hidden',
    },
    price: {
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    button: {
      backgroundColor: darkMode ? '#FF6B6B' : '#004080',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.card}>
      <img src={producto.image} alt={producto.title} style={styles.image} />
      <h3 style={styles.title}>{producto.title}</h3>
      <p style={styles.price}>${producto.price}</p>
      <button style={styles.button}>Ver más</button>
    </div>
  );
}

export default ProductCard;

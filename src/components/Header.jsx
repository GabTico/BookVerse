import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import  logo  from '../assets/logo.jpeg';


function Header() {
  return (
    <header style={styles.header}>
       <img src={logo} alt="Logo de la app" className='logo'/> 
      <nav style={styles.nav}>
  <Link to="/category/electronics" style={styles.link}>Electrónica</Link>
  <Link to="/category/jewelery" style={styles.link}>Joyería</Link>
  <Link to="/category/men's clothing" style={styles.link}>Ropa Hombre</Link>
  <Link to="/category/women's clothing" style={styles.link}>Ropa Mujer</Link>
</nav>
       <ThemeToggle />
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#004080',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Header;

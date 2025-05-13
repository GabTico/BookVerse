import { Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
    
  return (
    <footer style={styles.footer}>
      <div>
        <h4 style={styles.title}>Contacto</h4>
        <p>Email: contacto@bookverse.com</p>
        <p>Teléfono: +58 424-BOOK-123</p>
      </div>
      <div>
        <h4 style={styles.title}>Síguenos</h4>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.iconLink}>
            <Instagram size={24} />
          </a>
          <a href="#" style={styles.iconLink}>
            <Facebook size={24} />
          </a>
          <a href="#" style={styles.iconLink}>
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#004080',
    color: 'white',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
  },
  title: {
    marginBottom: '0.5rem',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  iconLink: {
    color: '#FF6B6B',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

export default Footer;

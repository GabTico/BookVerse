import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext"

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: 'transparent',
        border: '2px solid white',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  );
}

export default ThemeToggle;

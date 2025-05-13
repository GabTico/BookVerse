import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        </Routes>
        <Footer />
      <main style={{ padding: '1rem' }}>
      </main>
    </>
  );
}

export default App;

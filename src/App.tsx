import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Music from './pages/Music';
import Art from './pages/Art';
import Writing from './pages/Writing';
import GuitarLessons from './pages/GuitarLessons';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/art" element={<Art />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/music/lessons" element={<GuitarLessons />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
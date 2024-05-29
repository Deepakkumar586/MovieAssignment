
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Movie from './pages/Movie';


function App() {
  return (
    <div className='bg-voilet-300' >
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie/>} />

      </Routes>





    </div>
  );
}

export default App;

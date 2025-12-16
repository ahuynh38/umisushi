import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import DineInMenu from './components/DineInMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dine-in-menu" element={<DineInMenu />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Categories from './components/Categories';
import BookDisplay from './components/BookDisplay';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookDisplay />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

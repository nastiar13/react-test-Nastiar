import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import No1 from './pages/no-1/index';
import No4 from './pages/no-4/index';
import No5 from './pages/no-5/index';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/1">No 1</Link> <br />
      <Link to="/4">No 4</Link> <br />
      <Link to="/5">No 5</Link> <br />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/1" element={<No1 />}></Route>
        <Route path="/4" element={<No4 />}></Route>
        <Route path="/5" element={<No5 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

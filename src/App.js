import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/main'
import About from './pages/about'

function App() {
  return (
    <div>
      {/* <Main/> */}

    {/* <About/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Main/>} exact />
          <Route path="/about" element={<About/>} exact />
        </Routes>

      </Router>

    </div>
  );
}

export default App;

import './css/main.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/main'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import MyCV from './pages/myCV'

function App() {
  return (
    <div>
      {/* <Main/> */}

    {/* <About/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/projects" element={<Projects/>} exact />
          <Route path="/contact" element={<Contact/>} exact />
          <Route path="/my-cv" element={<MyCV/>} exact />


        </Routes>

      </Router>

    </div>
  );
}

export default App;

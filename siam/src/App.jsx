// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TestimonialsCV } from './components/TestimonialsCV';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  return (
    <Router >
   <nav className="main-nav"  >
    
<h1 className="brand" style={{textAlign:"center", color:"rgb(255,0,0)",fontSize:"80px"}}>SOHAIL HAZARY SIAM</h1>
   <div className="nav-links"style={{textAlign:"center"}}> 
<button style={{backgroundColor:"#00ff00"}}> <Link to="/"style={{color:"black",fontSize:"28px"}} >Home</Link></button>
<button style={{backgroundColor:"#00ff00"}}><Link to="/skills"style={{color:"black",fontSize:"28px"}}> Skills</Link></button>
<button style={{backgroundColor:"#00ff00"}}><Link to="/projects"style={{color:"black",fontSize:"28px"}}> Projects</Link></button>
<button style={{backgroundColor:"#00ff00"}}><Link to="/resume" style={{color:"black",fontSize:"28px"}}>Resume</Link></button>
<button style={{backgroundColor:"#00ff00"}}><Link to="/videos" style={{color:"black",fontSize:"28px"}}>Videos</Link></button>
<button style={{backgroundColor:"#00ff00"}}><Link to="/contact" style={{color:"black",fontSize:"28px"}}> Contact</Link></button>
   </div>
   </nav>

      <Routes >
        <Route path="/" element={<Home />} /> 
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<TestimonialsCV />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
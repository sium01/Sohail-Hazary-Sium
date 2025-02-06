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
    
<h1 className="brand" style={{textAlign:"center", 
  textShadow: "2px 2px 30px rgba(0,0,0,0.2)",
  fontWeight: "bold",
  color:" #2f2e41",
  fontSize:"7rem",
  letterSpacing: "1"}}>SOHAIL HAZARY SIAM</h1>
   <div className="nav-links"style={{textAlign:"center"}}> 
<button > <Link to="/"style={{color:"black",fontSize:"28px",textDecoration:"none"}} >Home</Link></button>
<button ><Link to="/skills"style={{color:"black",fontSize:"28px",textDecoration:"none"}}> Skills</Link></button>
<button ><Link to="/projects"style={{color:"black",fontSize:"28px",textDecoration:"none"}}> Projects</Link></button>
<button ><Link to="/resume" style={{color:"black",fontSize:"28px",textDecoration:"none"}}>Resume</Link></button>
<button ><Link to="/videos" style={{color:"black",fontSize:"28px",textDecoration:"none"}}>Videos</Link></button>
<button><Link to="/contact" style={{color:"black",fontSize:"28px",textDecoration:"none"}}> Contact</Link></button>
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
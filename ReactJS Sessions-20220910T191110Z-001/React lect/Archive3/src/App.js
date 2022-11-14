import logo from './logo.svg';
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div className="App">
      <Router>
      <NavbarComp/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;

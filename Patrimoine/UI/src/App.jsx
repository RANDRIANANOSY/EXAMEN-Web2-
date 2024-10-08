import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PossessionsPage from './components/PossessionsPage.jsx';
import AddPossessionPage from './components/AddPossessionsPage.jsx';

function App() {
  return (
    <Router className="patrimone1">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/" className='patrimoine'>PATRIMOINE</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className='Liste' >Liste des possessions</Nav.Link>
          <Nav.Link as={Link} to="/add" className='Liste3'>Patrimoine</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<PossessionsPage />} />
        <Route path="/add" element={<AddPossessionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
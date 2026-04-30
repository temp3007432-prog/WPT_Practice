import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserData from "./pages/UserData";

export default function MyComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* Use 'as={Link}' to prevent page refreshes */}
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/UserData">
              User Data
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routing Logic */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserData" element={<UserData />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

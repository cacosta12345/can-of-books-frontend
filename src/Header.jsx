
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
  {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/books" className="nav-link">Books</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>

          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>
      </header>
    )
  }
}

export default Header;

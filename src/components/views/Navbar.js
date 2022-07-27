import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <main>
            <Navbar className="my-4 px-3 rounded" bg="primary" variant="dark">
                <Navbar.Brand href="#home">Blog.app</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="float-right">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        </main>
        
    );
};

export default NavBar;
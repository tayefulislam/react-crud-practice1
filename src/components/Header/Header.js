import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Product Manager</Navbar.Brand>

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addproducts">Addproduct</Nav.Link>

                        <Nav.Link as={Link} to="/manage-products">ManageProducts</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
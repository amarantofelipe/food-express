import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form } from "react-bootstrap";

import logo from '../logo/react-2.svg';
import person from '../image/person.fill.svg';// Assicurati di impostare il percorso corretto per il tuo logo.
import carrello from '../image/carrello.png';

function NavBar() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#spesaOnline">Spesa online</Nav.Link>
                        <Nav.Link href="#features">Idee regalo</Nav.Link>
                    </Nav>
                    <Form className="d-flex justify-content-center">
                        <Form.Control
                            type="search"
                            placeholder="Ricerca il tuo prodotto"
                            className="me-2 rounded-pill"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav className="ms-auto">
                        <Nav.Link href="#pricing">Volantino</Nav.Link>
                        <Nav.Link href="#profile">
                            <img
                                src={person}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                            />
                        </Nav.Link>
                        <Nav.Link href="#carrello">
                            <img
                                src={carrello}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

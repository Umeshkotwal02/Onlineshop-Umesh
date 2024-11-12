import React from 'react'
import "../styles/Navbar.css"
import { Col, Container, Form, Nav, Navbar, NavbarCollapse, NavbarText, NavbarToggle, Row } from 'react-bootstrap'
import { CgProfile } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarMain() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Container fluid>
                            <Navbar fixed="top" variant="light" bg="light" expand="lg">
                                <NavbarToggle aria-controls="nav-bar" />
                                <NavbarCollapse id="my-id">
                                    <Nav className="me-auto d-flex align-items-center gap-2">
                                        <Nav.Link href="#men" className="nav-links bg-dark text-white " variant="white">MEN</Nav.Link>
                                        <Nav.Link href="#women" className="nav-links bg-dark text-white ">WOMEN</Nav.Link>
                                        <Nav.Link href="#jewelery" className="nav-links bg-dark text-white">JEWELERY</Nav.Link>
                                        <Nav.Link href="#electronics" className="nav-links bg-dark text-white">ELECTRONICS</Nav.Link>
                                    </Nav>
                                </NavbarCollapse>


                                {/* logo */}
                                <Navbar.Brand href="/home" className='me-auto'>
                                    <img src="assets/images/web-logo.jpg " alt="web-logo" className="web-logo" />
                                </Navbar.Brand>

                                <NavbarText className='d-flex justify-content-around gap-3'>
                                    {/* Search bar */}
                                    <Form className="d-flex align-items-center me-3 fw-bold">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search Product"
                                            className="rounded-start p-1"
                                        />
                                        <span className="material-symbols-outlined fs-6 text-white bg-dark p-2 rounded-end">
                                            search
                                        </span>
                                    </Form>
                                    
                                    <CgProfile size={30} className='fw-bold' />
                                    <IoCartOutline size={30} className='mr-2' />
                                    &nbsp;
                                </NavbarText>
                            </Navbar>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavbarMain
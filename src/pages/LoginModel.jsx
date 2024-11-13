import React, { useState } from 'react';
import { NavbarText, Row, Col, Container, Form, Nav, Navbar, Offcanvas, Image } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { IoCartOutline } from 'react-icons/io5';
import "../styles/Navbar.css";
import SignUpModal from '../pages/SignUpModal';

function NavbarMain() {
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handleShowSignUpModal = () => setShowSignUpModal(true);
    const handleCloseSignUpModal = () => setShowSignUpModal(false);

    return (
        <>
            <Navbar expand="sm" className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-sm"
                        aria-labelledby="offcanvasNavbarLabel-expand-sm"
                        placement="start"
                    >
                        <Offcanvas.Header className="bg-secondary" closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                <Image src="assets/images/web-logo.png" className='img-fluid ' rounded />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="d-flex justify-content-start flex-grow-1 pe-3 fw-semibold text-dark">
                                <Nav.Link href="#men" className="nav-links">MEN</Nav.Link>
                                <Nav.Link href="#women" className="nav-links">WOMEN</Nav.Link>
                                <Nav.Link href="#jewelery" className="nav-links">JEWELERY</Nav.Link>
                                <Nav.Link href="#electronics" className="nav-links">ELECTRONICS</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Row>
                        <Col xl={3} xxl={3} sm={3} md={3} xs={3}>
                            <Navbar.Brand href="/home" className='me-auto justify-content-start flex-grow-1 pe-3'>
                                <Image src="assets/images/web-logo.png" className='img-fluid' rounded />
                            </Navbar.Brand>
                        </Col>
                        <Col xl={9} xxl={9} sm={9} md={9} xs={9}>
                            <NavbarText className='d-flex justify-content-around gap-3'>
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
                                <CgProfile size={30} className='fw-bold' onClick={handleShowSignUpModal} style={{ cursor: 'pointer' }} />
                                <IoCartOutline size={30} className='mr-2' />
                            </NavbarText>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            {/* Render the SignUpModal component */}
            <SignUpModal show={showSignUpModal} onHide={handleCloseSignUpModal} />
        </>
    );
}

export default NavbarMain;

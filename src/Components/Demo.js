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



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

function MyModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {/* Left Half with Image */}
            <Col md={6} className="d-none d-md-block">
              <Image
                src="assets/images/login-image.jpg" // Replace with the path to your image
                alt="Login Visual"
                className="img-fluid"
              />
            </Col>

            {/* Right Half with Login Form */}
            <Col xs={12} md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3" block>
                  Login
                </Button>

                <hr className="my-4" />

                <Button variant="outline-danger" className="w-100">
                  Sign in with Google
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch Login Modal
      </Button>

      <MyModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;

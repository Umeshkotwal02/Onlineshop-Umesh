import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import {FcGoogle} from "react-icons/fc";


function LoginModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered size="lg" closeButton>
            <Modal.Body className="p-0">
                <Row>
                    {/* Left half for the image */}
                    <Col md={6} className="p-0">
                        <div className="position-relative" style={{ height: "100vh" }}>
                            {/* Background image */}
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    backgroundImage: "url('assets/images/modal-bg.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    filter: "brightness(0.6)"
                                }}
                            ></div>

                            {/* Overlay content */}
                            <div className="position-relative text-dark p-3 d-flex align-items-start justify-content-center" style={{ height: "100%" }}>
                                <div className="p-4 py-md-5 content d-grid">
                                    <h2>Register &amp; Be A Part Of The Online Shop Circle!</h2>
                                    <h6 class="pt-2 pt-md-4">Enjoy exclusive benefits like:</h6>
                                    <ul>
                                        <li>Get 15% off on your first order* | <b>Use code: INDIA15</b></li>
                                        <li>Exclusive early collection showcase</li>
                                        <li>Access amazing offers, discounts and more</li>
                                    </ul>
                                    <h6>Join Now !</h6>
                                    <span class="text-end fs-12">T &amp; C Apply</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right half for the login form */}
                    <Col md={6} className="d-flex flex-column justify-content-center p-4">
                        <button type="button" class="btn-close d-flex justify-content-end" aria-label="Close" onClick={onHide}></button>
                        <h5 className="mb-4 text-center">Login</h5>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mb-3">
                                Login
                            </Button>

                            <hr />

                            {/* <Button variant="outline-danger" className="w-100">
                                Sign in with Google
                            </Button> */}
                            <div className='d-flex justify-content-center'>
                            <FcGoogle className="fs-1 d-flex justify-content-center"/>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>

        </Modal >
    );
}

export default LoginModal;

// SignUpModal.js
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Col, Row, Alert } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { app } from '../Components/firebase';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import NavbarMain from '../Components/NavbarMain';
import FirstPage from './FIrst-Page';
import LoginModal from './LoginModel';

const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app);

function SignUpModal({ show, onHide }) {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => {
        setShowLoginModal(true);
        onHide(); // Hide the Sign-Up modal
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState({});
    const [user, setUser] = useState("null");

    const validateForm = () => {
        let errors = {};
        if (!firstName) errors.firstName = "First name is required";
        if (!lastName) errors.lastName = "Last name is required";
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid";
        }
        if (!mobile) errors.mobile = "Mobile number is required";
        if (!password) errors.password = "Password is required";
        return errors;
    };

    const CreateUser = () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("User Created Successfully");
            })
            .catch((error) => {
                setError({ firebase: error.message });
            });
    };

    const SignupWithGoogle = () => {
        signInWithPopup(auth, googleprovider);
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                console.log("User logged in:", user);
            } else {
                setUser(null);
                console.log("User logged out");
            }
        });
    }, []);

    if (user === null) {
        return (
            <div>
                <NavbarMain />
                <FirstPage />
            </div>
        );
    }

    return (
        <>
            <Modal show={show} onHide={onHide} centered size="lg">
                <Modal.Body className="p-0">
                    <Row className="g-0">
                        <Col md={6}>
                            <div className="position-relative" style={{ height: "100%" }}>
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{
                                        backgroundImage: "url('assets/images/modal-bg.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter: "brightness(0.6)",
                                    }}
                                ></div>
                                <div className="position-relative text-light p-4 d-flex flex-column justify-content-start" style={{ height: "100%" }}>
                                    <h2 className="fw-bold">Join the Online Shop Circle!</h2>
                                    <p className="mt-3">Exclusive benefits include:</p>
                                    <ul className="list-unstyled">
                                        <li>Get 15% off on your first order | <strong>Use code: INDIA15</strong></li>
                                        <li>Early access to collections</li>
                                        <li>Exclusive offers and discounts</li>
                                    </ul>
                                    <p className="mt-3">Join Now! <small className="text-muted">T &amp; C Apply</small></p>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} className="d-flex flex-column justify-content-center p-4">
                            <button type="button" className="btn-close align-self-end" aria-label="Close" onClick={onHide}></button>
                            <h5 className="mb-4 text-center">Sign Up</h5>
                            {error.firebase && <Alert variant="danger" dismissible>{error.firebase}</Alert>}
                            <Form>

                                <Form.Group controlId="formFirstName" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        isInvalid={!!error.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">{error.firstName}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formLastName" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        isInvalid={!!error.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">{error.lastName}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={!!error.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formMobile" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Mobile Number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        isInvalid={!!error.mobile}
                                    />
                                    <Form.Control.Feedback type="invalid">{error.mobile}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!error.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{error.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Button onClick={CreateUser} variant="warning" className="w-100 mb-3">
                                    Sign Up
                                </Button>
                                <hr />
                                <div className="text-center fw-bold mb-2">Or Sign Up with Google</div>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={SignupWithGoogle} variant="light" className="border border-rounded">
                                        <FcGoogle className="fs-3 me-1" style={{ cursor: "pointer" }} />
                                        Sign with Google
                                    </Button>
                                </div>
                            </Form>
                            <hr />
                            <div className="text-center">
                                Already Have an account? <button onClick={handleShowLoginModal} className="btn btn-link p-0 text-decoration-none">Login</button>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            {/* Render the LoginModal component */}
            <LoginModal show={showLoginModal} onHide={handleCloseLoginModal} />
        </>
    );
}

export default SignUpModal;

import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from '../context/AuthContext';

const googleprovider = new GoogleAuthProvider();
const auth = getAuth();

function LoginModal({ show, onHide }) {
    const { user } = useAuth();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleprovider).catch(error => console.error(error.message));
    };

    if (user) {
        onHide();
        return null;
    }

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Body className="p-0">
                <Row>
                    <Col md={6}> {/* Image Section */}</Col>
                    <Col md={6} className="d-flex flex-column justify-content-center p-4">
                        <h5 className="mb-4 text-center">Login</h5>
                        <Form>
                            <Button variant="primary" onClick={handleGoogleLogin}>
                                Sign in with Google
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;



////Sign in Page

import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row, Alert } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from '../context/AuthContext'; // Import the auth context 
import NavbarMain from '../Components/NavbarMain';
import FirstPage from './FirstPage';
import LoginModal from './LoginModal';

const googleprovider = new GoogleAuthProvider();
const auth = getAuth();

function SignUpModal({ show, onHide }) {
    const { user } = useAuth(); // Access user from context
    const [showLoginModal, setShowLoginModal] = useState(false);
    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState({});

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
            .then(() => alert("User created successfully"))
            .catch((error) => setError({ firebase: error.message }));
    };

    const SignupWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .catch(error => setError({ firebase: error.message }));
    };

    if (user) {
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
                        <Col md={6}> {/* Image Section */}</Col>
                        <Col md={6} className="d-flex flex-column justify-content-center p-4">
                            {/* Sign-up Form */}
                            <Form>
                                <Button onClick={CreateUser}>Sign Up</Button>
                                <Button onClick={SignupWithGoogle}>Sign with Google</Button>
                                <button onClick={handleShowLoginModal}>Login</button>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <LoginModal show={showLoginModal} onHide={handleCloseLoginModal} />
        </>
    );
}

export default SignUpModal;

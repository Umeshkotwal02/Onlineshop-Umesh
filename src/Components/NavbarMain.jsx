import { NavbarText, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CgProfile } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import Image from 'react-bootstrap/Image';
import "../styles/Navbar.css"

function NavbarMain() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header className="bg-secondary" closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                                    <Image src="assets/images/web-logo.png" className='img-fluid' rounded />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="d-flex justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="#men" className="nav-links  " variant="white">MEN</Nav.Link>
                                    <Nav.Link href="#women" className="nav-links  ">WOMEN</Nav.Link>
                                    <Nav.Link href="#jewelery" className="nav-links ">JEWELERY</Nav.Link>
                                    <Nav.Link href="#electronics" className="nav-links ">ELECTRONICS</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Row>
                            <Col xl={3} xxl={3} sm={3} md={3} xs={3} className="">
                                {/* logo */}
                                <Navbar.Brand href="/home" className='me-auto me-auto justify-content-start flex-grow-1 pe-3'>
                                    <Image src="assets/images/web-logo.png" className='img-fluid' rounded />
                                </Navbar.Brand>
                            </Col>

                            <Col xl={9} xxl={9} sm={9} md={9} xs={9} >
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
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarMain;
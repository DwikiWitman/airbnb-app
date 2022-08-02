import {Navbar, Container, Nav, Image} from "react-bootstrap"
import airbnbImage from "../assets/images/airbnb-logo.png"

export default function NavigationBar() {
    return (
        <Navbar variant="dark" className="navbar">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={airbnbImage} alt="Airbnb Image" className='nav--logo' />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">LOGIN</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
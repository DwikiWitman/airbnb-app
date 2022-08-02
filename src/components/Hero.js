import { Container, Row, Col, Image } from 'react-bootstrap';
import photoGridImage from '../assets/images/photo-grid.png'

 const Hero = () => {
    return (
        <div>
            <br />
            <Container>
                <Row>
                    <Col md={12} className='d-flex justify-content-center'>
                        <Image src={photoGridImage} alt="Photo Grid" className='image--photogrid' />
                    </Col>
                    <Col md={12}>
                        <h1 className="hero--header">Online Experiences</h1>
                        <p className="hero--text">Join unique interactive activities led by 
                        one-of-a-kind hosts—all without leaving home.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
 }

export default Hero
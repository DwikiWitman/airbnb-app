import { Container, Row, Col } from 'react-bootstrap';
import CardInfo from './CardInfo'
import places from '../constant/Place'
import { v4 as uuidv4 } from 'uuid';

 const SliderCard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className='d-flex justify-content-left'>
                        {
                            places.map(place => {
                                return place.src && <CardInfo
                                    key={uuidv4()}
                                    src={place.src}
                                    title={place.title}
                                    description={place.description}
                                    price={place.price}
                                />
                            })
                        }
                    </Col>
                </Row>

                <br />
            </Container>
        </div>
    )
 }

export default SliderCard
import { Card } from "react-bootstrap"

export default function CardInfo(props) {
    return (
        <div>
            <Card key={props.key} className="me-2">
                <Card.Img variant="top" src={props.src} height="220px;" />
                <Card.Body>
                    <Card.Text>
                        {props.title}
                    </Card.Text>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        <b>From {props.price}</b> / person
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
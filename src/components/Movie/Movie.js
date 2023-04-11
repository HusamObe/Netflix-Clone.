import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from 'react';
import { Card, Button } from "react-bootstrap";

function Movie(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div key={props.movie.id}>
                <Card className="mb-3">
                    <Card.Img variant="top" src={props.movie.poster_path} />
                    <Card.Body>
                        <Card.Title>{props.movie.title}</Card.Title>
                        <Card.Text>{props.movie.overview}</Card.Text>
                        <Card.Text>{props.movie.caption}</Card.Text>
                        <Button variant="primary" onClick={handleShow}>show details</Button>
                        <Button variant="primary">Add to favorites</Button>
                    </Card.Body>
                </Card>
            </div>
            <ModalMovie show={show} handleClose={handleClose} movieData={props.movie.recipe} />
        </div>
    );
}

export default Movie;

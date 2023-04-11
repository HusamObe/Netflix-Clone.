import { Card, Button } from "react-bootstrap";

function Movie(props) {
    return (
        <CardGroup style={{ display: 'flex', justifyContent: 'space-around', gap: 30, bordercolor: 'black' }}>
            <div>
                <div key={props.movie.id}>
                    <Card className="mb-3">
                        <Card.Img variant="top" src={props.movie.poster_path} />
                        <Card.Body>
                            <Card.Title>{props.movie.title}</Card.Title>
                            <Card.Text>{props.movie.overview}</Card.Text>
                            <Card.Text>{props.movie.caption}</Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    props.setMovie(props.movie);
                                    props.setShowModal(true)
                                }}
                            >
                                Add to Favourit
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </CardGroup>
    );
}

export default Movie;

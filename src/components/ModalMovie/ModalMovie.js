import { Button, Modal, Form } from 'react-bootstrap/';


function ModalMovie(props) {
    return (
        <>
            <Modal show={props.show} onHide={() => props.handleColse()}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <img src={props.movie.poster_path} alt={props.movie.title} />
                <Modal.Body>{props.moviesData.overview}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;
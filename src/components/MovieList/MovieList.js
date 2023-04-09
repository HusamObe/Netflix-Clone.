import { CardGroup } from 'react-bootstrap';
import Movie from '../Movie/Movie.js'

function MovieList(props) {
    return (
        <>
            <CardGroup>
                {
                    props.movies.map((movie) => {
                        return (<Movie movie={movie} key={movie.id} setShowModal={setShowModal} setMovie={setMovie} />)


                    })
                }
            </CardGroup>

        </>
    )
}

export default MovieList;
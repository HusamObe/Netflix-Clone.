
import MovieList from "../MovieList/MovieList";
import { useState, useEffect } from 'react';


function Home() {
    const [movie, setmovie] = useState();

    const fetchData = async () => {
        const url = process.env.REACT_APP_SERVER_URL;
        try {
            const response = await fetch(`${url}/trending`);
            const moviesData = await response.json();
            setmovie(moviesData.results);

        } catch (error) {
            console.log("error", error);
        }

    };

    const addComment = (data, id) => {
        let addComment = movies.map(movies => {
            if (movies.id === id) {
                movies.caption = data.userCaption;
                movies.isCaption = !movies.isCaption;
                return movies;
            }
            else return movies
        })
        setMovies(addComment);
    };


    useEffect(() => { fetchData(); }, []);
    return (
        <div>
            {film && (<Container fluid >
                <Row>

                    <MovieList
                        addComment={addComment}
                        movies={movies} />
                </Row>
            </Container>)}



        </div>

    )
}
export default Home;
import React, { useEffect, useState } from "react";
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


    useEffect(() => { fetchData(); }, []);
    return (
        <>
            <MovieList movies={movie} />
        </>

    )
}
export default Home;
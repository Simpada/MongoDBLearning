import * as React from "react";
import {fetchJSON} from "../index";
import {useLoading} from "../useLoading";


function MovieCard( {movie: {title, poster, plot, year, genres}}){
    return <><h3>{title}</h3>
        {poster && <img src={poster} alt={"Movie Poster"} width={100}/>}
        <div>{plot}</div>
        <div>{year}</div>
        <div>{genres}</div>
    </>;
}

export function ListMovies() {

    const { loading, error, data } = useLoading(
        async () => fetchJSON("/api/movies")
    );

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>
            <h1>ERROR</h1>
            <div>{error.toString()}</div>
        </div>
    }

    return <div>
        <h1>Movies in the database</h1>

        {data.map((movie) => (
            <MovieCard key={movie.title} movie={movie}/>
        ))}

    </div>;
}
import * as React from "react";
import {useLoading} from "../useLoading";


function MovieCard({movie: {title, poster, plot, year, genres}}) {
    return <><h3>{title}</h3>
        {poster && <img src={poster} alt={"Movie Poster"} width={100}/>}
        <div>{plot}</div>
        <div>{year}</div>
        <div>{genres}</div>
    </>;
}

export function ListMovies({listMovies}) {

    const {loading, error, data} = useLoading(listMovies
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
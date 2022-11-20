import {Link} from "react-router-dom";
import * as React from "react";

export function FrontPage() {
    return <div>
        <h1>Movie Database</h1>
        <ul>
            <li><Link to={"/movies"}>List Movies</Link></li>
            <li><Link to={"/movies/new"}>Add New Movie</Link></li>
        </ul>
    </div>
}
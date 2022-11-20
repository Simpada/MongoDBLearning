import {useState} from "react";
import * as React from "react";
import {fetchJSON} from "../index";


export function AddNewMovie() {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");
    const [genres, setGenres] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        await fetchJSON("/api/movies", {
            method: "post",
            json: { title, year: parseInt(year), plot, genres },
        });

        setTitle("");
        setYear("");
        setPlot("");
        setGenres("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new movie</h1>
            <div>
                Title:
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                Year:
                <input value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
                Plot:
                <input value={plot} onChange={(e) => setPlot(e.target.value)} />
            </div>
            <div>
                Genre:
                <input value={genres} onChange={(e) => setGenres(e.target.value)} />
            </div>
            <div>
                <button disabled={title.length === 0 || year.length === 0}>Save</button>
            </div>
        </form>
    );
}
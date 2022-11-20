import {useState} from "react";
import * as React from "react";


function FormInput({ label, value, onChangeValue }) {
    return (
        <div>
            <label>
                <strong>{label}</strong>{" "}
                <input value={value} onChange={(e) => onChangeValue(e.target.value)} />
            </label>
        </div>
    );
}


async function postJSON(url, options = {}) {
    const res = await fetch(url, {
        method: options.method || "get",
        headers: options.json ? {"content-type": "application/json"} : {},
        body: options.json && JSON.stringify(options.json),
    });
    if (!res.ok) {
        throw new Error(`Failed ${res.status}: ${(await res).statusText}`);
    }
    if (res.status === 200) {
        return await res.json();
    }
}

export function AddNewMovie({createMovie}) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");
    const [country, setCountry] = useState("");
    const [genres, setGenres] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        createMovie({title});

        await postJSON("/api/movies", {
            method: "post",
            json: {title, year: parseInt(year), plot, genres},
        });


        setTitle("");
        setYear("");
        setPlot("");
        setGenres("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new movie</h1>

            <FormInput label={"Title:"} value={title} onChangeValue={setTitle} />
            <FormInput label={"Year:"} value={year} onChangeValue={setYear} />
            <FormInput label={"Plot:"} value={plot} onChangeValue={setPlot} />
            <FormInput label={"Genre:"} value={genres} onChangeValue={setGenres} />
            <div>
                <button disabled={title.length === 0 || year.length === 0}>Save</button>
            </div>
        </form>
    );
}
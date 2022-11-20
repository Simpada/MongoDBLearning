import * as React from "react";
import {createRoot} from "react-dom/client";
import {Application} from "./application";

const element = document.getElementById("app");
const root = createRoot(element);

// function FrontPage() {
//     return <div>
//         <h1>Movie Database</h1>
//         <ul>
//             <li><Link to={"/movies"}>List Movies</Link></li>
//             <li><Link to={"/movies/new"}>Add New Movie</Link></li>
//         </ul>
//     </div>
// }

export async function fetchJSON(url, options = {}) {
    const res = await fetch(url, {
        method: options.method || "get",
        headers: options.json ? { "content-type": "application/json" } : {},
        body: options.json && JSON.stringify(options.json),
    });
    if (!res.ok) {
        throw new Error(`Failed ${res.status}: ${(await res).statusText}`);
    }
    if (res.status === 200) {
        return await res.json();
    }
}

// function MovieCard( {movie: {title, poster, plot, year, genres}}){
//     return <><h3>{title}</h3>
//         {poster && <img src={poster} alt={"Movie Poster"} width={100}/>}
//         <div>{plot}</div>
//         <div>{year}</div>
//         <div>{genres}</div>
//         </>;
// }
//
// function ListMovies() {
//
//     const { loading, error, data } = useLoading(
//         async () => fetchJSON("/api/movies")
//     );
//
//     if (loading) {
//         return <div>Loading...</div>
//     }
//     if (error) {
//         return <div>
//             <h1>ERROR</h1>
//             <div>{error.toString()}</div>
//         </div>
//     }
//
//     return <div>
//         <h1>Movies in the database</h1>
//
//         {data.map((movie) => (
//             <MovieCard key={movie.title} movie={movie}/>
//         ))}
//
//     </div>;
// }
//
// function AddNewMovie() {
//
//     const [title, setTitle] = useState("");
//     const [year, setYear] = useState("");
//     const [plot, setPlot] = useState("");
//     const [genres, setGenres] = useState("");
//
//     async function handleSubmit(e) {
//         e.preventDefault();
//
//         await fetchJSON("/api/movies", {
//             method: "post",
//             json: { title, year: parseInt(year), plot, genres },
//         });
//
//         setTitle("");
//         setYear("");
//         setPlot("");
//         setGenres("");
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//         <h1>Add new movie</h1>
//             <div>
//                 Title:
//                 <input value={title} onChange={(e) => setTitle(e.target.value)} />
//             </div>
//             <div>
//                 Year:
//                 <input value={year} onChange={(e) => setYear(e.target.value)} />
//             </div>
//             <div>
//                 Plot:
//                 <input value={plot} onChange={(e) => setPlot(e.target.value)} />
//             </div>
//             <div>
//                 Genre:
//                 <input value={genres} onChange={(e) => setGenres(e.target.value)} />
//             </div>
//         <div>
//             <button disabled={title.length === 0 || year.length === 0}>Save</button>
//         </div>
//     </form>
//     );
// }
//
// function Application() {
//     return <BrowserRouter>
//         <Routes>
//             <Route path={"/"} element={<FrontPage />} />
//             <Route path={"/movies"} element={<ListMovies />} />
//             <Route path={"/movies/new"} element={<AddNewMovie />} />
//         </Routes>
//     </BrowserRouter>
// }

root.render(<Application />);

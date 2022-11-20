import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./pages/frontPage";
import {ListMovies} from "./pages/listMovies";
import {AddNewMovie} from "./pages/addNewMovie";
import React from "react";
import {fetchJSON} from "./index";

export function Application() {

    async function listMovies() {
        return await fetchJSON("/api/movies")
    }

    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies"} element={<ListMovies listMovies={listMovies}/>}/>
            <Route path={"/movies/new"} element={<AddNewMovie/>}/>
        </Routes>
    </BrowserRouter>
        ;
}
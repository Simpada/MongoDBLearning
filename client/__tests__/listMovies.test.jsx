import {createRoot} from "react-dom/client";
import * as React from "react";
import {ListMovies} from "../pages/listMovies";
import {act} from "react-dom/test-utils";

describe("ListMovies component", () => {
    it("shows loading screen", () => {

        const domElement = document.createElement("div");
        const root = createRoot(domElement);
        root.render(<ListMovies/>);

        expect(domElement.innerHTML).toMatchSnapshot();
    });
    it("shows movie", async () => {

        const movies = [{title: "movie 1"}, {title: "movie 2"}];
        const domElement = document.createElement("div");
        await act(async () => {
            const root = createRoot(domElement);
            root.render(<ListMovies listMovies={() => movies}/>);
        });

        expect(Array.from(domElement.querySelectorAll("h3"))
            .map(e => e.innerHTML))
            .toEqual(["movie 1", "movie 2"]);
        expect(domElement.innerHTML).toMatchSnapshot();
    });
})
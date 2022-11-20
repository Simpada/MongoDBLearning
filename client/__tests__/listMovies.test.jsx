import {createRoot} from "react-dom/client";
import * as React from "react";
import {ListMovies} from "../pages/listMovies";

describe("ListMovies component", () => {
    it ("shows loading screen", () => {

        const domElement = document.createElement("div");
        const root = createRoot(domElement);
        root.render(<ListMovies />);

        expect(domElement.innerHTML).toMatchSnapshot();
    })
})
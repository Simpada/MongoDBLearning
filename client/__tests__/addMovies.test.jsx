import {act} from "@testing-library/react";
import {createRoot} from "react-dom/client";
import * as React from "react";
import {AddNewMovie} from "../pages/addNewMovie";

describe("add movie component", () => {

    it("shows movies form", async () => {

        const element = document.createElement("div");
        await act( async () => {
            const root = createRoot(element);
            root.render(<AddNewMovie/>);
        });

        expect(element.innerHTML).toMatchSnapshot();
        expect(
        Array.from(element.querySelectorAll("form label strong")).map(e => e.innerHTML)
        ).toEqual(["Title:", "Year:", "Plot:", "Genre:"]);


    });

});
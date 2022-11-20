import ReactDOM from "react-dom";
import * as React from "react";
import {AddNewMovie} from "../pages/addNewMovie";
import {Simulate} from "react-dom/test-utils";
import {act} from "@testing-library/react";
import {createRoot} from "react-dom/client";

describe("add movie component", () => {

    it("shows movies form", async () => {

        const element = document.createElement("div");

        await act(async () => {
            const root = createRoot(element);
            root.render(<AddNewMovie/>);
        });

        expect(element.innerHTML).toMatchSnapshot();
        expect(
            Array.from(element.querySelectorAll("form label strong")).map(e => e.innerHTML)
        ).toEqual(["Title:", "Year:", "Plot:", "Genre:"]);


    });

    it("adds movie on submit", async () => {
        const createMovie = jest.fn();
        const title = "Test movie";

        const element = document.createElement("div");

        await act(async () => {
            const root = createRoot(element);
            root.render(<AddNewMovie createMovie={createMovie} />);
        });

        Simulate.change(element.querySelector("form input:nth-of-type(1)"), {
            target: {value: title},
        });
        Simulate.submit(element.querySelector("form"));
        expect(createMovie).toBeCalledWith({
            title,
        });

    });

});
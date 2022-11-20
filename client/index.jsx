import * as React from "react";
import {createRoot} from "react-dom/client";
import {Application} from "./application";

const element = document.getElementById("app");
const root = createRoot(element);


export async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed ${res.status}: ${(await res).statusText}`);
    }
    return await res.json();
}

root.render(<Application/>);

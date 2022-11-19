import {Router} from "express";

const movies = [
    {
        title: "Movie 1",
    },
    {
        title: "Movie 2",
    },
    {
        title: "Movie 3",
    },
];

export function MoviesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async(req, res, next) => {
        const movies = await mongoDatabase.collection("exam_test").find().toArray()
        res.json(movies);
    });

    router.post("/new", (req, res, next) => {
        res.sendStatus(500);
    });

    return router;
}

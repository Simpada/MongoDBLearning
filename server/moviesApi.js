import {Router} from "express";

export function MoviesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async(req, res, next) => {
        const movies = await mongoDatabase.collection("movies")
            .find({
                year: {
                    $gte: 2000,
                }
            })
            .sort({
                year: -1
            })
            .map(({title, year, plot, genres, poster}) => ({
                title,
                year,
                plot,
                genres,
                poster
            }))
            .limit(100)
            .toArray()
        res.json(movies);
    });

    router.post("/",(req, res) => {
        const { title, year, plot, genres } = req.body;
        const result =  mongoDatabase.collection("movies").insertOne({
            title,
            year,
            plot,
            genres
        });
        console.log({ result });
        res.sendStatus(204);
    });

    return router;
}

import {Router} from "express";

export function MoviesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const movies = await mongoDatabase.collection("movies")
            .find({
                countries: {
                    $in: ["Ukraine"],
                },
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

    router.post("/", (req, res) => {
        const {title, country, year, plot, genres} = req.body;
        const result = mongoDatabase.collection("movies").insertOne({
            title,
            countries: [country],
            year,
            plot,
            genres
        });
        console.log({result});
        res.sendStatus(200);
    });

    return router;
}

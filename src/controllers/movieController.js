import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('movie/create')
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

    await movieService.create(movieData);

    res.redirect('/');
});

router.get('/search', async (req, res) => {
    const query = req.query; //in papzov demo query == filter
    const movies = await movieService.getAll(query).sort({ year: "desc" }).lean();
    //const movies = await movieService.getAll(query).lean(); Papazov demo

    res.render('home', { isSearch: true, movies, query });
});

router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getById(movieId).lean();

    res.render('movie/details', { movie })
});

router.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getById(movieId).lean();
    const casts = await castService.getAllWithout(movie.casts).lean();

    res.render('movie/attach', { movie, casts });
});

router.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    const characterName = req.body.charName;

    await movieService.attach(movieId, castId, characterName);

    res.redirect(`/movies/${movieId}/details`);

});

// Deprecated  form papazov demo
// function toArray(documents) {
//     return documents.map(document => document.toObject());
// }


export default router;
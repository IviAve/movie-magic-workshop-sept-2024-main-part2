import { Router } from 'express';
import movieService from '../services/movieService.js';

const router = Router();

router.get('/', async (req, res) => {
    const movies = await movieService.getAll().sort({ year: 'desc'}).lean();
    //const movies = await movieService.getAll().lean();  Papazov demo

    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

export default router;
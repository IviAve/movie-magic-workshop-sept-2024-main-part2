import Movie from "../models/Movie.js";

// TODO: Filter in db not in memory

const getAll = (query = {}) => {
    let movies = Movie.find();
    
    if (query.search) {
        movies.find({ title: { $regex: query.search, $options: 'i' } });
        // movies.regex('title', new RegExp(query.search, 'i'))
    };

    if (query.genre) {
        movies.find({ genre: { $regex: query.genre, $options: 'i' } });
        // movies.where('genre').equals(query.genre.toLowerCase())
    };

    if (query.year) {
        movies.find({ year: query.year });
         // movies.where('year').equals(query.year);
    };

    return movies;
};

const create = (movieData) => Movie.create(movieData);

const getById = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = (movieId, castId, characterName) => {

    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, characterName } } });
};

export default {
    getAll,
    create,
    getById,
    attach,
};
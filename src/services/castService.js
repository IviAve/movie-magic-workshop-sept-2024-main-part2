import Cast from '../models/Cast.js';

const getAll = () => Cast.find();

const create = (castData) => Cast.create(castData);

// const getAllWithout = (castIds) => Cast.find({ _id: { $nin: castIds } }); by Papazov
//const getAllWithout = (castsId) => Cast.find().nin('_id', castsId); by Tsvetan old

//Tsvetan solve problem with second  cast attach 
const getAllWithout = (casts = []) =>{
    const castsId = casts.map(cast => cast.cast._id);
 return Cast.find({_id: {$nin: castsId}});
}

export default {
    getAll,
    create,
    getAllWithout
};
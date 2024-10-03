import { Schema, model, Types } from 'mongoose';

const castShema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    born: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
});

const Cast = model('Cast', castShema);

export default Cast;

// from papazov demo 

// import { Schema, model } from "mongoose";

// const castSchema = new Schema({
//     name: String,
//     age: Number,
//     born: String,
//     imageUrl: String,
// });

// const Cast = model('Cast', castSchema);

// export default Cast;

const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema(
    {
        img: String,
        id: Number,
        bed:Number,
        bathroom:Number,
        parking:Number,
    },
    { collection: 'house'}
);

houseSchema.statics.findHome = async function () {
    const home = await this.find();
    return home;
}

const home = mongoose.model('Home', houseSchema);

module.exports = home;
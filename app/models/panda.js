const mongoose = require('mongoose');


// Define a schema
const Schema = mongoose.Schema;
const PandaSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    skill: {
        type: String,
        trim: true,
        required: true,
    },
    deleted: {
        _state: {
            type: Boolean,
            default: false
        },
        _at: {
            type: Date,
        }
    },
    created: {
        _at: {
            type: Date,
            default: Date.now()
        }
    }
});


PandaSchema.pre('find', function () {
    if(this._conditions.deleted === undefined)
        this.where({deleted: {_state: false}});
});

PandaSchema.pre('findOne', function () {
    if(this._conditions.deleted === undefined)
        this.where({deleted: {_state: false}});
});

PandaSchema.pre('findOneAndUpdate', function () {
    if(this._conditions.deleted === undefined)
        this.where({deleted: {_state: false}});
    this.options.new = true;
    this.options.runValidators = true;

});

module.exports = mongoose.model('Panda', PandaSchema);


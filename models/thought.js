const {Schema, model, Types} = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String, 
        required: true, 
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{
    toJSON: {
        virtuals: true,
        getters: true, 
    },
    id: false,
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true, 
        getters: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const thought = model('thought', thoughtSchema);

module.exports = thought;
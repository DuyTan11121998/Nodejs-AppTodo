var mongoose = require("mongoose");

var Schema = mongoose.Schema;

/**
 * Generator Struct data
 */
var todoSchema = new Schema({
    text: String,
    isDone: Boolean
});


var Todos = mongoose.model("Todos",todoSchema);

module.exports =Todos;
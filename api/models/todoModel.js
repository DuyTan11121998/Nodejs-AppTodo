var mongoose = require("mongoose");

var Schema = mongoose.Schema;

/**
 * Tạo Schema tạo ánh xạ đến các trường dữ liệu
 */
var todoSchema = new Schema({
    text: String,
    isDone: Boolean
});


var Todos = mongoose.model("Todos",todoSchema);

module.exports =Todos;
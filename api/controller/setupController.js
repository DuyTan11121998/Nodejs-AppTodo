var Todos = require("../models/todoModel")
module.exports = function(app){
    app.get("/api/setupTodos",function(req,res){
        //setup seed data
        var seedTodos =[
            {
                text: "Hoc Nodejs",
                isDone: false
            },
            {
                text: "Hoc Angular.js",
                isDone: false
            },
            {
                text: "App",
                isDone:false
            }
        ];

        Todos.create(seedTodos,function(err,re){
            res.send(re);
        })
    });
}
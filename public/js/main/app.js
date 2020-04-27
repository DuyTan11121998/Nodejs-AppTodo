// Khai báo phụ thuộc xeditable
var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope',function($scope){
    $scope.appName ="Todo Dashboard";
    $scope.fromData={};
    $scope.todos=[
        {
            text: "Khởi tạo dự án",
            isDone: true
        },{
            text: 'Khởi tạo dữ liệu ban đầu',
            isDone: true
        },{
            text: "okoa",
            isDone: false
        },{
            text: "Done and deploy",
            isDone: false
        }
    ];
    $scope.createTodo=function(){
        var todo ={
            text:$scope.formData.text,
            isDone:false
        }
        $scope.todos.push(todo);
        $scope.formData.text="";
    }

    $scope.updateTodo = function(todo){
        console.log("Update todo: ",todo);
    }

    $scope.deleteTodo =function(todo){
        console.log("Delete todo",todo);
    }
}]);
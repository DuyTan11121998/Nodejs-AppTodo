// Khai báo phụ thuộc xeditable
var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope','svTodos',function($scope,svTodos){
    $scope.appName ="Todo Dashboard";
    $scope.formData={};
    $scope.todos=[];
    $scope.loading = true;
    //load data den server
    svTodos.get()
        .success(function (data){
        $scope.todos=data;
        $scope.loading = false;
     });
    $scope.createTodo=function(){
        $scope.loading = true;
        var todo ={
            text: $scope.formData.text,
            isDone: false
        }
        //đẩy lên server
        svTodos.create(todo)
        .success(function(data){
            $scope.todos =data;
            $scope.formData.text="";
            $scope.loading = false;
        })
    }

    $scope.updateTodo = function(todo){
        $scope.loading = true;
        svTodos.update(todo)
            .success(function(data){
                $scope.todos =data;
                $scope.loading = false;
            })
    }

    $scope.deleteTodo =function(todo){
        $scope.loading = true;
        svTodos.delete(todo._id)
            .success(function(data){
                $scope.todos =data;
                $scope.loading = false;
            })

    }
}]);
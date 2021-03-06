var app = angular.module('toDoApp', ['ngSanitize']);
app.controller('toDoController', function($scope) {
    // Default ToDo List. In this we are adding the details to the list
    $scope.todoList = [{todoText:'Html', status:'Pending'},{todoText:'Script', status:'Pending'},
        {todoText:'Jquery', status:'Pending'}];

    updateAddTotal();

    $scope.addItem = function() {
        $scope.todoList.push({todoText:$scope.newitem, status:'Pending'});
        $scope.newitem = "";
        $("#item").focus();
        updateAddTotal();
    };

    // Modifying Pending to Done
    $scope.changeToDone = function (event) {
        angular.element(event.target).parent().append("<span class='label success'>Done!</span>");
        angular.element(event.target).parent().attr("class", 'completed');
        angular.element(event.target).remove();
        updateRemoveTotal();
    };

    // It clears the every list
    $scope.remove = function () {
        var list = $scope.todoList;
        $scope.todoList = [];

    };
    // It calculates the pending and completed ones
    function updateAddTotal() {
        var completed = 0;
        var pending = 0;
        $scope.todoList.forEach(function (value) {
            if(value.status == 'Pending'){
                pending = pending+1;
            }else{
                completed = completed+1;
            }
        });
        if (completed > 0 || pending > 0) {
            $scope.totalText = " Pending: " + pending + " Completed: " + completed;
        }else{
            $scope.totalText = " Pending: " + $scope.todoList.length + " Completed: " + completed;
        }
    };
   // It changes the total when any one of the list is updated or deleted
    function updateRemoveTotal() {
        completed = $('.success').length;
        pending = $('.pending').length;
        if (completed > 0 || pending > 0) {
            $scope.totalText = " Pending: " + pending + " Completed: " + completed;
        }else{
            $scope.totalText = " Pending: " + $scope.todoList.length + " Completed: " + completed;
        }
    };

});
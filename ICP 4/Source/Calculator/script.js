var app =angular.module('calcApp',['ngSanitize']);

app.controller('calcController',function ($scope) {
    var elementsArray = [];
// clears everything
    clear();

    function clear() {
        $scope.eqtn = "";
        $scope.numb = "";
        elementsArray = [];
    }
// clear number
    function clearNumber() {
        $scope.numb = "";
    };

// push the elements into the array
    function equationAdd(a, b) {
        elementsArray.push(a);
        elementsArray.push(b);
        $scope.eqtn += a;
        $scope.eqtn += b;
    }
// it multiplies the given number
    function multiply(a, b) {
        var c = parseInt(elementsArray[a]) * parseInt(elementsArray[b]);
        elementsArray[a] = c.toString();
        elementsArray.splice(a + 1, 2);
    }
// It divides the number
    function divide(a, b) {
        var c = parseInt(elementsArray[a]) / parseInt(elementsArray[b]);
        elementsArray[a] = c.toString();
        elementsArray.splice(a + 1, 2);
    }
// It adds the number
    function add(a, b) {
        var c = parseInt(elementsArray[a]) + parseInt(elementsArray[b]);
        elementsArray[a] = c.toString();
        elementsArray.splice(a + 1, 2);
    }
// It subtracts the number
    function substract(a, b) {
        var c = parseInt(elementsArray[a]) - parseInt(elementsArray[b]);
        elementsArray[a] = c.toString();
        elementsArray.splice(a + 1, 2);
    }

// It calculates the each and every function
    function calculate() {
        for (var i = 0; i < elementsArray.length; i++) {
            if (elementsArray[i] == "*") {
                multiply(i - 1, i + 1);
                i = i - 2;
            } else if (elementsArray[i] == "/") {
                divide(i - 1, i + 1);
                i = i - 2;
            }
        };
        for (var i = 0; i < elementsArray.length; i++) {
            if (elementsArray[i] == "+") {
                add(i - 1, i + 1);
                i = i - 2;
            } else if (elementsArray[i] == "-") {
                substract(i - 1, i + 1);
                i = i - 2;
            }
        }
    };
// On clicking inm each div, this function will trigger
    $('div').click(function() {
        var text = $(this).text();
        switch (text[0]) {
            case "+": {
                equationAdd($scope.numb, "+");
                clearNumber();
                break;
            }
            case "-": {
                equationAdd($scope.numb, "-");
                clearNumber();
                break;
            }

            case "*": {
                equationAdd($scope.numb, "*");
                clearNumber();
                break;
            }
            case "/": {
                equationAdd($scope.numb, "/");
                clearNumber();
                break;
            }
            case "C": {
                clear();
                break;

            }
            case "=": {
                equationAdd($scope.numb, "=");
                elementsArray.pop();
                calculate();
                $scope.numb = elementsArray[0];
                $scope.eqtn = "";
                elementsArray.pop();
                break;
            }
            default: {
                $scope.numb += text[0];
                break;
            }
        }
    });




});
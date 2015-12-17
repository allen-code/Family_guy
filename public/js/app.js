/// <reference path="../../../WebSites/WebSite1/js/angular.js" />

var myApp = angular.module("myModule", ['ngRoute']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/',{
        templateUrl:'character/gallery.html'
    })
    .when('/blog',{
        templateUrl:'character/blog.html'
    })
    .when('/login',{
        templateUrl:'character/login.html'
    })  
    .when('/register',{
        templateUrl:'character/register.html'
    })
    .when('/character/:id',{
        templateUrl:'character/characters.html',
        controller:'characterCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {



  $http.get('/gallery').success(function(response) {



        //console.log(response);
        $scope.gallery = response;
        $scope.rowLimit = 6;
        $scope.sortColumn = 'name';
        $scope.reverseSort = false;


        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
        }


        $scope.formatDate = function(){
            var dateOut = new Date("October 30, 2015 11:13:00");
            return dateOut;
        }
  });
          //reviews for the website readers
        $scope.incrementLikes = function(character) {
            character.likes++;
            console.log(character._id);
            $http.put('/gallery', character).success(function(response){
                console.log(response);
            });
        };
        $scope.decrementLikes = function (character) {
            character.likes--;
            $http.put('/gallery', character).success(function(response){
                console.log(response);
            });
        };    
}]);﻿

myApp.controller('characterCtrl', ['$scope','$routeParams', function($scope, $routeParams){
    $scope.person = $scope.gallery[$routeParams.id];
}])
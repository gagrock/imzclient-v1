requirejs(['lib/common'], function(common){

   console.log("hello the loaders are here");
     require(['appInitializer'],function(App){
         App.init();
     });
       
});

define("appInitializer",['angular_ui_router','angular_route'],function(angular){


console.log("hello");

 var init = function(){
     
   var homeApp = angular.module('homeApp',['ngRoute','ui.router']);
     
    homeApp.controller('demit',function($scope){
        $scope.message= "keep some bargain here";
    }); 
   
     homeApp.config(['$stateProvider','$routeProvider',function(stateProvider,routeprovider){
        
         routeprovider
         .when('/home',{
             controller : 'demit',
             templateUrl :"templates/home.html"
         })
         .when('/contact',{
             controller : 'demit',
             templateUrl :"templates/contact.html"
         }).when('/about',{
             controller : 'demit',
             templateUrl :"templates/about.html"
         })
         .when('/404',{
             controller : 'demit',
             templateUrl :"templates/404.html"
         })
         .otherwise("/home");
         
        stateProvider
        .state('items',{
            url : "/items",
            templateUrl : "templates/state1.html"
        })
        .state('items.list', {
          url: "/list",
          templateUrl: "templates/state1.list.html",
          controller: function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
          }
        })
        .state('items.list2', {
          url: "/list2",
          templateUrl: "templates/state1.list2.html",
          controller: function($scope) {
            $scope.items = ["CALLA", "Listerata", "Offers","best", "Items"];
          }
        })
        .state('things',{
            url : "/things",
            templateUrl : "templates/state2.html"
        })
        
        .state('things.list', {
          url: "/list",
          templateUrl: "templates/state2.list.html",
          controller: function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
          }
      
        });
        
         
         
     }]);
     
     
     
     
    angular.bootstrap(document.body,['homeApp']);  
     
 };

  return {init : init};
   

});

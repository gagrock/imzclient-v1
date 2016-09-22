/*jslint white:true */
/*global requirejs*/
requirejs.config({
    baseUrl: 'js',
    paths: {
    lib :'lib',
    'jquery' : "lib/jquery/dist/jquery.min",
    'bootstrap' : "lib/bootstrap/dist/js/bootstrap.min" ,
    'angular' :  "lib/angular/angular.min",
    'angular_route' : "lib/angular-route/angular-route.min",
    'angular_ui_router' : "lib/angular-ui-router/release/angular-ui-router.min"

    },
    shim:{
        bootstrap : { 
            deps: ['jquery'],
            exports : "jquery"
    },
        jquery : {
            exports : "$"   
    },
        angular:{
            exports :"angular",
    },
        angular_route: {
            deps: ['angular'],
            exports :"angular",
    },
      angular_ui_router: {
            deps: ['angular'],
            exports :"angular",
        }

    },
    waitSeconds: 200


});
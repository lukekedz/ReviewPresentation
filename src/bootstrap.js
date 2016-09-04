// load framework modules
import angular from  'angular';
//import ngcomponentrouter from 'ngcomponentrouter';

// load application Angular modules
import app from './app/app.module';
import review from './review/review.module'

let mainModule = angular.module('main', [
    app, review
]);

angular.element(document).ready(() => {
    // bootstrap angular now that all modules have been loaded
    angular.bootstrap(document, [mainModule.name], {strictDi: true});
});


// must tell the Component Router which component to navigate components into
//module.value('$routerRootComponent', 'root');

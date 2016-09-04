// load framework modules
import angular from  'angular';
import ngComponentRouter from 'ngcomponentrouter';

// load application Angular modules
import app from './app/app.module';
import review from './review/review.module'

let mainModule = angular.module('main', [
    ngComponentRouter, app, review
]);

// must tell the Component Router which component to navigate components into
mainModule.value('$routerRootComponent', 'rootComponent');

angular.element(document).ready(() => {
    // bootstrap angular now that all modules have been loaded
    angular.bootstrap(document, [mainModule.name], {strictDi: true});
});

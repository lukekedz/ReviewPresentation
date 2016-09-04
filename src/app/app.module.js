import angular from 'angular';
import RootComponent from './root/root.component';
import HomeComponent from './home/home.component';
import ngComponentRouter from 'ngcomponentrouter';

export default angular
    .module('main.app', [ngComponentRouter])
    .component('rootComponent', {
        templateUrl: '/src/app/root/root.component.html',
        controller: RootComponent,
        controllerAs: 'vm',
        $routeConfig: [{
            path: '/home',
            component: 'homeComponent',
            name: 'Home'
        }, {
            path: '/review/...',
            component: 'reviewComponent',
            name: 'Review'
        }, {
            path: '/**',
            redirectTo: ['Home']
        }]
    })
    .component('homeComponent', {
        templateUrl: '/src/app/home/home.component.html',
        controller: HomeComponent,
        controllerAs: 'vm'
    })
    .name;

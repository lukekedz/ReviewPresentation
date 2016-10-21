import angular from 'angular';
import ngComponentRouter from 'ngcomponentrouter';
import RootComponent from './root/root.component';
import HomeComponent from './home/home.component';

export default angular
	.module('main.app', [ngComponentRouter])
	.component('root', {
		templateUrl: '/src/app/root/root.component.html',
		controller: RootComponent,
		controllerAs: 'vm',
		$routeConfig: [{
			path: '/home',
			component: 'home',
			name: 'Home'
		}, {
			path: '/review/...',
			component: 'review',
			name: 'Review'
		}, {
			path: '/**',
			redirectTo: ['Home']
		}]
	})
	.component('home', {
		templateUrl: '/src/app/home/home.component.html',
		controller: HomeComponent,
		controllerAs: 'vm'
	})
	.name;

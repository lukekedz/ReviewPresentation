import angular from 'angular';
import ReviewComponent from './review/review.component';
import PresentationListComponent from './presentation-list/presentation-list.component';
import PresentationDetailComponent from './presentation-detail/presentation-detail.component';
import GradeComponent from './grade/grade.component';
import DataService from './services/dataService';

export default angular
	.module('main.app.review', [])
	.component('review', {
		templateUrl: '/src/review/review/review.component.html',
		controller: ReviewComponent,
		controllerAs: 'vm',
		$routeConfig: [{
			path: '/presentation-list',
			component: 'presentationList',
			name: 'PresentationList',
			useAsDefault: true
		}, {
			path: '/presentation-detail/:id',
			component: 'presentationDetail',
			name: 'PresentationDetail'
		}]
	})
	.component('presentationList', {
		templateUrl: '/src/review/presentation-list/presentation-list.component.html',
		controller: PresentationListComponent,
		controllerAs: 'vm'
	})
	.component('presentationDetail', {
		templateUrl: '/src/review/presentation-detail/presentation-detail.component.html',
		controller: PresentationDetailComponent,
		controllerAs: 'vm',
		bindings: {
			"$router": "<"
		}
	})
	.component('grade', {
		templateUrl: '/src/review/grade/grade.component.html',
		controller: GradeComponent,
		controllerAs: 'vm',
		bindings: {
			score: "<",
			scoreSelected: "&"
		}
	})
	.service('DataService', DataService)
	.name;

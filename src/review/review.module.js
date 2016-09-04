import angular from 'angular';
import ReviewComponent from './review/review.component';
import PresentationListComponent from './presentation-list/presentation-list.component';

export default angular
    .module('main.app.review', [])
    .component('reviewComponent', {
        templateUrl: '/src/review/review/review.component.html',
        controller: ReviewComponent,
        controllerAs: 'vm',
        $routeConfig: [{
            path: '/presentation-list',
            component: 'presentationListComponent',
            name: 'PresentationList'
        }, {
            path: '/presentation-detail',
            component: 'presentationsDetailComponent',
            name: 'PresentationDetail'
        }]
    })
    .component('presentationListComponent', {
        templateUrl: '/src/review/presentation-list/presentation-list.component.html',
        controller: PresentationListComponent,
        controllerAs: 'vm'
    })
    .name;

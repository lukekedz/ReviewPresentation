import angular from  'angular';
import PresentationsComponent from './presentations/presentations.component';

export default angular
    .module('main.app.review', [])
    .component('presentationsComponent', {
        templateUrl: '/src/review/presentations/presentations.component.html',
        controller: PresentationsComponent,
        controllerAs: 'vm'
    })
    .name;

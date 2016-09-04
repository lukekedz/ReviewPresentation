import angular from  'angular';
import RootComponent from './root/root.component';

export default angular
    .module('main.app', [])
    .component('rootComponent', {
        templateUrl: '/src/app/root/root.component.html',
        controller: RootComponent,
        controllerAs: 'vm'
    })
    .name;

// must tell the Component Router which component to navigate components into
//module.value('$routerRootComponent', 'root');

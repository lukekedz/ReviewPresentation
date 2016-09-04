import { assert } from 'chai';
import RootComponent from './root.component';

describe('RootComponent', () => {
    var vm = undefined;

    beforeEach(() => {
        vm = new RootComponent();
    });

    it('title should equal "Review Code Camp Presentations"', () => {
       assert.equal(vm.title, 'Review Code Camp Presentations');
    });
});

import { assert } from 'chai';
import PresentationListComponent from './presentation-list.component';

describe('PresentationListComponent', () => {
    var vm = undefined;

    beforeEach(() => {
        vm = new PresentationListComponent();
    });

    it('title should equal "Code Camp Presentations"', () => {
       assert.equal(vm.title, 'Code Camp Presentations');
    });
});

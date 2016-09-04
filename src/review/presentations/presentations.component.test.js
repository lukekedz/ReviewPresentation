import { assert } from 'chai';
import PresentationsComponent from './presentations.component';

describe('PresentationsComponent', () => {
    var vm = undefined;

    beforeEach(() => {
        vm = new PresentationsComponent();
    });

    it('title should equal "Code Camp Presentations"', () => {
       assert.equal(vm.title, 'Code Camp Presentations');
    });
});

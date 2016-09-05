import { assert } from 'chai';
import HomeComponent from './home.component';
import constants from '../../constants';

describe('HomeComponent', () => {
    var vm = undefined;

    beforeEach(() => {
        vm = new HomeComponent();
    });

    it('should have property constants', () => {
       assert.property(vm, 'constants');
    });

    it('should have constants property CODECAMPENAME', () => {
        assert.equal(vm.constants.CODECAMPENAME, constants.CODECAMPENAME);
    })
});

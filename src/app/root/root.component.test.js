import { assert } from 'chai';
import RootComponent from './root.component';
import constants from '../../constants';

describe('RootComponent', () => {
	var vm = undefined;

	beforeEach(() => {
		vm = new RootComponent();
	});

	it('should have property items', () => {
		assert.property(vm, 'items');
	});

	it('should have an items array', () => {
		assert.isTrue(Array.isArray(vm.items));
	});

	it('should have items array wiht three elements', () => {
		assert.equal(vm.items.length, 3);
	});

	it('should have the correct items in the array', () => {
		let correctItems = [{
			title: constants.CODECAMPENAME,
			link: ['Home']
		}, {
			title: 'Home',
			link: ['Home']
		}, {
			title: 'Review',
			link: ['Review', 'PresentationList']
		}];

		assert.deepEqual(correctItems, vm.items);
	});

});

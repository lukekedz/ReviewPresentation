import RootComponent from './root.component';
import constants from '../../constants';

describe('RootComponent', () => {
	var sut = undefined;

	beforeEach(() => {
		sut = new RootComponent();
	});

	it('should have property items', () => {
		expect(sut).to.have.property('items');
	});

	it('should have an items array', () => {
		expect(Array.isArray(sut.items)).to.equal(true);
	});

	it('should have items array with three elements', () => {
		expect(sut.items.length).to.equal(3);
	});

	it('should have the correct items in the array', () => {
		let correctItems = [{
			title: constants.CODECAMPNAME,
			link: ['Home']
		}, {
			title: 'Home',
			link: ['Home']
		}, {
			title: 'Review',
			link: ['Review', 'PresentationList']
		}];

		expect(correctItems).to.deep.equal(sut.items);
	});

});

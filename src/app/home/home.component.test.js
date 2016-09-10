import HomeComponent from './home.component';
import constants from '../../constants';

describe('HomeComponent', () => {
	var sut = undefined;

	beforeEach(() => {
		sut = new HomeComponent();
	});

	it('should have property constants', () => {
		expect(sut).to.have.property('constants');
	});

	it('should have constants property CODECAMPNAME', () => {
		expect(sut.constants.CODECAMPNAME).to.equal(constants.CODECAMPNAME);
	})
});

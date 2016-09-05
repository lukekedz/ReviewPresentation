import GradeComponent from './grade.Component';

describe('GradeComponent', () => {

	let sut;
	const ZERO = 0;
	const NINE = 9;
	const TEN = 10;
	const EMPTYCIRCLE = 'fa-circle-o';
	const FULLCIRCLE = 'fa-circle';

	beforeEach(() => {
		sut = new GradeComponent();
	});

	describe('$onInit', () => {

		it('should invoke initializeIcons once', () => {
			let mock = sinon.mock(sut);
			mock.expects('initializeIcons')
				.once();

			sut.$onInit();
			mock.verify();
			mock.restore();
		});
	});

	describe('$onChanges', () => {

		it('should invoke initializeIcons once', () => {
			let mock = sinon.mock(sut);
			mock.expects('initializeIcons')
				.once();

			sut.$onChanges();
			mock.verify();
			mock.restore();
		});
	});

	describe('initializeIcons', () => {

		it('should populate icons array', () => {
			sut.initializeIcons();
			expect(sut.icons.length).to.equal(10);
		});

		it('should populate icons array with all fa-circle-o elements if score is zero', () => {
			sut.score = ZERO;
			sut.initializeIcons();
			expect(sut.icons[ZERO]).to.equal(EMPTYCIRCLE);
		});

		it('should populate icons array with all fa-circle elements if score is ten', () => {
			sut.score = TEN;
			sut.initializeIcons();
			expect(sut.icons[ZERO]).to.equal(FULLCIRCLE);
			expect(sut.icons[NINE]).to.equal(FULLCIRCLE);
		});
	});
});

import Presentation from './presentation';

describe('Presentation', () => {

	describe('constructor', () => {

		let sut;
		const TITLE = 'title';
		const ID = 1;
		const ZERO = 0;

		beforeEach(() => {
			sut = new Presentation(ID, TITLE);
		});

		it('should throw if id is undefined or null', () => {
			let caught = false;

			try {
				sut = new Presentation(undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('id is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});
		it('should throw if id is not an integer', () => {
			let caught = false;

			try {
				sut = new Presentation(TITLE);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('id is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if title is undefined, null, or is an empty string', () => {
			let caught = false;

			try {
				sut = new Presentation(ID);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('title is undefined, null, or is an empty string');
			}

			expect(caught).to.equal(true);
		});

		it('should have property id', () => {
			expect(sut).to.have.property('id');
		});

		it('should have property title', () => {
			expect(sut).to.have.property(TITLE);
		});

		it('should have property hasBeenReviewed', () => {
			expect(sut).to.have.property('hasBeenReviewed');
		});

		it('should have property id equal to 1', () => {
			expect(sut.id).to.equal(ID);
		});

		it('should have property title equal to title', () => {
			expect(sut.title).to.equal(TITLE);
		});

		it('should have property hasBeenReviewed equal to false', () => {
			expect(sut.hasBeenReviewed).to.equal(false);
		});

	});
});

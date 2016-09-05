import Question from './question';

describe('Question', () => {

	describe('constructor', () => {

		let sut;
		const ID = 1;
		const ZERO = 0;
		const TEXT = 'text';

		beforeEach(() => {
			sut = new Question(ID, TEXT, TEXT, TEXT, TEXT);
		});

		it('should throw if id is undefined or null', () => {
			let caught = false;

			try {
				sut = new Question(undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('id is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if id is not an integer', () => {
			let caught = false;

			try {
				sut = new Question('abc');
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('id is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if title is undefined, null, or is an empty string', () => {
			let caught = false;

			try {
				sut = new Question(ID, undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('title is undefined, null, or is an empty string');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if leftTitle is undefined, null, or is an empty string', () => {
			let caught = false;

			try {
				sut = new Question(ID, TEXT, undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('leftTitle is undefined, null, or is an empty string');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if centerTitle is undefined, null, or is an empty string', () => {
			let caught = false;

			try {
				sut = new Question(ID, TEXT, TEXT, undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('centerTitle is undefined, null, or is an empty string');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if rightTitle is undefined, null, or is an empty string', () => {
			let caught = false;

			try {
				sut = new Question(ID, TEXT, TEXT, TEXT, undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('rightTitle is undefined, null, or is an empty string');
			}

			expect(caught).to.equal(true);
		});

		it('should have property id', () => {
			expect(sut).to.have.property('id');
		});

		it('should have property id equal to 1', () => {
			expect(sut.id).to.equal(ID);
		});

		it('should have property title', () => {
			expect(sut).to.have.property('title');
		});

		it('should have property title equal to text', () => {
			expect(sut.title).to.equal(TEXT);
		});

		it('should have property leftTitle', () => {
			expect(sut).to.have.property('leftTitle');
		});

		it('should have property leftTitle equal to text', () => {
			expect(sut.leftTitle).to.equal(TEXT);
		});

		it('should have property centerTitle', () => {
			expect(sut).to.have.property('centerTitle');
		});

		it('should have property centerTitle equal to text', () => {
			expect(sut.centerTitle).to.equal(TEXT);
		});

		it('should have property rightTitle', () => {
			expect(sut).to.have.property('rightTitle');
		});

		it('should have property rightTitle equal to text', () => {
			expect(sut.rightTitle).to.equal(TEXT);
		});

		it('should have property score', () => {
			expect(sut).to.have.property('score');
		});

		it('should have property score equal to zero', () => {
			expect(sut.score).to.equal(ZERO);
		});

	});
});

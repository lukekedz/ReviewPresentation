export default class Presentation {

	totalScore;
	maximumScore;

	constructor(id, title) {
		if(!id || !Number.isInteger(id)) {
			throw new Error('id is undefined, null, or is not an integer');
		}
		if(!title) {
			throw new Error('title is undefined, null, or is an empty string');
		}
		this.id = id;
		this.title = title;
		this.hasBeenReviewed = false;
	}
}

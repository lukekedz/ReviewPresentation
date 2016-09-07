export default class Question {

	constructor(id, title, leftTitle, centerTitle, rightTitle) {
		if(!id || !Number.isInteger(id)) {
			throw new Error('id is undefined, null, or is not an integer');
		}
		if(!title) {
			throw new Error('title is undefined, null, or is an empty string');
		}
		if(!leftTitle) {
			throw new Error('leftTitle is undefined, null, or is an empty string');
		}
		if(!centerTitle) {
			throw new Error('centerTitle is undefined, null, or is an empty string');
		}
		if(!rightTitle) {
			throw new Error('rightTitle is undefined, null, or is an empty string');
		}

		this.id = id;
		this.title = title;
		this.leftTitle = leftTitle;
		this.centerTitle = centerTitle;
		this.rightTitle = rightTitle;
		this.score = 0;
	}
}

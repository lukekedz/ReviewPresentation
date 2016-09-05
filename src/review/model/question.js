export default class Question {

	constructor(id, category, title, lowTitle, middleTitle, highTitle) {
		if(!id || !Number.isInteger(id)) {
			throw new Error('id is undefined, null, or is not an integer');
		}
		if (!category) {
		    throw new Error('category is undefined, null, or is an empty string');
		}
		if(!title) {
			throw new Error('title is undefined, null, or is an empty string');
		}
		if (!lowTitle) {
		    throw new Error('lowTitle is undefined, null, or is an empty string');
		}
		if (!middleTitle) {
		    throw new Error('middleTitle is undefined, null, or is an empty string');
		}
		if (!highTitle) {
		    throw new Error('highTitle is undefined, null, or is an empty string');
		}

		this.id = id;
		this.category = category;
		this.title = title;
		this.lowTitle = lowTitle;
		this.middleTitle = middleTitle;
		this.highTitle = highTitle;
	}
}

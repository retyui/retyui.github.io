import { Question } from "./Question.js";
import { randArr } from "./util.js";
export class QuerstionList {
	constructor(questionData) {
		this._list = new Map(
			[...questionData].map(([id, data]) => [id, new Question(id, data)])
		);
	}

	random(count) {
		const tmp = [...this._list].sort(randArr);
		return new Map(count === 0 ? tmp : tmp.slice(0, count));
	}

	*co(useRandom) {
		const mapQ = this.random(useRandom);
		yield mapQ;
		for (const [_, currentQuestion] of mapQ) {
			yield currentQuestion;
		}
	}
}

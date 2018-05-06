import { randArr, isHasOneRigthAnswer } from "./util.js";

export class Question {
	constructor(id, data) {
		this._id = id;
		this._data = data;
		this.isOne = isHasOneRigthAnswer(data);
		this._rightValues = data.rightAnswers.split(",").map(e => e.trim());
		Object.freeze(this._rightValues);
	}
	get countAns() {
		return this._rightValues.length;
	}
	mountToElement(root) {
		root.innerHTML = this.getHTML();
		this.allInputs = root.querySelectorAll("input");
	}

	initListeners(root) {
		return new Promise((res, rej) => {
			const handler = () => {
				if (this._getCheckedInputs().length === this._rightValues.length) {
					root.removeEventListener("change", handler);
					res(this.showResult());
				}
			};
			root.addEventListener("change", handler, { once: this.isOne });
		});
	}

	_getCheckedInputs() {
		return [...this.allInputs].filter(({ checked }) => checked);
	}

	isRight() {
		const checkedInputs = this._getCheckedInputs();
		const checkedValues = checkedInputs.map(({ value }) => value);
		const result = this._rightValues.map(val => checkedValues.includes(val));
		return result.every(Boolean);
	}

	showResult() {
		[...this.allInputs].map(input => {
			const isValid = this._rightValues.includes(input.value);
			const { classList } = input.parentElement;

			if (input.checked) {
				classList.toggle("is-error", !isValid);
			}
			classList.toggle("is-right", isValid);
		});
		return this.isRight();
	}

	getHTML() {
		const { question, answers } = this._data;
		return `
<fieldset class="c-question">
	<legend class="c-question__legend">${question}</legend>
	${[...answers]
		.sort(randArr)
		.map(([num, text]) => this.getHTMLAnswer(num, text))
		.join("")}
</fieldset>
`;
	}

	getHTMLAnswer(id, content) {
		const renderType = this.isOne === true ? "radio" : "checkbox";
		return `<label class="c-question__answer"><input required class="c-question__answer-input" name="group_${
			this._id
		}" type="${renderType}" value="${id}"/><!--span class="c-question__answer-virt c-question__answer-virt--${renderType}"></span--><span class="c-question__answer-text">${content}</span></label>`;
	}
}

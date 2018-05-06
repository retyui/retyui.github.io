import { Component } from "./Component.js";
export class Navigation extends Component {
	constructor(root, cb) {
		super();
		this.mountTo(root);
		this._cb = cb;
		root.addEventListener("click", this._handlerClick.bind(this));
		this.state = { text: "Next question" };
	}
	_handlerClick(e) {
		this._cb(e.target.dataset.type);
	}
	// next(){
	// 	let n = 9;
	// 		const id = setInterval(() => {
	// 			n-=1;
	// 			if(n < 1){
	// 				clearInterval(id);
	// 				this.getNextTest();
	// 				n = false;
	// 			}
	// 			this._nav.state = {next:{text: `Next ${n !== false ? `(${n})`: ''}`}}
	// 		}, 999);
	// }
	disableNextBtn(type = true) {
		this.state = {
			...this.state,
			disabled: type
		};
		return this;
	}
	setChooseConut(n) {
		this.state = {
			...this.state,
			choose: n
		};
		return this;
	}
	render({ text, disabled, choose }) {
		return `
<div class="c-nav">
	<button
	  class="c-nav__btn c-nav__btn--next"
	  data-type="next"
	  type="button"
	  ${disabled === true ? "disabled " : ""}
	>${text}</button>${
			disabled === true
				? `<span class="c-nav__choose">Choose: ${choose}</span>`
				: ""
		}
</div>
`;
	}
}

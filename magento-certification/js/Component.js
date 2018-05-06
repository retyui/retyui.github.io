export class Component {
	constructor() {
		this.__state = {};
		this.__outputElm = false;
	}

	set state(newState) {
		this.__state = { ...newState };
		if (typeof this.render === "function") {
			this.__setHTML(this.render(this.__state));
		}
	}

	get state() {
		return this.__state;
	}

	mountTo(root) {
		if (root) {
			this.__outputElm = root;
			this.__setHTML(this.render(this.__state));
		}
		return this;
	}

	__setHTML(newHtml) {
		if (this.__outputElm) {
			this.__outputElm.innerHTML = newHtml;
		}
	}
}

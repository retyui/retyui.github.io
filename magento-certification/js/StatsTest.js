import { Component } from "./Component.js";

export class StatsTest extends Component {
	constructor(all) {
		super();
	}
	updateCount({ step = true, errors = false }) {
		const prev = this.state;
		if (step) {
			prev.step++;
		}
		if (errors) {
			prev.errors++;
		}
		this.state = prev;
	}
	beginState(all) {
		this.state = { all, errors: 0, step: 0 };
	}

	render(state) {
		const { time, all, errors, step } = this.state;
		return `
<div class="c-labels">
	${time ? `<span class="c-label">Time: <b>${time}</b></span>` : ""}
	${!time ? `<span class="c-label">Step: <b>${step}/${all}</b></span>` : ""}
	<span class="c-label c-label--errors">Errors: <b>${errors}</b></span>
	<span class="c-label c-label--correct">Correct: <b>${step - errors}</b></span>
</div>
`;
	}
}

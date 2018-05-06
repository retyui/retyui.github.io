import { StatsTest } from "./StatsTest.js";
import { Navigation } from "./Navigation.js";
import { $ } from "./util.js";
export class App {
	constructor({ qlist, hljs }) {
		this.hljs = hljs;
		this.qlist = qlist;
		this._stats = new StatsTest().mountTo($("#root__stats"));
		this.questionRoot = $("#root__form");
		this._testStartTime = 1000000000000;
		this._nav = new Navigation(
			$("#root__form_buttom"),
			this._navigationChange.bind(this)
		);
		document.addEventListener("click", ({ target }) => {
			if (target.matches(".js-begin-test")) {
				const rand = parseInt(target.getAttribute("data-random") || 0);
				this.startTest(rand);
			}
		});
	}

	startTest(rand) {
		document.body.classList.add("test-started");
		this._testStartTime = new Date().getTime();
		this._currentTestGenerator = this.qlist.co(rand);
		this._currentQuestionList = this._currentTestGenerator.next().value;
		this._stats.beginState(this._currentQuestionList.size);
		this._historyStack = [];
		this.getNextTest();
	}

	_navigationChange(direction) {
		if (direction === "next") {
			this.getNextTest();
		}
	}

	async getNextTest() {
		const { done, value: currentQuestion } = this._currentTestGenerator.next();
		if (done === false && currentQuestion) {
			currentQuestion.mountToElement(this.questionRoot);
			this.highlight();
			this._nav.disableNextBtn(true).setChooseConut(currentQuestion.countAns);
			const isRight = await currentQuestion.initListeners(this.questionRoot);
			this._nav.disableNextBtn(false);
			this._historyStack.push(currentQuestion);
			this._stats.updateCount({ errors: !isRight });
		} else {
			document.body.classList.remove("test-started");
			this._stats.state = {
				...this._stats.state,
				time: millisToMinutesAndSeconds(
					new Date().getTime() - this._testStartTime
				)
			};
			$(".js-test-result").innerHTML = this._stats.render(this._stats.state);
		}
	}
	highlight() {
		for (const codeElm of this.questionRoot.querySelectorAll(".js-highligh")) {
			this.hljs.highlightBlock(codeElm);
		}
	}
}
function millisToMinutesAndSeconds(millis) {
	const minutes = Math.floor(millis / 60000);
	const seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + "m " + ("0" + seconds).slice(-2) + "s";
}

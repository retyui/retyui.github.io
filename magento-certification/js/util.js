export function isHasOneRigthAnswer({ rightAnswers }) {
	return rightAnswers.split(",").length === 1;
}
export const randArr = () => 0.5 - Math.random();
const replacements = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#x27;",
	"/": "&#x2F;"
};
const replacementsRegexp = new RegExp(
	`[${Object.keys(replacements).join("")}]`,
	"g"
);
export function escapeHTML(text) {
	return text.replace(replacementsRegexp, character => replacements[character]);
}

export function $() {
	return document.querySelector(...arguments);
}

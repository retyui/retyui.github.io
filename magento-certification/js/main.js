import { CommonJs } from "./Common.js";
const $ = sel => document.querySelector(sel);
const cmjs = new CommonJs();
const modules = "../node_modules";

(async () => {
	const [questionsExport, App, QuerstionList, hljs] = await Promise.all([
		import("../data/questions.js"),
		import("./App.js").then(({ App }) => App),
		import("./QuerstionList.js").then(({ QuerstionList }) => QuerstionList),
		import(`${modules}/highlight.js/lib/highlight.js`).then(() => {
			if (window.hljs) {
				const hljs = window.hljs;
				delete window.hljs;
				return hljs;
			}
		})
	]);

	const { typesCode, qestions } = questionsExport;
	await preRegisterLanguage(hljs, typesCode);
	const app = new App({
		hljs,
		qlist: new QuerstionList(qestions)
	});
	initCustomColorTheme($("#link_color_theme"), $("#select_color_theme"));
})();

async function preRegisterLanguage(hljs, type) {
	cmjs.hach(true);
	await Promise.all(
		[...type].map(async type => {
			const _module = await cmjs.import(
				`${modules}/highlight.js/lib/languages/${type}.js`
			);
			hljs.registerLanguage(type, _module);
		})
	);
	cmjs.hach(false);
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register(location.pathname + "service-worker.js", {
			scope: location.pathname
		})
		.then(() => {
			console.log("Service Worker Registered");
		});
}

function initCustomColorTheme(link, select) {
	const viewSelect = isOffline => (select.hidden = isOffline);
	const updateOnlineStatus = () => viewSelect(!navigator.onLine);

	updateOnlineStatus();
	window.addEventListener("online", updateOnlineStatus);
	window.addEventListener("offline", updateOnlineStatus);
	select.addEventListener("change", ({ target }) => {
		link.setAttribute(
			"href",
			`node_modules/highlight.js/styles/${target.value}.css`
		);
	});
}

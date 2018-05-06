export class CommonJs {
	constructor() {
		this.exports = new Map();
		this.tmp = new Map();
	}
	hach(toggle = true) {
		const that = this;
		this.tmp.clear();
		if (toggle) {
			window.module = {
				get exports() {
					debugger;
				},
				set exports(v) {
					try {
						throw new Error();
					} catch (e) {
						const arr = e.stack.split("at");
						that.tmp.set(arr[2], v);
					}
				}
			};
		} else {
			delete window.module;
		}
		return this;
	}
	async import(path) {
		if (this.exports.has(path)) {
			return this.exports.get(path);
		}

		await import(path);
		const cleanPath = path.replace(/\.\.?\//g, "/");
		const [exports] = [...this.tmp].filter(([name]) =>
			name.includes(cleanPath)
		);
		if (exports) {
			const [_, val] = exports;
			this.exports.set(path, val);
			return val;
		} else {
			throw new Error("хуевая идея");
		}
	}
}

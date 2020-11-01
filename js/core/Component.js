export default class Componet {
	constructor(target, props = {}) {
		this.$target = target;
		this.$props = props;
		this.baseUrl = "https://js-todo-list-9ca3a.df.r.appspot.com";

		this.setEvent();
		this.render();

		return this;
	};

	template() {return ``};
	mounted() {};

	render() {
		this.template();
		// this.$target.innerHTML = this.template();

		this.mounted();
	};

	setEvent() {};
	addEvent(eventName, eventTarget, callback) {
		this.$target.addEventListener(eventName, event => {
			const children = [ ...this.$target.querySelectorAll(eventTarget) ];

			if (!children.includes(event.target)) return;

			callback(event);
		});
	};

	executeXhr(url, {method, data}, callback) {
		const xhr = new XMLHttpRequest();
		const wholeUrl = this.baseUrl + url;

		xhr.open(method, wholeUrl);
		xhr.setRequestHeader('Content-type', 'application/json');

		if(method === "POST")
			xhr.send(JSON.stringify(data));

		if(method === "GET") 
			xhr.send();

		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) callback(xhr.response);
		};
	};
};
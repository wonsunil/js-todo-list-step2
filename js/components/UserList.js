import Component from "../core/Component.js";

export default class UserList extends Component {
	template() {
		// let data = this.executeXhr("/api/users", {method: "GET"}, res => {
		// 	return JSON.parse(res);
		// });

		// ${[...data].map(user => `
		// 	<button class"ripple ${user.name === this.selectedName ? "active" : ""}">${user.name}</button>
		// 	`).join("")}

		// console.log(data);

		return ``;
	};

	render() {
		this.$target.innerHTML = "";

		this.$target.innerHTML = this.template();
	};

	setEvent() {
		const { addUser, data } = this.$props;

		this.addEvent("click", ".ripple", () => {
			this.selectedName = event.target.innerHTML;

			// this.render();
		});

		this.addEvent("click", ".user-create-button", () => {
			const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
			const list = document.querySelector("#user-list");
			const createButton = document.querySelector(".user-create-button");

			createButton.insertAdjacentHTML("beforebegin", 
				`
				<button class="ripple">${userName}</button>
				`);

			addUser(userName);
		});
	};
};
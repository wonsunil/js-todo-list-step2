import Component from "../core/Component.js";

export default class UserList extends Component {
	template() {
		this.executeXhr("/api/users", {method: "GET"}, res => {
			const data = JSON.parse(res);

			return `${[...data].map(user => `
				<button class"ripple ${user.name === this.$props.name ? active : ""}">${user.name}</button>
			`)}
			<button class="ripple user-create-button">+ 유저 생성</button>
			`;

			return JSON.parse(res);
		});

		return ``;
	};

	setEvent() {
		const { addUser, data } = this.$props;

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
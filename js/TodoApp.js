import Component from "./core/Component.js";
import UserData from "./components/UserData.js";
import UserList from "./components/UserList.js";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

export default class App extends Component {
	template() {
		return ``;
	};

	mounted() {
		const { addUser, getUserData, addTodo, getSelectedId, getTodoList } = this;

		const $userData = document.querySelector("#user-title");
		const $userList = document.querySelector("#user-list");
		const $inputContainer = document.querySelector(".input-container");
		const $todoList = document.querySelector(".todo-list");

		const userData = new UserData($userData, {
			getSelectedId: getSelectedId.bind(this)
		});
		const userList = new UserList($userList, {
			addUser: addUser.bind(this),
			getSelectedId: getSelectedId.bind(this)
		});

		const todoInput = new TodoInput($inputContainer, {
			addTodo: addTodo.bind(this)
		});

		const todoList = new TodoList($todoList, {
			getSelectedId: getSelectedId.bind(this),
			getTodoList: getTodoList.bind(this)
		});

		// this.$target.innerHTML = `
		// <h1 id="user-title" data-username="eastjun">
		// 	${userData.template()}
		// </h1>
		// <section>
		// ${userList.template()}
		// </section>
		// <section class="todoapp">
		// 	<section class="input-container">
		// 	${todoInput.template()}
		// 	</section>
		// </section>
		// <section class="main">
		
		// </section>
		// `;
	};

	getTodoList(id) {
		return this.executeXhr(`/api/users/${id}/items`, {method: "GET"}, res => {
			return res;
		});
	};

	getSelectedId() {
		return this.selectedId;
	};

	addUser( name ) {
		const url = "/api/users";

		this.executeXhr(url, {method: "POST", data: {name}}, res => {
			console.log(res);
		});
	};

	addTodo(text) {
		const url = `${this.getSelectedId()}/items/`;

		this.executeXhr(url, {method: "POST", data: {contents: text}}, res => {
			console.log(res);
		});
	};

	setEvent() {
		
	};
};
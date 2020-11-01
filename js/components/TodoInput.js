import Component from "../core/Component.js";

export default class TodoInput extends Component {
	template() {
		return `
		<input
        class="new-todo"
        placeholder="할 일을 입력해주세요."
        autofocus
        />
		`;
	};

	setEvent() {
		// console.log(this.$props);
		// const { addItem } = this.$props;

		// this.addEvent("keyup", "#new-todo-title", ({key, target}) => {
		// 	if(key === "Enter") {
		// 		addUser(target.value);

		// 		return;
		// 	};
		// });
	};
};
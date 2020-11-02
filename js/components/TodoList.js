import Component from "../core/Component.js";

export default class TodoList extends Component {
	template() {
		console.log(this.$props.getSelectedId())

		console.log(this.$props.getTodoList(this.$props.getSelectedId()))

		return ``;
	};
};
import Component from "../core/Component.js";

export default class UserData extends Component {
	template() {
		return `
		<span><strong>${this.$props.name}</strong>'s Todo List</span>
		`;
	};

	changeUserName(name) {

	};
};
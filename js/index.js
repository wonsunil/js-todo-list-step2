const onUserCreateHandler = () => {
	const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
	const list = document.querySelector("#user-list");
	const createButton = document.querySelector(".user-create-button");

	createButton.insertAdjacentHTML("beforebegin", 
		`
		<button class="ripple">${userName}</button>
		`);

	addUser(userName);
};

const base = "https://js-todo-list-9ca3a.df.r.appspot.com";

const userCreateButton = document.querySelector('.user-create-button')
userCreateButton.addEventListener('click', onUserCreateHandler)

function addUser( name ) {
	const url = "/api/users";

	executeXhr(url, {method: "POST", data: {name}}, res => {
		console.log(res);
	});
};

function executeXhr(url, {method, data}, callback) {
	const xhr = new XMLHttpRequest();
	const wholeUrl = base + url;

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

// executeXhr("/api/users", {method: "GET"}, res => {
// 	console.log(JSON.parse(res));
// });

function render() {
	
};
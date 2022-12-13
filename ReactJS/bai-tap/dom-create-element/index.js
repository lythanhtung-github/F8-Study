const form = document.createElement('form');

const labelUserName = document.createElement('label');
labelUserName.innerText = 'UserName: ';

const labelPassword = document.createElement('label');
labelPassword.innerText = 'Password: ';

const inputUserName = document.createElement('input');
inputUserName.placeholder = "Enter your user name";

const inputPassword = document.createElement('input');
inputPassword.placeholder = "Enter your password";

const buttonLogin = document.createElement('button');
buttonLogin.innerText = 'Login';

const br1 = document.createElement('br');
const br2 = document.createElement('br');

form.appendChild(labelUserName);
form.appendChild(inputUserName);
form.appendChild(br1);
form.appendChild(labelPassword);
form.appendChild(inputPassword);
form.appendChild(br2);
form.appendChild(buttonLogin);

document.querySelector("#root").appendChild(form);
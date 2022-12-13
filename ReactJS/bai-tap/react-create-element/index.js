// React.createElement
// + type: tên thẻ, component
// + props: 
// + children(s): text, children khác

// const h1 = React.createElement('h1', {
//     className: 'heading',
//     style: {
//         backgroundColor: 'red',
//         color: 'white'
//     }
// }, "Test")
// <React.Fragment>

const labelUserName = React.createElement('label', null, 'UserName');
const inputUserName = React.createElement('input', {
    placeholder: 'User Name',
}, null);

const labelPassWord = React.createElement('label', null, 'PassWord');
const inputPassWord = React.createElement('input', {
    placeholder: 'PassWord',
}, null);

const trLogin = React.createElement('tr', null,
    labelUserName,
    inputUserName);

const trPassWord = React.createElement('tr', null,
    labelPassWord,
    inputPassWord);

const buttonLogin = React.createElement('button', null, 'Login');

const trBtnLogin = React.createElement('tr', null,
    buttonLogin);

const table = React.createElement("table",
    null,
    trLogin,
    trPassWord,
    trBtnLogin
);

const form = React.createElement('form', null, table)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(form);
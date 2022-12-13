const divRegisterCardContainer = document.createElement('div');
divRegisterCardContainer.className = 'register-card-conainer';

const divRegisterCard = document.createElement('div');
divRegisterCard.className = 'register-card';

const  divLoginCardLogo = document.createElement('div');
divLoginCardLogo.className = 'login-card-logo';

const imgLogo = document.createElement('img');
imgLogo.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0580cbe2-abde-4db5-a269-2b97cc547429/df1vqpr-8297b560-08a0-4cbb-958c-63ec361bf08f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1ODBjYmUyLWFiZGUtNGRiNS1hMjY5LTJiOTdjYzU0NzQyOVwvZGYxdnFwci04Mjk3YjU2MC0wOGEwLTRjYmItOTU4Yy02M2VjMzYxYmYwOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OfaKcsS-pIFrzCIxzkRL1lXl6JXphgAKkMG43vSnH10';
divLoginCardLogo.appendChild(imgLogo);

const formRegister = document.createElement('form');
formRegister.className = 'register-card-form';

const divFormItem1 = document.createElement('div');
divFormItem1.className = 'form-item';

const spanFormItemIcon1 = document.createElement('span');
spanFormItemIcon1.className = 'form-item-icon';
const faUser = document.createElement('i');
faUser.className = 'fa-solid fa-user-pen';
spanFormItemIcon1.appendChild(faUser);
const inputEmail = document.createElement('input');
inputEmail.placeholder = 'Nhập Email';
inputEmail.type = 'email';
inputEmail.autofocus = true;

divFormItem1.appendChild(spanFormItemIcon1);
divFormItem1.appendChild(inputEmail); 
//--------------
const divFormItem2 = document.createElement('div');
divFormItem2.className = 'form-item';

const spanFormItemIcon2 = document.createElement('span');
spanFormItemIcon2.className = 'form-item-icon';
const faKey = document.createElement('i');
faKey.className = 'fa-solid fa-signature';
spanFormItemIcon2.appendChild(faKey);
const inputFullName = document.createElement('input');
inputFullName.placeholder = 'Nhập Họ tên';
inputFullName.type = 'text';

divFormItem2.appendChild(spanFormItemIcon2);
divFormItem2.appendChild(inputFullName); 

//---------------
const divFormItem3 = document.createElement('div');
divFormItem3.className = 'form-item';

const spanFormItemIcon3 = document.createElement('span');
spanFormItemIcon3.className = 'form-item-icon';
const faPhone = document.createElement('i');
faPhone.className = 'fa-solid fa-phone';
spanFormItemIcon3.appendChild(faPhone);
const inputPhone = document.createElement('input');
inputPhone.placeholder = 'Nhập Số điện thoại';
inputPhone.type = 'text';

divFormItem3.appendChild(spanFormItemIcon3);
divFormItem3.appendChild(inputPhone); 

//---------------
const btnRegister = document.createElement('button');
btnRegister.type = 'button';
btnRegister.innerText = 'Đăng ký';
btnRegister.onclick = () => {
    Swal.fire({
        title: 'Dom create element',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
}
//---------------

formRegister.appendChild(divFormItem1);
formRegister.appendChild(divFormItem2);
formRegister.appendChild(divFormItem3);
formRegister.appendChild(btnRegister);

divRegisterCard.appendChild(divLoginCardLogo);
divRegisterCard.appendChild(formRegister);

divRegisterCardContainer.appendChild(divRegisterCard);

document.querySelector('#root').appendChild(divRegisterCardContainer);
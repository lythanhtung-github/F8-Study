const imgLogo = React.createElement('img',
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU'
    },
    null);

const divLoginCardLogo = React.createElement('div',
    {
        className: 'login-card-logo'
    },
    imgLogo);

const divFormItem1 = React.createElement('div',
    {
        className: 'form-item'
    },
    React.createElement('span', {
        className: 'form-item-icon'
    },
        React.createElement('i', {
            className: 'fa-solid fa-user-pen'
        })
    ),
    React.createElement('input', {
        placeholder: 'Nhập Email',
        type: 'email',
        autoFocus: true
    })
);

const divFormItem2 = React.createElement('div',
    {
        className: 'form-item'
    },
    React.createElement('span', {
        className: 'form-item-icon'
    },
        React.createElement('i', {
            className: 'fa-solid fa-signature'
        })
    ),
    React.createElement('input', {
        placeholder: 'Nhập Họ tên',
        type: 'text'
    })
);

const divFormItem3 = React.createElement('div',
    {
        className: 'form-item'
    },
    React.createElement('span', {
        className: 'form-item-icon'
    },
        React.createElement('i', {
            className: 'fa-solid fa-phone'
        })
    ),
    React.createElement('input', {
        placeholder: 'Nhập Số điện thoại',
        type: 'text'
    })
);

const btnRegister = React.createElement('button', {
    type: 'button',
    onClick : () => {
        Swal.fire({
            title: 'React create element',
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
},'Đăng ký');

const formRegister = React.createElement('form',
    {
        className: 'register-card-form'
    },
    divFormItem1,
    divFormItem2,
    divFormItem3,
    btnRegister);

const divRegisterCard = React.createElement('div',
    {
        className: 'register-card'
    },
    divLoginCardLogo,
    formRegister
);

const divRegisterCardContainer = React.createElement('div',
    {
        className: 'register-card-container'
    },
    divRegisterCard);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divRegisterCardContainer);
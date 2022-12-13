const handleClick = () => {
    Swal.fire({
        title: 'JSX create element',
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

const divRegisterCardContainer = (
    <div className="register-card-conainer">
        <div className="register-card">
            <div className="login-card-logo">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0580cbe2-abde-4db5-a269-2b97cc547429/df1vqpr-8297b560-08a0-4cbb-958c-63ec361bf08f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1ODBjYmUyLWFiZGUtNGRiNS1hMjY5LTJiOTdjYzU0NzQyOVwvZGYxdnFwci04Mjk3YjU2MC0wOGEwLTRjYmItOTU4Yy02M2VjMzYxYmYwOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OfaKcsS-pIFrzCIxzkRL1lXl6JXphgAKkMG43vSnH10"
                    alt="logo"/>
            </div>
            <div className="register-card-header">
                <h1>Đăng ký</h1>
            </div>
            <form className="register-card-form">
                <div className="form-item">
                    <span className="form-item-icon"><i className="fa-solid fa-face-rolling-eyes"></i></span>
                    <input type="email" placeholder="Nhập email"/>
                </div>
                <div className="form-item">
                    <span className="form-item-icon"><i className="fa-solid fa-user-pen"></i></span>
                    <input type="text" placeholder="Nhập Họ tên"/>
                </div>
                <div className="form-item">
                    <span className="form-item-icon"><i className="fa-solid fa-phone"></i></span>
                    <input type="text" placeholder="Nhập Số điện thoại"/>
                </div>
              
                <button type="button" onClick={handleClick}>Đăng ký</button>
            </form>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divRegisterCardContainer);
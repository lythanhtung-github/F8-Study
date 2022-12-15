import React from "react";

function Header() {
    return (
        <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 text-secondary">Trang chủ</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Hỏi đáp</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Thông tin</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Liên hệ</a></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Tìm kiếm..." aria-label="Search" />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Đăng nhập</button>
              <button type="button" className="btn btn-warning">Đăng ký</button>
            </div>
          </div>
        </div>
      </header>
    )
};

export default Header;
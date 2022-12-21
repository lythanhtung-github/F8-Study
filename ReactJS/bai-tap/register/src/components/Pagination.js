import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
}

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { page, limit, totalRows } = pagination;
    const totalPages = Math.ceil(totalRows / limit);
    const numberPage = [];
    for (let i = 1; i <= totalPages; i++) {
        numberPage.push(i);
    }

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div className='position-absolute bottom-0 end-0'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link"
                            tabIndex="-1"
                            aria-disabled="true"
                            disabled={page <= 1}
                            onClick={() => handlePageChange(page - 1)}
                        >
                            <i className="fa-solid fa-angle-left"></i>
                            </button>
                    </li>
                    <>
                        {
                            numberPage.map(item => (
                                <li key={item}
                                    className={
                                        page === item ? 'page-item active' : 'page-item'
                                    }
                                    onClick= {() => handlePageChange(item)}
                                >
                                    <button className="page-link" href="#">{item}</button>
                                </li>
                            ))
                        }
                    </>
                    <li className="page-item">
                        <button className="page-link"
                            disabled={page >= totalPages}
                            onClick={() => handlePageChange(page + 1)}
                        >
                        <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </li>
                </ul>
            </nav>

        </div>

    )
}
export default Pagination;
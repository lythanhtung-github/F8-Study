import React from 'react';
import { useState } from 'react';
function Content() {
    const [title, setTitle] = useState('Trang chủ');

    const handleChange = (e) => {
        setTitle(e.target.value);
        console.log(title)
    }


    const handleChangeTitle = () => {
        setTitle("Trang chủ");
    }

    document.title = title;

    return (
        <div className="container vh-100">
            <h1>USE STATE</h1>
            <div className='form-group col-6'>
                <label className='form-label'>Title page: </label>
                <input className="form-control" type="text"
                    value={title}
                    onChange={handleChange}
                />
            </div>

            <button type = "button"
                className="btn btn-primary mt-2 mr-2"
                onClick={handleChangeTitle}
            >
                Change title
            </button>
        </div>
    );
}
export default Content;
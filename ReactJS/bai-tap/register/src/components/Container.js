import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const hobbits = [
    {
        id: 1,
        name: "Game"
    },
    {
        id: 2,
        name: "Music"
    },
    {
        id: 3,
        name: "Football"
    },
    {
        id: 4,
        name: "Collection"
    },
];

const genders = [
    {
        id: 1,
        name: "Male"
    },
    {
        id: 2,
        name: "Female"
    },
    {
        id: 3,
        name: "Gay"
    },
    {
        id: 4,
        name: "Less"
    },
];

function Container() {
    const [user, setUser] = useState({ gender: 1, province: "01", district: "271", ward: "09619" });
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [hobbit, setHobbit] = useState([]);
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        async function getData() {
            let resProvinces = await axios.get("https://vapi.vnappmob.com/api/province/");
            let resDistricts = await axios.get(`https://vapi.vnappmob.com/api/province/district/${resProvinces.data.results[0].province_id}`);
            let resWards = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${resDistricts.data.results[0].district_id}`);
            setProvinces(resProvinces.data.results);
            setDistricts(resDistricts.data.results);
            setWards(resWards.data.results);
        }
        getData();
    }, [user])

    useEffect(() => {
        async function getData() {
            let resProvinces = await axios.get("https://vapi.vnappmob.com/api/province/");
            let resDistricts = await axios.get(`https://vapi.vnappmob.com/api/province/district/${user.province}`);
            let resWards = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${user.district}`);
            setProvinces(resProvinces.data.results);
            setDistricts(resDistricts.data.results);
            setWards(resWards.data.results);
        }
        getData();
    }, [user])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...user, hobbit, avatar });

        setUser({
            ...user,
            email: "",
            fullName: "",
            phone: "",
            province: "01",
            district: "271",
            ward: "09619",
            gender: 1
        })
        setHobbit([]);
    }

    const handleCheck = (id) => {
        setHobbit(prev => {
            const isChecked = hobbit.includes(id);
            if (isChecked) {
                return hobbit.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    }

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        // e.target.value = null;
    }

    const { email, fullName, phone, province, district, ward, gender } = user;
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1 className="mt-2 display-3 text-center">ĐĂNG KÝ</h1>
                <hr />
                <div className="row">
                    <div className="col-sm-7">
                        <div className='col-sm-12 row'>
                            <div className='form-group mt-2 col-sm-6'>
                                <label htmlFor='email' className="form-label">Email:</label>
                                <div className="col-sm-12">
                                    <input type="text"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        value={email || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group mt-2 col-sm-6'>
                                <label htmlFor='fullName' className="form-label">Full name:</label>
                                <div className="col-sm-12">
                                    <input type="text"
                                        className="form-control"
                                        id="fullName"
                                        name='fullName'
                                        value={fullName || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 row'>
                            <div className='form-group mt-2 col-sm-6'>
                                <label htmlFor='phone' className="form-label">Phone:</label>
                                <div className="col-sm-12">
                                    <input type="text"
                                        className="form-control"
                                        id="phone"
                                        name='phone'
                                        value={phone || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group mt-2 col-sm-6'>
                                <label htmlFor='province' className="form-label">Province:</label>
                                <div className="col-sm-12">
                                    <select className='form-select'
                                        id='province'
                                        name='province'
                                        value={province}
                                        onChange={handleChange}
                                    >
                                        {
                                            provinces.map((province) => (
                                                <option value={province.province_id}
                                                    key={province.province_id}
                                                >
                                                    {province.province_name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 row'>
                            <div className='form-group mt-2 col-sm-6'>
                                <label htmlFor='district' className="form-label">District:</label>
                                <div className="col-sm-12">
                                    <select className='form-select'
                                        id='district'
                                        name='district'
                                        value={district}
                                        onChange={handleChange}
                                    >
                                        {
                                            districts.map((district) => (
                                                <option value={district.district_id}
                                                    key={district.district_id}
                                                >
                                                    {district.district_name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='form-group mt-2 col-sm-6'>
                                <label htmlFor='ward' className="form-label">Ward:</label>
                                <div className="col-sm-12">
                                    <select className='form-select'
                                        id='ward'
                                        name='ward'
                                        value={ward}
                                        onChange={handleChange}
                                    >
                                        {
                                            wards.map((ward) => (
                                                <option value={ward.ward_id}
                                                    key={ward.ward_id}
                                                >
                                                    {ward.ward_name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 row'>
                            <div className='form-group mt-2 row'>
                                <label htmlFor='gender' className="form-label">Gender:</label>
                                {
                                    genders.map(item => (
                                        <div className='col-sm-3' key={item.id}>
                                            <div className="form-check">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id={item.name}
                                                    checked={item.id == gender}
                                                    value={item.id}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor={item.name}>
                                                    {item.name}
                                                </label>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <hr />
                        <div className='col-sm-12 row'>
                            <div className='form-group row'>
                                <label htmlFor='hobbit' className="form-label">Hobbit:</label>
                                <div className='col-sm-12 row'>
                                    {
                                        hobbits.map(item => (
                                            <div className='col-sm-3' key={item.id}>
                                                <div className="form-check">
                                                    <input className="form-check-input"
                                                        type="checkbox"
                                                        id={item.id}
                                                        checked={hobbit.includes(item.id)}
                                                        onChange={() => handleCheck(item.id)}
                                                    />
                                                    <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='col-sm-12 row'>
                            <div className='form-group row'>
                                <label htmlFor='hobbit' className="form-label">Image:</label>
                                <div className='col-sm-12'>
                                    <input className="form-control"
                                        type="file"
                                        id="image"
                                        name="image"
                                        onChange={handlePreviewAvatar}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-check" aria-hidden="true"></i> Register
                        </button>
                    </div>
                    <div className="col-sm-5">
                        <img
                            className='mt-2 col-sm-12'
                            src={
                                avatar ? avatar.preview : 'https://image2.tin247.news/pictures/2022/02/10/pnt1644467741.jpeg'
                            }
                            alt=""
                            id='userImage'
                            name='userImage'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Container;
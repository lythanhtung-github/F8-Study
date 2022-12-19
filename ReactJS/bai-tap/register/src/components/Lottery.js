import { useState, useRef } from 'react';
import Marquee from "react-fast-marquee";

function Lottery() {
    const [lotteryResults, setLotteryResults] = useState({});
    const countSecond = useRef(0);
    const countThird = useRef(0);


    const handleRandomNumber = (e) => {
        e.preventDefault();
        let type = e.target.name;
        if (type === 'special') {
            e.target[0].style.display = 'none';

            let number = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;
            switch (number.toString().length) {
                case 1: number = '00000' + number; break;
                case 2: number = '0000' + number; break;
                case 3: number = '000' + number; break;
                case 4: number = '00' + number; break;
                case 5: number = '0' + number; break;
                default: break;
            }

            setLotteryResults({
                ...lotteryResults,
                specialNumber: number
            })
        }

        if (type === 'first') {
            let number = Math.floor(Math.random() * (99999 - 1 + 1)) + 1;

            switch (number.toString().length) {
                case 1: number = '0000' + number; break;
                case 2: number = '000' + number; break;
                case 3: number = '00' + number; break;
                case 4: number = '0' + number; break;
                default: break;
            }

            e.target[0].style.display = 'none';
            setLotteryResults({
                ...lotteryResults,
                firstNumber: number
            })
        }

        if (type === 'second') {
            let count = ++countSecond.current;
            let number = Math.floor(Math.random() * (99999 - 1 + 1)) + 1;

            switch (number.toString().length) {
                case 1: number = '0000' + number; break;
                case 2: number = '000' + number; break;
                case 3: number = '00' + number; break;
                case 4: number = '0' + number; break;
                default: break;
            }

            if (count === 1) {
                setLotteryResults({
                    ...lotteryResults,
                    secondNumber_1: number
                })
            }
            if (count === 2) {
                e.target[0].style.display = 'none';
                setLotteryResults({
                    ...lotteryResults,
                    secondNumber_2: number
                })
            }
        }

        if (type === 'third') {
            let count = ++countThird.current;
            let number = Math.floor(Math.random() * (9999 - 1 + 1)) + 1;

            switch (number.toString().length) {
                case 1: number = '000' + number; break;
                case 2: number = '00' + number; break;
                case 3: number = '0' + number; break;
                default: break;
            }

            if (count === 1) {
                setLotteryResults({
                    ...lotteryResults,
                    thirdNumber_1: number
                })
            }
            if (count === 2) {
                setLotteryResults({
                    ...lotteryResults,
                    thirdNumber_2: number
                })
            }
            if (count === 3) {
                e.target[0].style.display = 'none';
                setLotteryResults({
                    ...lotteryResults,
                    thirdNumber_3: number
                })
            }
        }
    }

    const { specialNumber,
        firstNumber,
        secondNumber_1,
        secondNumber_2,
        thirdNumber_1,
        thirdNumber_2,
        thirdNumber_3
    } = lotteryResults;
    return (

        <div className='container vh-100'>
            <Marquee direction="left" speed='20' className = 'mt-2'>
                <span className='h1 text-center'>XỔ SỐ KIẾN THIẾT MIỀN TRUNG </span>
            </Marquee>
            
            <hr />
            <div className='col-sm-12'>
                <form name='special' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GIẢI ĐẶC BIỆT</label>
                        </div>
                        <div className='col-sm-8 text-center'>
                            <h4>{specialNumber || "Chưa có thưởng"}</h4>
                        </div>

                        <div className='col-sm-2'>
                            <button type='submit' className='btn btn-primary ms-2'
                            >
                                Quay số
                            </button>
                        </div>
                    </div>
                </form>

                <hr />
                <form name='first' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GIẢI NHẤT</label>
                        </div>
                        <div className='col-sm-8 text-center'>
                            <h4>{firstNumber || "Chưa có thưởng"}</h4>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary ms-2'>Quay số</button>
                        </div>
                    </div>
                </form>

                <hr />
                <form name='second' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GIẢI NHÌ</label>
                        </div>
                        <div className='col-sm-8 d-flex text-center'>
                            <div className='col-sm-6'>
                                <h4>{secondNumber_1 || "Chưa có thưởng"}</h4>
                            </div>

                            <div className='col-sm-6'>
                                <h4>{secondNumber_2 || "Chưa có thưởng"}</h4>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary ms-2'>Quay số</button>
                        </div>
                    </div>
                </form>
                <hr />
                <form name='third' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GIẢI BA</label>
                        </div>
                        <div className='col-sm-8 d-flex text-center'>
                            <div className='col-sm-4'>
                                <h4>{thirdNumber_1 || "Chưa có thưởng"}</h4>
                            </div>
                            <div className='col-sm-4'>
                                <h4>{thirdNumber_2 || "Chưa có thưởng"}</h4>
                            </div>
                            <div className='col-sm-4'>
                                <h4>{thirdNumber_3 || "Chưa có thưởng"}</h4>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary ms-2'>Quay số</button>
                        </div>
                    </div>
                </form>
                <hr />
                <div className='col-sm-12 d-flex mt-2'>
                    <ul>
                        {
                            (specialNumber === undefined) ? <li>Giải đặt biệt chưa quay số</li> : ""
                        }
                        {
                            (firstNumber === undefined) ? <li>Giải nhất chưa quay số</li> : ""
                        }
                        {
                            (countSecond.current === 0) ? <li>Giải nhì chưa quay số</li> :
                                (countSecond.current === 1) ? <li>Giải nhì còn 1 lần quay số</li> : ""
                        }
                        {
                            (countThird.current === 0) ? <li>Giải ba chưa quay số</li> :
                                (countThird.current === 1) ? <li>Giải ba còn 2 lần quay số</li> :
                                    (countThird.current === 2) ? <li>Giải ba còn 1 lần quay số</li> : ""
                        }
                    </ul>

                </div>

            </div>
        </div >
    )
}

export default Lottery;  
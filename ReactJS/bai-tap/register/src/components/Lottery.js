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
                <span className='h1 text-center'>X??? S??? KI???N THI???T MI???N TRUNG </span>
            </Marquee>
            
            <hr />
            <div className='col-sm-12'>
                <form name='special' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GI???I ?????C BI???T</label>
                        </div>
                        <div className='col-sm-8 text-center'>
                            <h4>{specialNumber || "Ch??a c?? th?????ng"}</h4>
                        </div>

                        <div className='col-sm-2'>
                            <button type='submit' className='btn btn-primary ms-2'
                            >
                                Quay s???
                            </button>
                        </div>
                    </div>
                </form>

                <hr />
                <form name='first' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GI???I NH???T</label>
                        </div>
                        <div className='col-sm-8 text-center'>
                            <h4>{firstNumber || "Ch??a c?? th?????ng"}</h4>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary ms-2'>Quay s???</button>
                        </div>
                    </div>
                </form>

                <hr />
                <form name='second' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GI???I NH??</label>
                        </div>
                        <div className='col-sm-8 d-flex text-center'>
                            <div className='col-sm-6'>
                                <h4>{secondNumber_1 || "Ch??a c?? th?????ng"}</h4>
                            </div>

                            <div className='col-sm-6'>
                                <h4>{secondNumber_2 || "Ch??a c?? th?????ng"}</h4>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary ms-2'>Quay s???</button>
                        </div>
                    </div>
                </form>
                <hr />
                <form name='third' onSubmit={(e) => handleRandomNumber(e)}>
                    <div className='col-sm-12 d-flex mt-2'>
                        <div className='col-sm-2'>
                            <label className='form-label'>GI???I BA</label>
                        </div>
                        <div className='col-sm-8 d-flex text-center'>
                            <div className='col-sm-4'>
                                <h4>{thirdNumber_1 || "Ch??a c?? th?????ng"}</h4>
                            </div>
                            <div className='col-sm-4'>
                                <h4>{thirdNumber_2 || "Ch??a c?? th?????ng"}</h4>
                            </div>
                            <div className='col-sm-4'>
                                <h4>{thirdNumber_3 || "Ch??a c?? th?????ng"}</h4>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary ms-2'>Quay s???</button>
                        </div>
                    </div>
                </form>
                <hr />
                <div className='col-sm-12 d-flex mt-2'>
                    <ul>
                        {
                            (specialNumber === undefined) ? <li>Gi???i ?????t bi???t ch??a quay s???</li> : ""
                        }
                        {
                            (firstNumber === undefined) ? <li>Gi???i nh???t ch??a quay s???</li> : ""
                        }
                        {
                            (countSecond.current === 0) ? <li>Gi???i nh?? ch??a quay s???</li> :
                                (countSecond.current === 1) ? <li>Gi???i nh?? c??n 1 l???n quay s???</li> : ""
                        }
                        {
                            (countThird.current === 0) ? <li>Gi???i ba ch??a quay s???</li> :
                                (countThird.current === 1) ? <li>Gi???i ba c??n 2 l???n quay s???</li> :
                                    (countThird.current === 2) ? <li>Gi???i ba c??n 1 l???n quay s???</li> : ""
                        }
                    </ul>

                </div>

            </div>
        </div >
    )
}

export default Lottery;  
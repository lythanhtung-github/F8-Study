import { useState, useEffect } from 'react';

function Timer() {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        // const timerId = setInterval(() => {
        //     setCountdown((prevState) => prevState - 1);
        //     console.log('a')
        // }, 1000)
        const timerId = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000)

    return ()=> window.clearInterval(timerId);
    
    }, [countdown]);
    return (
        <h1>{countdown}</h1>
    );
}

export default Timer;
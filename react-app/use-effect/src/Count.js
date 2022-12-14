import { useEffect, useState } from 'react';

function Count() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });
    return (
        <h1>{width}</h1>
    );
}

export default Count;
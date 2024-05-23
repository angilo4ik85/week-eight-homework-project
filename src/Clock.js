import { useEffect, useState } from "react";

function Clock() {

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
        const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
        setTime(nowTime);
        }
        const intervalId = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return(
            <p className='time'>{time}</p>
    )
}
export default Clock;
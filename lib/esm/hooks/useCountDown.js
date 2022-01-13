import { useEffect, useState } from "react";
const getSecondsFromDate = (date) => date.getTime() > Date.now()
    ? Math.ceil((date.getTime() - Date.now()) / 1000)
    : null;
const useCountDown = (date, refreshInterval = 1000) => {
    const [seconds, setSeconds] = useState(date ? getSecondsFromDate(date) : null);
    useEffect(() => {
        const interval = setInterval(() => {
            if (date) {
                const newSeconds = getSecondsFromDate(date);
                if (newSeconds !== seconds) {
                    setSeconds(newSeconds);
                }
            }
        }, refreshInterval);
        return () => {
            clearInterval(interval);
        };
    }, [date, seconds, refreshInterval]);
    useEffect(() => {
        if (!date && seconds !== null) {
            setSeconds(null);
        }
    }, [date]);
    return seconds;
};
export default useCountDown;
//# sourceMappingURL=useCountDown.js.map
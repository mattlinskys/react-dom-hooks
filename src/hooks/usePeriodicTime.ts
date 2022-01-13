import { useEffect, useState } from "react";

const usePeriodicTime = (interval = 1000) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => {
      setDate(new Date());
    }, interval);

    return () => {
      clearInterval(i);
    };
  }, [interval]);

  return date;
};

export default usePeriodicTime;

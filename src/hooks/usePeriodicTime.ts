import useInterval from "hooks/useInterval";
import { useCallback, useEffect, useState } from "react";

const usePeriodicTime = (interval = 1000) => {
  const [date, setDate] = useState(new Date());

  const cb = useCallback(() => {
    setDate(new Date());
  }, []);

  useInterval(cb, interval);

  return date;
};

export default usePeriodicTime;

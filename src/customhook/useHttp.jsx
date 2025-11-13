import { useState, useEffect, useRef } from "react";

const useHttp = (apiFn, deps = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const stableApiFn = useRef(apiFn);
  stableApiFn.current = apiFn;

  useEffect(() => {
    let canceled = false;

    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await stableApiFn.current();
        if (!canceled) setData(result);
      } catch (err) {
        if (!canceled) setError(err.message || "Something went wrong!");
      } finally {
        if (!canceled) setIsLoading(false);
      }
    };

    sendRequest();

    return () => {
      canceled = true;
    };
  }, deps);

  return { data, error, loading: isLoading };
};

export default useHttp;

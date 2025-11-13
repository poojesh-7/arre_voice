import { useState, useEffect, useCallback } from "react";

const useHttp = (apiFn, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);
      try {
        setIsLoading(true);
        const result = await apiFn(...args);
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    },
    [apiFn]
  );

  useEffect(() => {
    if (autoFetch) {
      sendRequest();
    }
  }, []);

  return { data, error, loading: isLoading };
};

export default useHttp;

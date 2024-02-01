import { useState, useEffect } from 'react';

const useFetchData = <T>(fetchFunction: () => Promise<Response>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        const data = await response.json();
        setData(data as T);
      } catch (err: unknown) {
        setError(JSON.stringify(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
};

export default useFetchData;

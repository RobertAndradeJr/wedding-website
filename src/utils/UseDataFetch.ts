/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react';

const UseFetch = (url: string, options: any): any => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      try {
        const opts = { signal, ...options };
        const res = await fetch(url, opts);
        const json = await res.json();
        const items = json.graphql.hashtag.edge_hashtag_to_media.edges;
        setData(items);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    return function cleanup(): void {
      abortController.abort();
    };
  }, [url, options]);
  return { data, error };
};

export default UseFetch;

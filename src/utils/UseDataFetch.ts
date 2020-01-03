/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react';

const UseFetch = (url: string): any => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const opts = { signal };
    fetch(url, opts)
      .then(res => res.json())
      .then(json => setData(json.graphql.hashtag.edge_hashtag_to_media.edges))
      .catch(error => setError(error));
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error };
};

export default UseFetch;

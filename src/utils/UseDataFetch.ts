import { useState, useEffect } from 'react';

interface InstagramResponse {
  data: Array<{}>;
  error: {};
}

const UseFetch = (url: string): InstagramResponse => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async (): Promise<boolean | void> =>
      await fetch(url, { signal: abortController.signal })
        .then(res => res.json())
        .then(({ graphql }) =>
          setData(graphql.hashtag.edge_hashtag_to_media.edges)
        )
        .catch(error => !abortController.signal.aborted && setError(error));
    fetchData();
    return (): void => {
      abortController.abort();
    };
  }, [url]);

  return { data, error };
};

export default UseFetch;

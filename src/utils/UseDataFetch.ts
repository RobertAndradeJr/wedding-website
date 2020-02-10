import { useState, useEffect } from 'react';
import { InstagramResponse, InstaEdge } from '../types/types';

const UseFetch = (url: string): InstagramResponse => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async (): Promise<boolean | void> =>
      await fetch(url, { signal: abortController.signal })
        .then(res => res.json())
        .then(
          ({
            graphql: {
              hashtag: {
                edge_hashtag_to_media: { edges }
              }
            }
          }) => {
            const data = edges.map(({ node }: InstaEdge) => {
              const {
                shortcode,
                id,
                thumbnail_resources: thumbnailResources,
                edge_media_to_caption: edgeMediaToCaption
              } = node;
              const data = {
                id,
                shortcode,
                thumb: thumbnailResources[2].src,
                caption: edgeMediaToCaption?.edges[0]?.node?.text || ''
              };
              return data;
            });
            setData(data);
          }
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

import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importAll = (r: __WebpackModuleApi.RequireContext): any =>
  r.keys().map(r);

export default (): string[] => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const importItems = (): never[] =>
      importAll(
        require.context('../assets/engagement', false, /\.(png|jpe?g|svg)$/)
      );
    setItems(importItems);
  }, []);

  return items;
};

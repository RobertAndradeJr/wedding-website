import { useState, useEffect } from 'react'

const importAll = (r) => r.keys().map(r);

const UseImageLoader = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const importItems = () => importAll(require.context('../assets/engagement', false, /\.(png|jpe?g|svg)$/));
    setItems(importItems)
  }, []);

  return items
};

export default UseImageLoader

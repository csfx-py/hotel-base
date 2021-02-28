import { useEffect, useState } from "react";

function getSavedValue(key, initValue) {
  const savedVal = JSON.parse(localStorage.getItem(key));
  if (savedVal) return savedVal;
  if (initValue instanceof Function) return initValue();
  return initValue;
}

export default function useLocalStorage(key, initValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initValue);
  });

  useEffect(() => {
    if (value) localStorage.setItem(key, JSON.stringify(value));
    else localStorage.removeItem(key);
  }, [value]);

  return [value, setValue];
}

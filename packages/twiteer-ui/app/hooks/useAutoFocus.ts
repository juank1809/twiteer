import { useEffect, useRef } from "react";

const useAutoFocus = () => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  return inputRef;
};

export default useAutoFocus;

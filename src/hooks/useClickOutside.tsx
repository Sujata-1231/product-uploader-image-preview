import { useEffect, RefObject } from "react";

/**
 * A custom hook that triggers a callback when a click is detected outside a specified element.
 */
export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  close: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpen, close]);
}

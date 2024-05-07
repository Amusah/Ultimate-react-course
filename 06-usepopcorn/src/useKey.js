import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      const eventCallback = (e) => {
        if (e.code.toLowerCase() === key.toLowerCase()) action();
      };
      document.addEventListener("keydown", eventCallback);

      return () => {
        document.removeEventListener("keydown", eventCallback);
      };
    },
    [action, key]
  );
}

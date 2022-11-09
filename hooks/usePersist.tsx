import { useState, useEffect } from "react";

function usePersist() {
  const [persist, setPersist] = useState<string | boolean>(JSON.parse(localStorage.getItem("persist")!) || false);

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
}

export default usePersist;

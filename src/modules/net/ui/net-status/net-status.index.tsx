import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const NetStatus: React.FC = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    function changeStatus() {
      setStatus(navigator.onLine);
    }

    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
    return () => {
      window.removeEventListener("online", changeStatus);
      window.removeEventListener("offline", changeStatus);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "fixed bottom-0  w-screen bg-primary p-2 flex justify-center  items-center rounded-t-lg text-neutral dark:text-neutral-content",
        !status && "bg-secondary text-neutral-content dark:text-neutral",
        status && "animate-bounceY"
      )}
    >
      {status
        ? "Conectado"
        : "Parece que você está offline, tente ver sua conexão com a internet."}
    </div>
  );
};

export default NetStatus;

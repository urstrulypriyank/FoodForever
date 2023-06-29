import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const handleOnline = () => {
    setIsOnline(true);
    console.log("setTrue");
  };
  const handleOffline = () => {
    setIsOnline(false);
    console.log("SetFalse");
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
export default useOnline;

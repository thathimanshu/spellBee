import { useState, useEffect } from "react";

function Notification() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [exists, setExists] = useState("");
  const [point, setPoint] = useState("");

  useEffect(() => {
    const handleNotification = (e) => {
      const { text, exists,point } = e.detail;
      setText(text);
      setExists(exists);
      setPoint(point);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    };

    // Listen for the custom event
    window.addEventListener("showNotification", handleNotification);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("showNotification", handleNotification);
    };
  }, []);

  return (
    <div className={`fixed rounded-md top-[23vh] z-10 ${exists?'bg-green-400 dark:bg-green-700' : 'bg-black dark:bg-slate-700'} px-2`}>
      {show && (
        <div className="text-white dark:text-white">
          {text} {point && `+${point}`}
        </div>
      )}
    </div>
  );
}

export default Notification;

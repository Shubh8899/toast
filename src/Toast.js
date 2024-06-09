import { AlertCircle, CheckCircle, Info, X, XCircle } from "react-feather";
import { useToast } from "./useToast";
import { useEffect, useRef } from "react";

const toastTypes = {
  success: {
    icon: <CheckCircle className="text-green-500 green" />,
  },
  warning: {
    icon: <AlertCircle className="text-yellow-500" />,
  },
  info: {
    icon: <Info className="text-blue-500" />,
  },
  error: {
    icon: <XCircle className="text-red-500" />,
  },
};

const Toast = ({ message, type, id }) => {
  const { icon } = toastTypes[type];
  const progressBarClass = {
    success: "bg-green-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  }[type];
  const toast = useToast();
  const timerID = useRef(null);
  const progressRef = useRef(null);
  const handleDismiss = () => {
    toast.remove(id);
  };
  useEffect(() => {
    timerID.current = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => {
      clearTimeout(timerID.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timerID.current);
    progressRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const remainingTime =
      (progressRef.current.offsetWidth /
        progressRef.current.parentElement.offsetWidth) *
      4000;

    progressRef.current.style.animationPlayState = "running";

    timerID.current = setTimeout(() => {
      handleDismiss();
    }, remainingTime);
  };

  return (
    <div className="flex justify-between bg-white shadow-md rounded-md p-4 relative w-80 overflow-hidden" 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>{icon}</span>
      <p>{message}</p>
      <button className="text-sm font-normal mx-3" onClick={handleDismiss}>
        <X className="bg-white" />
      </button>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <div
          ref={progressRef}
          className={`h-full ${progressBarClass} animate-progress-bar`}
        ></div>
      </div>
    </div>
  );
};

export default Toast;

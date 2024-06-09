import Toast from "./Toast";

const positionClasses = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
};

const ToastsContainer = ({ toasts, position = "top-left" }) => {
  return (
    <div
      className={`flex flex-col-reverse gap-3 z-[9999] fixed top-4 right-4 ${positionClasses[position]}`}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastsContainer;

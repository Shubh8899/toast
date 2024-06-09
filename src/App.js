import { useToast } from "./useToast";

function App() {
  const toast = useToast();

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="flex flex-col justify-center p-4 bg-white shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg gap-5 z-[9999]">
        <button
          className="border-none bg-green-500 p-4 md:p-6 rounded-lg text-white text-sm md:text-base"
          onClick={() => toast.success("Success toast notification")}
        >
          Success
        </button>
        <button
          className="border-none bg-blue-500 p-4 md:p-6 rounded-lg text-white text-sm md:text-base"
          onClick={() => toast.info("Info toast notification")}
        >
          Info
        </button>
        <button
          className="border-none bg-yellow-500 p-4 md:p-6 rounded-lg text-white text-sm md:text-base"
          onClick={() => toast.warning("Warning toast notification")}
        >
          Warning
        </button>
        <button
          className="border-none bg-red-500 p-4 md:p-6 rounded-lg text-white text-sm md:text-base"
          onClick={() => toast.error("Error toast notification")}
        >
          Error
        </button>
      </div>
    </div>
  );
}

export default App;

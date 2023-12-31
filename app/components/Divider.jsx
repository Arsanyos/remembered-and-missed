const Divider = ({ text }) => {
  return (
    <div className="relative w-[100%]">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500">
          {typeof text === "undefined" ? " " : text}
        </span>
      </div>
    </div>
  );
};
export default Divider;

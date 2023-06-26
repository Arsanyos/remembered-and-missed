const Button = ({ text, width }) => {
  return (
    <button
      style={{
        width: width ? width : "176px",
      }}
      className={`text-white w-full p-3 sm:p-[5px] rounded-[25px] bg-[#5C5470] flex items-center justify-center gap-4`}
    >
      {text}
    </button>
  );
};

export default Button;

const Button = ({ text }) => {
  return (
    <button
      className={`text-white w-full sm:w-[176px] p-3 sm:p-[5px] rounded-[25px] bg-[#5C5470] flex items-center justify-center gap-4`}
    >
      {text}
    </button>
  );
};

export default Button;

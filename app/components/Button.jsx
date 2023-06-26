const Button = ({ text, width, type }) => {
  return (
    <button
      style={{
        width: width ? width : "176px",
        background:
          type === "filled" || undefined || null ? "#5C5470" : "transparent",
        border:
          type === "filled" || undefined || null ? "none" : "1px solid #5C5470",
        color: type === "filled" || undefined || null ? "#FFFFFF" : "#5C5470",
      }}
      className={`text-white w-full p-3 sm:p-[5px] rounded-[25px] bg-[#5C5470] flex items-center justify-center gap-4`}
    >
      {text}
    </button>
  );
};

export default Button;

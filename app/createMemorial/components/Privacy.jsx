import "../style.css";
import Image from "next/image";
import {AiOutlineArrowRight} from 'react-icons/ai'
const PrivacyComp = ({ curr }) => {
  return (
    <div
      style={{
        display: curr === 3 ? "block" : "none",
      }}
      className="flex flex-col h-[100%] w-[100%]"
    >
      <p className="font-[Lora] text-left font-normal text-[25px] text-[#5C5470] tracking-[0.2px] leading-[45px]">
        Would like to share your memorial with others, or keept it private:
      </p>
      <div className="flex flex-col gap-12 w-[60%] py-10 px-16">
        <div className="flex gap-4">
          <input
            className="w-[28px]"
            type="radio"
            id="privacy-radio"
            name="visibility"
            value="visible"
          />
          <div className="flex flex-col gap-2 w-[80%]">
            <label
              className="text-[#5C5470] text-[20px] font-semibold font-[Montserrat] leading-[18px]"
              for="html"
            >
              Visible only to me
            </label>
            <p className="text-[#5C5470] text-[16px] font-normal leading-[29.5px]">
              Choose this option if you do not want the memorial to be visible
              to others at this time.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            id="privacy-radio"
            name="visitors"
            value="all-visitor"
          />
          <div className="flex flex-col gap-2 w-[80%]">
            <label
              className="text-[#5C5470] text-[20px] font-semibold font-[Montserrat] leading-[18px]"
              for="html"
            >
              All visitors can view and contribute
            </label>
            <p className="text-[#5C5470] text-[16px] font-normal leading-[29.5px]">
              Recommended for most memorials. This option allows easy access to
              the website and facilitates collaboration.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="privacy-radio"
            name="visitors"
            value="all-visitor"
          />
          <div className="flex gap-1">
            <p className="text-[18px] text-[#5C5470] font-[Montserrat] font-normal leading-[28px]">
              I agree to
            </p>
            <p className="text-[18px] text-[#5C5470] font-[Montserrat] font-semibold leading-[28px]">
              Term of Use
            </p>
          </div>
        </div>
        <button
          type={curr === 3 ? "submit" : "button"}
          onClick={() => {
            setCurr(curr + 1);
          }}
          className="w-[260px] p-[10px] text-[#FFFFFF] bg-[#5C5470] rounded-[25px] flex items-center justify-center gap-6"
        >
          Countniue to memorial{" "}
          <AiOutlineArrowRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default PrivacyComp;

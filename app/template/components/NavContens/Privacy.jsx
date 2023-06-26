import "./styles.css";
import Image from "next/image";
const Privacy = () => {
  return (
    <div className="w-[80%] h-auto shadow-customFigma rounded-[25px] flex flex-col gap-4 py-6 px-6">
      <p className="uppercase text-[#5C5470] text-[25px] font-[Lora] leading-[46px] font-semibold">
        Privacy & Notification
      </p>
      <div className="px-12">
        <p className="font-Lora text-left font-normal font-[Lora] text-[25px] text-[#5C5470] tracking-[0.2px] leading-[45px]">
          Privacy Options
        </p>
        <div className="flex flex-col gap-12 lg:w-[90%] px-12 mt-8">
          <div className="flex gap-4">
            <input
              className="w-4 h-4"
              type="radio"
              id="privacy-radio"
              name="visibility"
              value="visible"
            />
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                htmlFor="html"
              >
                Visible only to me
              </label>
              <p className="text-[#5C5470] text-base font-[300] leading-[29.5px]">
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
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                htmlFor="html"
              >
                All visitors can view and contribute
              </label>
              <p className="text-[#5C5470] text-base font-[300] leading-[29.5px]">
                Recommended for most memorials. This option allows easy access
                to the website and facilitates collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-12">
        <p className="font-Lora text-left font-normal font-[Lora] text-[25px] text-[#5C5470] tracking-[0.2px] leading-[45px]">
          Default Notifications
        </p>
        <div className="flex flex-col gap-12 lg:w-[90%] px-12 mt-8">
          <div className="flex gap-4">
            <input
              className="w-4 h-4"
              type="radio"
              id="privacy-radio"
              name="visibility"
              value="visible"
            />
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                htmlFor="html"
              >
                Standard
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                className="w-4 h-4"
                type="radio"
                id="privacy-radio"
                name="visibility"
                value="visible"
              />
              <div className="flex flex-col gap-2 w-full">
                <label
                  className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                  htmlFor="html"
                >
                  Custom
                </label>
                <p className="text-[#5C5470] text-base font-[300] leading-[29.5px]">
                  Recommended for most memorials. This option allows easy access
                  to the website and facilitates collaboration.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 pl-12">
              <div className="flex items-center gap-2 w-full">
                <input
                  type="radio"
                  id="privacy-radio"
                  name="visitors"
                  value="all-visitor"
                />
                <Image
                  src="/icons/quill-ink.svg"
                  alt="quill-icon"
                  height={40}
                  width={40}
                />
                <label
                  className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                  htmlFor="html"
                >
                  On new posts from other guests
                </label>
              </div>
              <div className="flex items-center gap-2 w-full">
                <input
                  type="radio"
                  id="privacy-radio"
                  name="visitors"
                  value="all-visitor"
                />
                <Image
                  src="/icons/cake-outline.svg"
                  alt="cake-outline-icon"
                  height={40}
                  width={40}
                />
                <label
                  className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                  htmlFor="html"
                >
                  On Marina’s Birthday
                </label>
              </div>
              <div className="flex items-center gap-2 w-full">
                <input
                  type="radio"
                  id="privacy-radio"
                  name="visitors"
                  value="all-visitor"
                />
                <Image
                  src="/icons/carbon_view.svg"
                  alt="carbon-view-icon"
                  height={40}
                  width={40}
                />
                <label
                  className="text-[#5C5470] text-lg font-normal font-Montserrat leading-[18px]"
                  htmlFor="html"
                >
                  On day of passing
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#5C5470] text-center text-[16px] font-[Montserrat] font-semibold">
        Update for all registered guests
      </p>
    </div>
  );
};

export default Privacy;

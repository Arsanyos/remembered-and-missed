import Image from "next/image";
//
import Button from "@/app/components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
const InnerSidebar = () => {
  return (
    <div className="w-[25%] h-[100%] p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2 shadow-customFigma rounded-[8px] flex flex-col items-center py-6">
        <Image
          src="/icons/people.svg"
          alt="invite-people-icon"
          height={100}
          width={100}
        />
        <span className="w-[80%] text-[#5C5470] text-[20px] text-center font-[Lora] font-normal">
          Invite Marina&lsquo;s family and friends
        </span>
        <Button text="Invite" />
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/icons/FB-purple.svg"
            alt="facebook-icon"
            height={20}
            width={20}
          />
          <p className="text-[#5C5470] text-[16px] text-center font-[Montserrat] leading-[25px]">
            Share on Facebook
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 shadow-customFigma rounded-[8px] flex flex-col items-center py-6">
        <span className="text-[#5C5470] text-[20px] text-center font-normal font-[Lora]">
          Notification preferences
        </span>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-evenly gap-4 w-[80%]">
            <Image
              src="/icons/quill-ink.svg"
              alt="quill-icon"
              height={40}
              width={40}
            />
            <Image
              src="/icons/cake-outline.svg"
              alt="cake-outline-icon"
              height={40}
              width={40}
            />
            <Image
              src="/icons/carbon_view.svg"
              alt="carbon-view-icon"
              height={40}
              width={40}
            />
          </div>
        </div>
        <Button text="Manage" />
      </div>
      <div className="flex flex-col gap-4 shadow-customFigma rounded-[8px] flex flex-col items-center py-6">
        <div className="flex flex-col items-center items-center gap-1">
          <Image
            src="/icons/carbon_view.svg"
            alt="carbon-view-icon"
            height={40}
            width={40}
          />
          <p className="text-[#5C5470] text-[20px] text-center font-normal font-[Lora] font-thin">
            203 views
          </p>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-[#5C5470] text-[14px] text-center font-normal font-[Lora]">
            The Website is administered by:
          </span>
          <span className="text-[#5C5470] text-[14px] text-center font-semibold font-[Lora]">
            Michael Bruns
          </span>
          <span className="text-[#5C5470] text-[14px] text-center font-semibold font-[Lora]">
            Becky Bruns
          </span>
        </div>
        <Button text="Contact To Author" />
      </div>
      <div className="flex flex-col gap-4 shadow-customFigma rounded-[8px] flex flex-col items-center py-6">
        <span className="text-[#5C5470] text-[14px] text-center font-normal font-[Lora]">
          Have a Suggestion?
        </span>
        <Button
          text={
            <>
              Contact Us
              <AiOutlineArrowRight />
            </>
          }
        />
      </div>
    </div>
  );
};

export default InnerSidebar;

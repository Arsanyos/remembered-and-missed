import Button from "@/app/components/Button";
import { FiUpload } from "react-icons/fi";
const MusicComp = () => {
  return (
    <div className="w-[80%] h-[22%] shadow-customFigma rounded-[25px] flex flex-col gap-4 py-6 px-6">
      <p className="uppercase text-[#5C5470] text-[16px] font-[Montserrat] leading-[25px]">
        Background playlist
      </p>
      <p className="text-[#5C5470] text-[14px] font-[Montserrat] font-thin leading-[25px]">
        No background Music
      </p>
      <input
        type="select"
        name="email"
        id="email"
        className="block py-4 px-5 bg-[#DEE2E6] rounded-[40px] h-[45px] w-[60%] border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-[#5C5470]-300 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6"
        placeholder="Select a music"
      />
      <div className="flex gap-4">
        <Button
        width="220px"
          type="filled"
          text={
            <>
              <FiUpload />
              Add your own music
            </>
          }
        />
      </div>
    </div>
  );
};
export default MusicComp;

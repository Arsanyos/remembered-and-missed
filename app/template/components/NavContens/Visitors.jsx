import Button from "@/app/components/Button";

const Visitors = () => {
  return (
    <div className="w-[80%] h-[20%] shadow-customFigma rounded-[25px] flex flex-col gap-4 py-6 px-6">
      <p className="text-[#5C5470] text-[16px] font-[Montserrat] leading-[25px]">
        Use this section to view and manage invited guests:
      </p>
      <p className="uppercase text-[#5C5470] text-[25px] font-[Lora] leading-[46px] font-semibold">
        Manage Visitors
      </p>
      <div className="flex gap-4">
        <Button text={`Pending (${0})`} type="filled" />
        <Button text={`Visited (${1})`} type="outlined" />
      </div>
    </div>
  );
};
export default Visitors;

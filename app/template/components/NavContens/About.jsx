import { Fragment } from "react";
const About = () => {
  return (
    <div className="w-[80%] h-fit shadow-customFigma rounded-[25px] flex flex-col gap-4 py-6 px-6">
      <p className="uppercase text-[#5C5470] text-[20px] font-[Lora] font-semibold leading-[46px]">
        About Marina
      </p>
      <p className="text-[#5C5470] text-[16px] font-normal font-[Montserrat] leading-[25px] flex flex-col gap-4">
        <div>
          Marina, longtime Eugene resident, world explorer, and avid
          outdoors-person, passed away peacefully in her home on May 16, 2023.
          She was 87.She grew up with two sisters in the San Gabriel Valley a nd
          graduated from the University of Redlands. In 1957 she married William
          Bruns Jr. with whom she made a family. In her professional career she
          was a risk manager. She is survived by her sister Lois, sons Robert,
          Wayland, David, and Michael, and grandchildren Mariah, Sam, and James.
        </div>

        <div>
          With her young family, Barbara moved five times between the west coast
          and New England, but her heart was captured by the people, climate,
          and mountains of the Pacific Northwest after her arrival in Bellevue,
          Washington in 1966.
        </div>
        <div>
          Marina’s passion for hiking, cycling and skiing flourished in New
          England as her children became independent. She began traveling to
          Europe for backpacking and bike tours, then embarked on more
          adventurous trips to South America and Asia. She reveled in
          experiencing different cultures and religions, especially those of
          Bhutan and Nepal. Her companion during these years was Ralph Heuman
          who was her second husband.
        </div>
      </p>
    </div>
  );
};
export default About;

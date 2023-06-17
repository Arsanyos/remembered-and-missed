import Image from "next/image";
import Logo from "../../public/images/container.svg";
const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4  items-center w-[100%] mt-[5%]">
      <Image
        width={250}
        height={100}
        src="/logo.svg"
        alt="remebered-and-missed"
      />
      <div className="w-[70%] flex flex-col gap-8 items-center ">
        <p className=" w-[70%] text-[45px] text-[#5C5470] text-center leading-[45px] px-18 font-[Lora] font-normal">
          Losing a loved one is incredibly painful, and very personal.
        </p>
        <p className="uppercase text-[#5C5470] font-[Montserrat] font-normal leading-[30px]">
          At RememberedandMissed, we provide a shared, easily-accessible virtual
          space where family members and friends can pay homage to a special
          life while helping each other heal by sharing their feelings, warm
          memories, and words of support.
        </p>
      </div>
      <div className="w-full h-[100%] flex flex-col bg-[url('/images/container.svg')] bg-cover">
        <div className="mt-[250px] flex flex-col items-center gap-16">
          <p className="text-[35px] text-[#FFFFFF] text-center leading-[0.16px] font-normal font-[Lora]">
            Welcome to our memorial website
          </p>
          <p className="w-[70%] text-[#FFFFFF] text-[18px] leading-[26px] font-[Montesrrat]">
            Let me begin by expressing my deepest condolences and gratitude for
            taking the time to visit and explore this special space dedicated to
            honoring the memory of our loved ones.
            <br />
            <br />
            The inspiration for this memorial website started from a deeply
            personal experience - the love and admiration I have for my late
            father. Losing someone so dear to me was an incredibly difficult
            time in my life, as it is for anyone who experiences such a profound
            loss. During the grieving process, I found myself reflecting on the
            memories we shared and the impact he had on everyone`s life.
            <br />
            <br />
            One thing that weighed heavily on my heart was the absence of a
            eulogy from his children during his memorial service. At the time,
            the overwhelming grief and sense of responsibility prevented me from
            delivering a eulogy that truly captured the essence of who my father
            was. It was a missed opportunity to celebrate his life, express my
            love, and share his remarkable journey with others. <br />
            <br /> This regret served as a catalyst for the creation of
            RememberedAndMissed.com. I wanted to ensure that others
            wouldn`&apos;`t have to experience the same regret and sense of
            unfulfilled tribute that I did. I realized that there are countless
            individuals who, for various reasons, are unable to deliver eulogies
            or share their heartfelt sentiments during memorial services. <br />
            <br />
            www.RememberedAndMissed.com serves as a virtual space where
            individuals can contribute their thoughts, memories, stories, and
            even eulogies, paying homage to the remarkable lives that touched
            their hearts. Through the power of shared experiences, this memorial
            website aims to unite individuals who have gone through similar
            grieving journeys. It`&apos;`s a place where we can find solace,
            strength, and inspiration in the memories we hold dear. By coming
            together, we can find healing, support, and a sense of community as
            we navigate the complexities of loss. <br />
            <br /> I hope this memorial website becomes a source of comfort and
            inspiration for all who visit. Whether you`&apos;`re here to
            celebrate the life of a loved one or seek solace during your own
            journey of grief, my wish is that you find peace and healing within
            these virtual walls
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default LandingPage;

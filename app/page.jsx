import Image from "next/image";
//
import People from "../public/icons/GroupPeople.png";
import Heart from "../public/icons/Heart.png";
import Shield from "../public/icons/Shield.png";
import Corona from "../public/icons/corona.png";
//
import Candle from "../public/icons/jam_candle.png";
import Themes from "../public/icons/gridicons.png";
import Gallery from "../public/icons/media.png";
import Setting from "../public/icons/settings.png";
import Song from "../public/icons/Song.png";
import Reply from "../public/icons/reply.png";
//
import SearchBar from "./components/SearchBar";
export default function Home() {
  const stats = [
    {
      value: "230K+",
      title: "MEMORIAL",
    },
    {
      value: "220K+",
      title: "FAMILIES",
    },
    {
      value: "4.8M+",
      title: "TRIBUTES",
    },
    {
      value: "200M+",
      title: "VISITORS",
    },
  ];
  const findMemorialCards = [
    {
      icon: People,
      title: "All Memorials Websites",
    },
    {
      icon: Heart,
      title: "First Responders Memorials",
    },
    {
      icon: Shield,
      title: "Veterans Memorials",
    },
    {
      icon: Corona,
      title: "COVID-19 Memorials",
    },
  ];
  const features = [
    {
      icon: Song,
      title: "BACKGROUND MUSIC",
      content: "Set the emotional tone with meaningful background music.",
    },
    {
      icon: Gallery,
      title: "ADD MEDIA",
      content:
        "Share tribute with a multimedia experience with videos & photos.",
    },
    {
      icon: Themes,
      title: "45+ THEMES",
      content: "Personalize the memorial site with over 45 captivating themes.",
    },
    {
      icon: Setting,
      title: "Manage Visitors",
      content:
        "Seamlessly manage and interact with visitors to the memorial site",
    },
    {
      icon: Candle,
      title: "Send Tributes",
      content:
        "Express your love, gratitude, and heartfelt tributes by messages.",
    },
    {
      icon: Reply,
      title: "Share Moments",
      content: "Share the extraordinary life stories of your beloved ones.",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div
        id="hero-section"
        className="flex justify-center h-[65vh] sm:h-[75vh] md:h-[85vh]"
      >
        <div
          id="hero-section-content"
          className="absolute flex flex-col items-center justify-center gap-2 pt-28 w-full sm:w-2/3 md:w-1/2 lg:w-[900px] mx-auto"
        >
          <h1 className="font-[Lora] leading-normal text-[#FFFFFF] text-center w-full sm:w-[600px] md:w-auto text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            PRESERVE AND SHARE MEMORIES OF YOUR
          </h1>
          <p className="text-center text-3xl text-[#FFFFFF] sm:text-4xl md:text-5xl lg:text-6xl font-400">
            Loved ones
          </p>
          <p className="text-center leading-[27px] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-600 font-[Lora] w-full sm:w-[600px] md:w-auto">
            Join our compassionate community as we weave together the threads of
            remembrance, sharing stories, photos, and tributes that celebrate
            the legacies that continue to inspire us.
          </p>
          <button className="w-full sm:w-[279px] h-[52px] rounded-[25px] text-[#5C5470] bg-[#FFFFFF] font-bold mt-6 ">
            Create A Memorial
          </button>
        </div>
        <Image
          width={1900}
          height={200}
          src="/images/Image-Hero-section.png"
          alt="image-hero-section"
        />
      </div>
      <div
        id="stats-container"
        className="w-full h-[20vh] bg-[#F5F5F5] flex flex-wrap justify-evenly items-center"
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-center text-4xl text-[#5C5470] font-semibold font-Montserrat">
              {item.value}
            </p>
            <p className="text-center text-base text-[#5C5470] font-normal font-Montserrat">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div
        id="find-a-memorial"
        className="flex flex-col items-center gap-10 py-10 w-full h-auto bg-[#5C5470]"
      >
        <p className="text-[#FFFFFF] text-center text-3xl tracking-wide font-[Lora] font-semibold">
          FIND A MEMORIAL
        </p>
        <div className="w-full sm:w-[75%] md:w-[50%] h-auto flex flex-wrap items-center justify-center gap-7">
          {findMemorialCards.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[40%] h-[85px] bg-[#FFFFFF] rounded-[25px] flex items-center justify-center gap-5"
            >
              <Image width={40} height={40} src={item.icon} alt={item.title} />
              <p className="text-lg text-center text-[#5C5470] font-[Inter] font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-[40%] flex justify-center">
          <SearchBar />
        </div>
      </div>
      <div id="features-container" className="w-full h-auto bg-[#FFFFFF]">
        <p className="text-center text-3xl text-[#5C5470] font-[Lora] font-semibold tracking-wide leading-8 mt-10">
          Remember Forever, Share the Missed
        </p>
        <div className="flex flex-col md:flex-row items-center p-10 pb-0">
          <div
            id="features"
            className="w-full md:w-[60%] h-[30%] flex flex-wrap gap-8"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-center w-full md:w-[320px] h-[100px]"
              >
                <Image
                  width={50}
                  height={50}
                  src={item.icon}
                  alt={item.title}
                />
                <div className="flex flex-col items-between">
                  <h5 className="text-xl text-[#5C5470] font-bold font-[Montserrat]">
                    {item.title}
                  </h5>
                  <p className="text-[#5C5470] font-[Montserrat] font-extralight">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            id="ipad-mockup-container"
            style={{
              border: "15px solid black",
              borderBottom: "none",
              borderRadius: "18px 18px 0px 0px",
            }}
            className="w-full md:w-[40%] border-solid mt-8 md:mt-0"
          >
            <Image
              width={800}
              height={50}
              src="/images/iPadMockup.png"
              alt="ipad-mockup"
            />
          </div>
        </div>
      </div>
      <div
        id="testimonials-section"
        className="w-full bg-[#5C5470] flex flex-col items-center pb-5 gap-12"
      >
        <p className="text-center text-3xl text-[#FFFFFF] font-[Lora] font-semibold tracking-wide leading-8 mt-10">
          TESTIMONIALS
        </p>
        <div className="w-full md:w-[60%] flex flex-col gap-4 items-start">
          <Image
            width={50}
            height={50}
            src="/icons/Vector.png"
            alt="quotes-icon"
          />
          <p className="font-[Montserrat] font-thin text-lg text-[#FFFFFF] leading-[38px]">
            Thank you - love the Father’s Day themes! So happy to see more
            options! Will send any ideas I come up with! This website has been
            my healing. I come to my dads site and meet with him in my mind.
            Going through our memories together, whenever I want. I tell
            everyone about your great website! Ty!!
          </p>
        </div>
      </div>
      <div
        id="share-memorial-section"
        className="flex flex-col items-center p-10 pb-0"
      >
        <div className="flex flex-col items-center gap-4 w-full md:w-[70%]">
          <p className="text-center text-3xl text-[#5C5470] font-[Lora] font-semibold tracking-wide leading-8">
            WANT TO SHARE A MEMORIAL OF YOUR
          </p>
          <p className="text-center text-3xl text-[#5C5470] sm:text-5xl font-400">
            Loved Ones
          </p>
        </div>
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-thin text-lg text-[#5C5470] leading-6 text-gray-900"
            >
              SHARE MEMORIES OF
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="block h-10 py-4 px-5 bg-[#DEE2E6] rounded-full w-full border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-red-300 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6"
                aria-invalid="true"
                aria-describedby="email-error"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-thin text-invis text-lg text-transparent leading-6 text-gray-900"
            >
              NONE
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="block h-10 py-4 px-5 bg-[#DEE2E6] rounded-full w-full border-0 py-1.5 pr-10 text-red-900 ring-1 ring-transparent placeholder:text-red-300 focus:ring-2 focus:ring-transparent sm:text-sm sm:leading-6"
                aria-invalid="true"
                aria-describedby="email-error"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

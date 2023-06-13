import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div id="hero-section" className="flex justify-center h-[65vh] sm:h-[85vh]">
        <div
          id="hero-section-content"
          className="absolute flex flex-col items-center justify-center gap-2 pt-28 w-[900px]"
        >
          <h1 className="font-[Lora] leading-normal text-[#FFFFFF] text-center w-[400px] sm:w-[600px] lg:w-auto text-[20px] sm:text-[55px]">
            PRESERVE AND SHARE MEMORIES OF YOUR
          </h1>
          <p className="text-center text-[30px] text-[#FFFFFF] sm:text-[50px] font-400">Loved ones</p>

          <p className="text-center leading-[27px] text-white text-[16px] sm:text-[22px] font-600 font-[Lora] w-[350px] sm:w-[600px]">
            Join our compassionate community as we weave together the threads of
            remembrance, sharing stories, photos, and tributes that celebrate
            the legacies that continue to inspire us.
          </p>
          <button className="w-[279px] h-[52px] rounded-[25px] text-[#5C5470] bg-[#FFFFFF] font-bold mt-6 ">
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
    </main>
  );
}

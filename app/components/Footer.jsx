import Image from "next/image";
//
import Twitter from "../../public/icons/twitter.png";
import Facebook from "../../public/icons/facebook.png";
import Insta from "../../public/icons/Insta.png";

const Footer = () => {
  const footerLinks = [
    "Memorial website",
    "Term Of Use",
    "Privacy Policy",
    "Contact Us",
  ];
  const footerSocialLinksIcon = [
    "/icons/Insta.png",
    "/icons/twitter.png", 
    "/icons/facebook.png",
  ];
  
  return (
    <div className=" w-[100%] bg-[#5C5470] flex flex-wrap gap-4 justify-around  items-center py-2">
      <p className="text-[12px] w-[150px] font-normal text-center text-[#FFFFFF]">Copyright © 2023 Remebered and missed All rights reserved</p>
      <div className="flex gap-4">
        {footerLinks.map((item, index) => {
          return <p className="text-[12px] text-[#FFFFFF] text-center" key={index}>{item}</p>;
        })}
      </div>
      <div className="flex gap-4">
        <Image width={20} height={20} src="/icons/TW.svg" alt="social-icon" />

        <Image width={20} height={20} src="/icons/FB.svg" alt="social-icon" />

        <Image
          width={20}
          height={20}
          src="/icons/Vector.svg"
          alt="social-icon"
        />
      </div>
    </div>
  );
};

export default Footer;

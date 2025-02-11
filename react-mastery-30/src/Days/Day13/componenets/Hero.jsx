import React from "react";
import HeroProductCover from "./HeroProductCover";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 w-[95%] m-auto">
        <div className="left w-full md:w-[50%] text-center md:text-left">
          <h2 className="font-bold text-[2.3rem]">Buy Insurance,</h2>
          <h3 className="text-[#ea5400] text-[2rem]">Simple and Easy |</h3>

          <div className="hero-content mt-4 md:mt-0">
            <p className="text-base leading-6">
              We are a professional organization with a dedicated team of
              qualified insurance professionals, committed to meeting the
              diverse insurance and risk management needs of clients nationwide.
              Our team specializes in providing customized solutions for
              individuals and businesses across various sectors, including life,
              health, home, and business insurance. We understand that every
              client has unique requirements, and we work closely with them to
              identify the best strategies to mitigate risks and protect their
              assets. With a focus on integrity, transparency, and customer
              satisfaction, we offer expert guidance and support, ensuring that
              our clients receive comprehensive coverage tailored to their
              specific needs.
            </p>
          </div>
        </div>
        <div className="right mt-6 md:mt-0">
          <img
            src="https://www.notioninsurance.com/images/hero-banner.jpg"
            alt="heroImg"
            className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="ProductInsuranceContainer w-[90%] md:w-[80%] m-auto mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
        <HeroProductCover />
      </div>
    </>
  );
};

export default Hero;
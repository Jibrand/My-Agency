"use client";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [userCountry, setUserCountry] = useState(""); // Store user's country

  useEffect(() => {
    fetch("https://ipinfo.io?token=a2269ce060b37b")
      .then((response) => response.json())
      .then((data) => {
        const country = data.country;
        setUserCountry(country);
        console.log(userCountry);
      })
      .catch((error) => {
        console.error("Error fetching user's country:", error);
      });
  }, []);

  const renderPricingTables = () => {
    if (userCountry === "PK") { // Check if user is from Pakistan
      return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <PricingBox
          packageName="Lite"
          price={isMonthly ? " Rs.5000" : " Rs.5000"}

          subtitle="Start with a very basic package to showcase your business on the internet"
        >

          <OfferList text="Simple and Eye-catchy design" status="active" />
          <OfferList text="Free Logo Design" status="active" />
          <OfferList text="Blogs" status="active" />
          <OfferList text="Newsletter" status="active" />
          <OfferList text="Free 1 month service for website" status="active" />
          <OfferList text="SEO" status="inactive" />
          <OfferList text="Premim Tools/Themes" status="inactive" />
          <OfferList text="Ecommerce Funcionility" status="inactive" />
          <OfferList text="Payment integration" status="inactive" />
          <OfferList text="Adsense Ads System" status="inactive" />
        </PricingBox>
        <PricingBox
          packageName="Basic"
          price={isMonthly ? " Rs.10000" : " Rs.10000"}
          subtitle="Open your brand new Online store with all the Ecommerce Functionility"
        >
          <OfferList text="Simple and Eye-catchy design" status="active" />
          <OfferList text="Free Logo Design" status="active" />
          <OfferList text="Blogs" status="active" />
          <OfferList text="Newsletter" status="active" />
          <OfferList text="Free 3 month service for website" status="active" />
          <OfferList text="SEO" status="active" />
          <OfferList text="Premim Tools/Themes" status="active" />
          <OfferList text="Ecommerce Funcionility" status="active" />
          <OfferList text="Payment integration" status="active" />
          <OfferList text="Adsense Ads System" status="inactive" />
        </PricingBox>
        <PricingBox
          packageName="Plus"
          price={isMonthly ? " Rs.15000" : " Rs.15000"}
          subtitle="Build a Professional Next-level website to earn from your website, and to grow your business to 2x!"
        >
          <OfferList text="Free Logo Design" status="active" />
          <OfferList text="Blogs" status="active" />
          <OfferList text="Newsletter" status="active" />
          <OfferList text="Free 5 month service for website" status="active" />
          <OfferList text="SEO" status="active" />
          <OfferList text="Premim Tools/Themes" status="active" />
          <OfferList text="Ecommerce Funcionility" status="active" />
          <OfferList text="Payment integration" status="active" />
          <OfferList text="Adsense Ads System" status="active" />
        </PricingBox>
      </div>
      );
    } else {
      return (
        // Render different pricing tables for other countries
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <PricingBox
          packageName="Lite"
          price={isMonthly ? "$800" : "$800"}

          subtitle="Start with a very basic package to showcase your business on the internet"
        >

          <OfferList text="Simple and Eye-catchy design" status="active" />
          <OfferList text="Free Logo Design" status="active" />
          <OfferList text="Blogs" status="active" />
          <OfferList text="Newsletter" status="active" />
          <OfferList text="Free 1 month service for website" status="active" />
          <OfferList text="SEO" status="inactive" />
          <OfferList text="Premim Tools/Themes" status="inactive" />
          <OfferList text="Ecommerce Funcionility" status="inactive" />
          <OfferList text="Payment integration" status="inactive" />
          <OfferList text="Adsense Ads System" status="inactive" />
        </PricingBox>
        <PricingBox
          packageName="Basic"
          price={isMonthly ? "$1500" : "$1500"}
          subtitle="Open your brand new Online store with all the Ecommerce Functionility"
        >
          <OfferList text="Simple and Eye-catchy design" status="active" />
          <OfferList text="Free Logo Design" status="active" />
          <OfferList text="Blogs" status="active" />
          <OfferList text="Newsletter" status="active" />
          <OfferList text="Free 3 month service for website" status="active" />
          <OfferList text="SEO" status="active" />
          <OfferList text="Premim Tools/Themes" status="active" />
          <OfferList text="Ecommerce Funcionility" status="active" />
          <OfferList text="Payment integration" status="active" />
          <OfferList text="Adsense Ads System" status="inactive" />
        </PricingBox>
        <PricingBox
          packageName="Plus"
          price={isMonthly ? "$3000" : "3000"}
          subtitle="Build a Professional Next-level website to earn from your website, and to grow your business to 2x!"
        >
          <OfferList text="Free Logo Design" status="active" />
          <OfferList text="Blogs" status="active" />
          <OfferList text="Newsletter" status="active" />
          <OfferList text="Free 5 month service for website" status="active" />
          <OfferList text="SEO" status="active" />
          <OfferList text="Premim Tools/Themes" status="active" />
          <OfferList text="Ecommerce Funcionility" status="active" />
          <OfferList text="Payment integration" status="active" />
          <OfferList text="Adsense Ads System" status="active" />
        </PricingBox>
      </div>
      );
    }
  };


  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="We deal in a Professional work system, Please select the package to start a new Journey with us."
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        {renderPricingTables()}
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

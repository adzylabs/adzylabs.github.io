"use client ";

import Image from "next/image";
import React from "react";
import canada_loca from "../../../../public/fotter/canada_loca.webp";
import usa_loca from "../../../../public/fotter/usa_loca.webp";
import usa_loca_red from "../../../../public/fotter/usa_loca_red.webp";
import mob_foot from "../../../../public/fotter/foot_1.webp";
import mob_foot1 from "../../../../public/fotter/foot_2.webp";
import canada_loca_red from "../../../../public/fotter/canada_loca_red.webp";
import Link from "next/link";
import Logo from "../logo";
import footer_bg from "../../../../public/landingpage_template/footer_bg.webp";
import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";

const Footer = ({ landing, btn_bg_color }: any) => {
  return (
    <>
      <nav
        className={`h-auto relative bg-[#080808] overflow-hidden rounded-t-[4.8vw] w-full  `}
      >
        {/* <Image
          src={footer_bg}
          alt="footer bg"
          className="absolute z-[5] sm:hidden top-0 left-0 w-full h-fit"
        /> */}
        <div
          className={`w-full h-auto  z-[10]  sm:px-[3.5vw] px-[2.7vw]  py-[2.7vw] flex flex-col gap-[2vw] ${
            !landing ? "sm:gap-[12vw]" : "sm:gap-[2vw]"
          } `}
        >
          <div className="sm:pt-[6vw]">
            <Logo />
          </div>
          {!landing && (
            <Link
              href={"contact"}
              className="nova hidden sm:block z-[10]   sm:text-[3vw] font[900]  sm:rounded-[9.75vw] sm:px-[15vw] w-fit sm:py-[4vw] bg-[#D01717] sm:text-white hover:bg-[#920808]"
            >
              Work with us <i className="bi bi-arrow-right"></i>
            </Link>
          )}

          {/* the second part of the footer */}
          <div className="w-full z-[10]  h-auto flex justify-between  items-center sm:items-start  sm:flex-col  ">
            {/* locations */}
            <div className=" sm:order-2 flex flex-col   sm:py-[10vw]  h-auto gap-[1.7vw] w-full inter sm:gap-[10vw]   sm:mb-[1vw]">
              <p className="inter font-[500] sm:text-[4vw] text-[1.6vw] capitalize text-white">
                Our Locations
              </p>
              {/* now actual locations */}
              <div className="w-auto h-auto z-[10]  flex gap-[2.13vw] justify-start sm:justify-between items-end  text-[0.93vw] sm:mt-[5vw]">
                <div className="w-[9.1vw] h-[8vw] sm:w-[40vw]  relative">
                  <Image
                    priority
                    src={usa_loca}
                    alt="canada location"
                    className="w-full h-fit absolute  sm:hidden z-[40] bottom-0 left-0"
                  />
                  {/* mobile image */}
                  <Image
                    priority
                    src={mob_foot1}
                    alt="canada location"
                    className="w-full h-fit hidden sm:block absolute z-[40] bottom-0 left-0 "
                  />

                  {/* destip image */}
                  <Image
                    priority
                    src={usa_loca_red}
                    alt="canada location"
                    className="w-full h-fit sm:hidden absolute bottom-[-0.3vw] transistion  opacity-0 duration-[0.7s] hover:opacity-[1] z-[50] bottom-0 left-[0.07vw]
"
                  />
                </div>
                <div className="w-[0.07vw] h-[5.13vw] sm:h-[15vw] bg-[#838383] sm:hidden "></div>
                <div className="flex flex-col gap-[0.3vw] sm:text-[2.5vw] sm:text-end ">
                  <p className="inter text-[1.2vw] sm:text-[3.25vw] font-[700] capitalize text-white">
                    UAE
                  </p>
                  <p className="text-[white]">
                    <span className="text-[#838383]"></span> 317 George St, 3rd
                    Floor <br />
                    Dubai , UAE , 08901
                  </p>

                  <p className="text-[white]">
                    <span className="text-[#838383]">Email</span>{" "}
                    support@adzylabs.com
                  </p>
                </div>
              </div>

              <div className="w-auto h-auto    flex gap-[2.13vw] justify-start items-end text-[0.93vw] sm:text-[3vw] sm:mr-0 sm:justify-between">
                <div className="w-[9.1vw] h-[8vw] sm:w-[40vw]  relative ">
                  <Image
                    priority
                    src={canada_loca}
                    alt="canada location"
                    className="w-full h-fit sm:hidden absolute z-[40] bottom-0 left-0 "
                  />
                  <Image
                    priority
                    src={mob_foot}
                    alt="canada location"
                    className="w-full h-fit hidden sm:block absolute z-[40] bottom-0 left-0 "
                  />
                  <Image
                    priority
                    src={canada_loca_red}
                    alt="canada location"
                    className="w-full h-fit sm:hidden transistion opacity-0 duration-[0.7s] hover:opacity-[1] absolute z-[50] bottom-0 left-0"
                  />
                </div>
                <div className="w-[0.07vw] h-[5.13vw] sm:h-[15vw] bg-[#838383] sm:hidden"></div>
                <div className="flex flex-col gap-[0.3vw] sm:text-[2.5vw] sm:text-end ">
                  <p className="inter text-[1.2vw] sm:text-[3.25vw] font-[700] capitalize text-white">
                    INDIA
                  </p>
                  <p className="text-[white]">
                    <span className="text-[#838383]"></span> 6th Cross Street
                   George Town, <br /> TN, 600001, India
                  </p>

                  <p className="text-[white]">
                    <span className="text-[#838383]">Email</span>{" "}
                    support@adzy.in
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-fit h-auto flex gap-[2vw]  flex-col  sm:w-[53vw]">
              <div className=" sm:order-1 sm:my-[10vw]  p-[28.15px] sm:p-[4vw] min-w-fit  sm:w-full rounded-[2.6vw] sm:rounded-[3.5vw] bg-[#121212]  flex justify-between   capitalize  ">
                <div className="  flex flex-col gap-[10px] sm:gap-[2.25vw] mr-[4vw] w-full sm:w-[35vw]   h-auto  text-[#E4E4E4] text-[0.93vw] sm:text-[3vw]  font-[400]">
                  <p className="text-[1.3vw] sm:text-[3.5vw] text-white nova font-[700]">
                    Discover
                  </p>
                  <Link href="/" className="hover:text-white">
                    home
                  </Link>
                  <Link href="services" className="hover:text-white">
                    our services
                  </Link>
                  <Link href="about" className="hover:text-white">
                    about us
                  </Link>
                  <Link href="works" className="hover:text-white">
                    our works
                  </Link>

                  <Link href="contact" className="hover:text-white">
                    contact us
                  </Link>
                </div>
                {/* mail us and folllow us section */}
              </div>

              {/* the contact us button section on the footer */}
              {!landing ? (
                <Link
                  href={"contact"}
                  className="nova  text-[1.3vw] font[900] sm:hidden rounded-[39px] px-[3vw] py-[1vw] bg-[#D01717] text-center text-white hover:bg-[#920808]"
                >
                  Work with us <i className="bi bi-arrow-right"></i>
                </Link>
              ) : (
                <button
                  // href={"contact"}
                  onClick={() => {
                    scrollTo_calendy();
                  }}
                  style={{ backgroundColor: btn_bg_color ? btn_bg_color : "" }}
                  className="nova  text-[1.3vw] font[900] sm:hidden rounded-[39px] px-[3vw] py-[1vw] bg-[#D01717] text-center text-white  hover:opacity-[70%]  "
                >
                  Work with us <i className="bi bi-arrow-right"></i>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-[0.03vw] bg-[#838383]"></div>
        {/* the copyright section */}
        <div className="w-full h-[2.13vw] sm:h-auto sm:flex-col sm:gap-[4vw] px-[2.7vw]  py-[2.7vw] flex justify-between items-center sm:text-opacity-[60%]">
          <p className="text-[#FFFFFF] sm:text-opacity-[60%] inter font-[400] text-[0.821vw] sm:text-[3vw] ">
            2025 Adzy Labs. All right reserved.
          </p>

          <div className="text-white capitalize text-[0.821vw] sm:text-[3vw] sm:text-opacity-[60%] flex gap-[1.4vw] sm:gap-[4vw]">
            <Link
              href="privacy"
              className="underline underline-offset-2  hover:text-[#cfcece]"
            >
              Privacy Policy
            </Link>
            <Link
              href="terms"
              className="underline underline-offset-2  hover:text-[#cfcece]"
            >
              Terms of Service
            </Link>
          </div>
        </div>{" "}
      </nav>
    </>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import circle from "../../assets/hero/circle.svg";
import card from "../../assets/hero/card.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } }, // Stagger effects for sequential entrance
  };

  const textVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        ease: "easeInOut",
      }, // Use easeInOut easing function
    },
  };

  const buttonVariants = {
    hidden: { x: 1000, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        ease: "easeInOut",
      }, // Use easeInOut easing function
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center mx-2 xss:mx-4 xs:mx-6  sm:mx-8 md:mx-1  xl:left-[10rem] 2xl:left-[10rem]  text-white z-40 text-2xl left-0 right-0  md:right-[16rem]  lg:right-[27rem] xl:right-[40rem]  xl:top-[18rem]   md:text-left sm:text-4xl   leading-loose absolute top-24  lg:top-[16rem] md:top-[10rem] md:left-8  lg:left-10"
      >
        <motion.div variants={textVariants} className="leading-[2] self-start">
          <p> Transfer globally, finance </p>
          <div className="flex items-center">
            <span className="relative  sm:w-[20rem] flex">
              <p>locally</p>
              <img
                src={circle}
                alt=""
                className="object-contain w-36 sm:w-[13rem] sm:left-[6.3rem] sm:top-[0.2rem] top-[0.1] left-[4.2rem] md:w-[13.5rem] md:left-[6.5rem] md:top-0  absolute z-[60]"
              />
              <p className="relative left-1"> with ease</p>
            </span>
          </div>
        </motion.div>
        <motion.p
          variants={textVariants}
          className="text-[1rem] self-start w-full sm:w-[22rem] font-medium md:w-[28rem] leading-[1.7] mt-4 md:mt-4 sm:mt-3"
        >
          Make international transactions with ease. Get money across to family,
          friends, and business partners faster and easier{" "}
        </motion.p>

        <ol
          variants={textVariants}
          className="self-start md:text-sm ml-4 sm:mt-3 md:mt-6 lg:mt-3 sm:text-sm text-xs mt-8 font-light list-disc leading-[2.3]"
        >
          <li>Transfer money online in African currencies</li>
          <li className="mt-3">Payment received in USD, GBP, and EUR </li>
        </ol>
        <img
          src={card}
          alt=""
          className="mx-auto  md:hidden    mt-10 lg:mt-5   object-contain   w-[16rem]  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-64    xl:right-24 z-[20]  lg:top-[2rem] xl:top-[20rem] "
        />
        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/send")}
          className="w-[14rem] xss:w-[14rem] xs:w-[16rem] sm:w-[22rem]  md:w-[13rem] md:self-start  mt-5 py-[0.7rem] font-bold xl:mt-6 text-sm rounded-lg bg-[#87ACA3] md:mt-8 lg:mt-3 text-[#262626]"
        >
          Send Money
        </motion.button>
      </motion.div>

      <div>
        <img
          src={card}
          alt=""
          className="absolute object-contain hidden md:block w-[16rem]  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-64 2xl:right-[10rem]    xl:right-24   lg:top-[19rem] xl:top-[18.5rem] z-[60]"
        />
      </div>
    </div>
  );
};

export default Hero;

import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../image/yomi_logo.jpg";
import cat_nav from "../image/cat_nav.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row px-3 py-2 relative md:justify-around border-b-2 border-b-white">
      <Link href="/" className="transition transform hover:scale-110">
        <Image
          src={logo}
          alt="yomi logo"
          className="w-14 h-14 md:w-24 md:h-24 md:mt-2 bg-white rounded-xl"
        />
      </Link>
      <Link href="/about" className="text-xs md:text-lg relative left-5 sm:left-10 md:-left-16 md:top-3 lg:-left-28">
        <Image
          src={cat_nav}
          alt="about yomi"
          className="w-14 h-14 md:w-20 md:h-20 rounded-xl"
        />
        <p className="relative text-xs md:text-base right-5 md:right-0 md:bottom-12 md:left-20">
          요미냥은 누구인가?
        </p>
      </Link>
      <Link href="/yomicosplay" className="text-xs md:text-lg relative left-5 sm:left-24 md:-left-[60px] md:top-3 lg:-left-28">
        <Image
          src={cat_nav}
          alt="yomi cosplay"
          className="w-14 h-14 md:w-20 md:h-20 rounded-xl"
        />
        <p className="relative text-xs md:text-base right-5 md:right-0 md:bottom-12 md:left-20">
          요미냥 코스플레이 모음
        </p>
      </Link>
      <Link href="/dances" className="text-xs md:text-lg relative left-5 sm:left-36 md:-left-14 md:top-3 lg:-left-28">
        <Image
          src={cat_nav}
          alt="yomi reactions"
          className="w-14 h-14 md:w-20 md:h-20 rounded-xl"
        />
        <p className="relative text-xs md:text-base right-5 md:right-0 md:bottom-12 md:left-20">
          요미냥 리액션 모음
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;

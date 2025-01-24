"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";
import top_banner from "./image/top_banner.png";
import yomicos from "./image/button1.png";
import choigane from "./image/button2.png";
import yomitube from "./image/button3.png";
import dearyomi from "./image/button4.png";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
  const audioRef = useRef(null); // 오디오 엘리먼트 참조

  // 재생/정지 버튼 핸들러
  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((err) => {
          console.error("Failed to auto play:", err);
        });
      }
      setIsPlaying(!isPlaying); // 상태 반전
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] lg:mb-5">

        {/* 메인 콘텐츠 */}
        <div className="p-5 m-5 md:p-10 rounded-lg shadow-2xl shadow-purple-700 text-center w-[70%]">
          <div className="mb-4">
            <div className="mb-10 banner1">
              <Link
                href="https://ch.sooplive.co.kr/ise0125"
                className=""
              >
                <Image
                  src={top_banner}
                  alt="Yominyang"
                  className="rounded-xl transition transform hover:scale-110 lg:hover:scale-105"

                />
              </Link>
            </div>
            <h1 className="text-lg sm:text-3xl">
              요미월드에 오신 것을 환영합니다!!
            </h1>
          </div>
          <div className="p-4 mx-auto md:mb-5 w-auto">
            <div className="flex flex-col gap-10 rounded-lg px-4 sm:px-5 justify-center items-center">
              <Link href="/yomicosplay">
                <Image src={yomicos} alt="button" className="button" />
              </Link>
              <Link href="https://www.youtube.com/@Choi_Family17">
                <Image src={choigane} alt="button" className="button" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCDCVEcdl25HqQaqxLd-f7sg">
                <Image src={yomitube} alt="button" className="button" />
              </Link>
              <Link href="/">
                <Image src={dearyomi} alt="button" className="button" />
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

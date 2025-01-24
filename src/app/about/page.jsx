import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import profile from "../image/yomi_profile.jpg";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 items-center justify-center relative font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-center">
          <Image
            src={profile}
            alt="profile"
            className="md:w-1/3 rounded-xl"
          />
        </div>
        <div className="grid grid-rows-1 p-5 gap-4 mt-10 justify-center items-center text-center text-sm lg:text-base shadow-xl shadow-purple-700">
          <h1>이름: 요미냥 / 본명: 이시은</h1>
          <h2>직업: 코스어, 숲tv 스트리머, 인플루언서</h2>
          <p>방송 경력: 2018년 9월 10일 ~ 현재</p>
          <p>대표 코스프레 캐릭터: 아리(리그 오브 레전드), 원신 - 감우/요이미야/닐루, D.Va(오버워치), 샤이릴리(해외 버튜버) 등등등</p>
          <p>특기사항:</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

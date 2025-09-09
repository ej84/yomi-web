"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Slider from "react-slick"; // react-slick을 사용해 carousel 구현
import Footer from "../components/Footer";
import shylily from "../image/shylily.jpg";
import yoimiya from "../image/miya.jpg";
import dva from "../image/d.va.jpg";
import ari from "../image/ari.webp";

const page = () => {

  const image_arrays = [
    ["ganyu.jpg", "yomi_ganyu.jpg", "yomi_ganyu2.jpg", "yomi_ganyu3.jpg", "yomi_miya.jpg", "yomi_miya2.jpg", "yomi_nilou.jpg", "yomi_nilou2.jpg"],
    ["yomi_shylily.jpg", "yomi_shylily2.jpg", "yomi_shylily3.jpg"],
    ["yomi_marin.jpg", "yomi_ari.jpg", "yomi_dva.jpg"],
  ]

  const title_array = ["원신 모음", "샤이릴리", "LOL 아리", "기타"];

  const [selectedImages, setSelectedImages] = useState(null); // 클릭된 이미지 배열
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부

  // 모달 열기
  const handleModalOpen2 = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleModalClose2 = () => {
    setSelectedImages(null);
    setIsModalOpen(false);
  };

  // react-slick 슬라이더 설정
  const sliderSettings = {
    dots: true, // 하단 점 표시
    infinite: true, // 무한 반복
    speed: 500, // 슬라이드 전환 속도 (ms)
    slidesToShow: 1, // 한 번에 표시할 슬라이드 수
    slidesToScroll: 1, // 한 번에 넘길 슬라이드 수
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 속도 (ms)
    arrows: true, // 화살표 표시
  };

  const shorts = [
    {
      link: "https://www.youtube.com/embed/qPf8LG7De8g",
      title: "요미냥 원신 2022 여름축제 V-Log(요이미야)",
      img: yoimiya,
    },
    {
      link: "https://www.youtube.com/embed/GmeQd6BgIrc",
      title: "버튜버 샤이릴리 완벽 재현 코스프레",
      img: shylily,
    },
    {
      link: "https://www.youtube.com/embed/4mj4ethO_N8",
      title: "D.Va By 요미냥 in 2022",
      img: dva,
    },
    {
      link: "https://www.youtube.com/embed/psff7HV9nss",
      title: "요미냥 롤(LOL) 불멸의 전설 아리 코스프레",
      img: ari,
    },
  ];

  const [selectedLink, setSelectedLink] = useState(null);

  const handleModalOpen = (link) => {
    setSelectedLink(link);
  };

  const handleModalClose = () => {
    setSelectedLink(null);
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center min-h-screen p-8 relative sm:p-20 font-[family-name:var(--font-geist-sans)] items-center sm:items-start">
        <div className="p-4 md:p-8 mx-auto">
          <div className="flex justify-center items-center px-2 rounded-lg w-full max-w-md mx-auto shadow-md text-purple">

            <h1 className="text-xl lg:text-3xl">
              요미냥 베스트 코스프레 모음
            </h1>
          </div>


          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-7 md:gap-32 mt-10">
            {image_arrays.map((images, index) => (
              <button
                key={index}
                className="relative w-56 h-44 rounded-md shadow-md transition transform hover:scale-110"
                onClick={() => handleModalOpen2(images)}
              >
                {/* 첫 번째 이미지를 grid에 표시 */}
                <Image
                  src={`/${images[0]}`} // 배열의 첫 번째 이미지
                  alt={`Preview ${index}`}
                  width={224}
                  height={176}
                  className="w-full h-full rounded-xl object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-semibold rounded-xl">
                  {`Gallery ${index + 1}`}
                </span>
              </button>
            ))}
          </div>

          {/* 모달 컴포넌트 */}
          {isModalOpen && selectedImages && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="relative bg-white rounded-lg p-5 w-full max-w-3xl">
                {/* 닫기 버튼 */}
                <button
                  onClick={handleModalClose2}
                  className="absolute top-1 right-1 text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  ✖
                </button>

                {/* 슬라이더 */}
                <Slider {...sliderSettings}>
                  {selectedImages.map((img, idx) => (
                    <div key={idx} className="">
                      <Image
                        src={`/${img}`}
                        alt={`Slide ${idx}`}
                        width={800}
                        height={200}
                        className="w-1/2 rounded-lg object-cover text-center"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-y-7 md:gap-y-5 md:gap-32 mt-5 lg:mt-32">
            {shorts.map((video, index) => (
              <button
                key={index}
                onClick={() => handleModalOpen(video.link)}
                className="relative w-56 h-44 rounded-md shadow-md transition transform hover:scale-110"
              >
                <Image
                  src={video.img}
                  alt={video.title}
                  className="w-full h-full rounded-xl"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-semibold rounded-xl">
                  {video.title}
                </span>
              </button>
            ))}
          </div>

          {/* Modal for Video */}
          {selectedLink && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="relative bg-white rounded-lg p-5 w-full max-w-2xl">
                <button
                  onClick={handleModalClose}
                  className="absolute top-1 right-1 text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  ✖
                </button>
                <iframe
                  src={selectedLink}
                  title="Video"
                  className="w-full h-96 rounded-md"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

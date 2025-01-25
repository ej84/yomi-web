"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../image/yomi_profile.jpg"


const page = () => {
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
            <main className="min-h-screen p-8 items-center justify-center relative font-[family-name:var(--font-geist-sans)]">
                <div className="flex justify-center">

                    <Image
                        src={profile}
                        alt="profile"
                        className="md:w-1/3 rounded-xl"
                    />
                </div>
                <div className="flex justify-center items-center px-4 py-4 rounded-xl shadow-lg shadow-purple-700 mt-8">
                    <audio ref={audioRef} src="/audio/Smile -You & Me-.mp3" loop />
                    <div className="flex justify-center items-center outline outline-2 rounded-full w-12 h-12 outline-white relative right-5">
                        <button onClick={togglePlay}>
                            {isPlaying ? (
                                <FaPause className="w-8 h-8" />
                            ) : (
                                <FaPlay className="w-8 h-8 ml-1" />
                            )}
                        </button>
                    </div>
                    <p className="text-base text-center">읽기 전에 재생 꾹!</p>
                </div>
                <div className="grid grid-rows-1 p-5 gap-4 mt-10 justify-center items-center text-center text-sm lg:text-base shadow-xl shadow-purple-700">
                    <p>
                        dear my friend
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default page;
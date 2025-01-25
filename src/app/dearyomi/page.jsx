"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dearyomi from "../image/dearyomi.jpeg";


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
                        src={dearyomi}
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
                        요미야, 숲에 와서 두번째로 맞이하는 생일 진심으로 축하한다! 그리고 최가네에서 활동한 지 1년 넘은 것도 정말 고생 많았어!!<br />
                        비록 웹 디자이너 및 개발자로서 아직도 어딘가 어설프고 많이 채워나가야 할 것 같은 느낌이지만, 네가 처음 트위치에서 만났을 때부터 항상 개발자 화이팅!이라고 힘을 준 덕분에 내가 여기까지 올 수 있었다고 생각한다.<br />
                        사실 지난 2024년 한해가 우리 모두에게 쉽지 않은 한 해이기도 했고, 내가 장난이랍시고 또는 너무 편하고 친숙하게만 생각해서 가볍게 했던 말이나 행동들 때문에 우리 요미한테<br />
                        상처도 주고 많이 힘들게 했을 거야, 그렇지? 다시 한번 진심으로 미안해.<br />
                        요새 왠지 모르게 너랑 예전보다 조금 멀어진 듯한 느낌이 들어서 살짝 쓸쓸할 때가 있더라. 물론 바쁘고 또 요미의 일과 건강이 최우선이니까 다 이해하고도 남아. 그래도 내 작은 욕심 조금만 부려서, 내가 널 생각하고 아끼는 마음만큼은<br />
                        늘 진심이라는 것, 그리고 너를 위해서라면 에반게리온이든 파피몬이든 되어줄 수 있다는 것만은 잊지 말아줬으면 좋겠구나.
                        <br /> 지금의 어려움에서 벗어나는 대로 꼭 행동으로 옮겨서 보여줄게. 그리고 올 한해도 늘 건강하고 하는 일 다 잘 되길 바라며, 앞으로도 잘 부탁한다고 해도 되지?<br />
                        오늘 진짜 맛있는 것도 많이 먹고 꼭 행복한 하루 되렴! 나는 언제든지지 무조건 우리 요미 편이야!!
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default page;
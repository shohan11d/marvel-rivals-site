import { useMemo, useRef, useState } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVdClick = () => {
    setCurrentIndex(upcomingVideoIndex);
  }

  const handleVideoLoad = () => {
    setIsLoading(false);
    setLoadedVideos(prev => prev + 1);
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div className="mask-clip-path absolute-center border-red absolute z-50 cursor-pointer overflow-hidden rounded-lg">
          <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
            <video src={getVideoSrc(upcomingVideoIndex)} ref={nextVideoRef} loop muted id="current-video" className="size-64 origin-center scale-150 object-cover object-center" onLoadedData={handleVideoLoad}></video>
          </div>
        </div>
        <video src={getVideoSrc(currentIndex)}  loop muted id="next-video" className="absolute-center invisible absolute z-20 size-64 object-cover object-center" onLoadedData={handleVideoLoad}></video>
        <video src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)} autoplay loop muted className="absolute border-2 left-0 top-0 size-full object-cover object-center" onLoadedData={handleVideoLoad} ></video>



      </div>
      <h1 className="special-font hero-heading font-zentry absolute bottom-5 right-5 z-50 text-blue-75">G<b>a</b>ming</h1>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">redifi<b>n</b>e</h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br /> Unleash the Play Economy</p>
          <Button id="watch-trailer" title="watch trailer" leftIcon={<TiLocationArrow />} containerClass="!bg-yellow-300 flex-center gap-1" />
        </div>
      </div>


      <div className="absolute left-0 top-0 z-40 size-full">
<h1 className="special-font hero-heading font-zentry absolute bottom-5 right-5 text-black-75">G<b>a</b>ming</h1>
        <div className="mt-24 px-5 sm:px-10">
        </div>
      </div>
    </div>
  )
}

export default Hero

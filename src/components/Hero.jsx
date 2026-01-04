import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

function Hero() {
  return (
    <div className="relative px-4 h-dvh overflow-hidden">
      <div className=" h-dvh w-full flex flex-col justify-between container mx-auto size-full relative z-10">
        <div className="py-8 mt-16 md:mt-24">
          <img
            src="./img/rivals-logo.png"
            className="w-40 md:w-100 mb-4"
            alt=""
          />
          <p className="text-white text-xs md:text-2xl  uppercase text-blue-50">
            The Super hero team-based pvp shooter
          </p>
          <p className="text-[#FBDB2B] text-xs md:text-2xl font-bold uppercase mb-4">
            All heroes are free to play!
          </p>
          <Button
            id="watch-trailer"
            title="Watch Trailer"
            link="https://www.youtube.com/watch?v=-b0veB7q9P4"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-[#FBDB2B] text-black flex-center gap-1 self-start"
          />
        </div>

        <div className="flex items-center justify-end">
          <h1 className="hero-heading text-white mb-8">Play Now</h1>
        </div>
      </div>
      <video
        src="./videos/marvel-hero1.mp4"
        autoPlay
        muted
        loop
        className="w-full inset-0  size-full absolute top-0 left-0 object-cover"
      />
    </div>
  );
}

export default Hero;

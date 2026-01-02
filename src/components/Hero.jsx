import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

function Hero() {
  return (
    <div className="relative h-dvh overflow-hidden">
      <div className=" h-dvh w-full flex flex-col justify-between container mx-auto size-full relative z-10">
        <div className="py-8 mt-14">
          <h1 className="uppercase hero-heading text-white">Marvel </h1>
          <p className="text-white mb-4">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            id="watch-trailer"
            title="Watch Trailer"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1 self-start"
          />
        </div>

        <div className="flex items-center justify-end">
          <h1 className="hero-heading text-white">Rivals</h1>
        </div>
      </div>
      <video
        src="./videos/hero-1.mp4"
        autoPlay
        muted
        loop
        className="w-full inset-0  size-full absolute top-0 left-0 object-cover"
      />
    </div>
  );
}

export default Hero;

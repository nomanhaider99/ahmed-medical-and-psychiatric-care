import Button from "../ui/button";
import Chatbot from "../ui/chatbot";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center md:px-10 px-4">
      {/* Desktop video */}
      <video
        className="rounded-lg md:block hidden"
        src="https://res.cloudinary.com/dfd1buulq/video/upload/v1762928245/hero_txymkk.mp4"
        autoPlay
        muted
        loop
        playsInline
        width={1400}
        height={500}
        poster="https://res.cloudinary.com/dfd1buulq/video/upload/v1762928245/hero_txymkk.jpg"
      />

      {/* Mobile video */}
      <video
        className="rounded-lg block md:hidden"
        src="https://res.cloudinary.com/dfd1buulq/video/upload/v1762928245/hero_txymkk.mp4"
        autoPlay
        muted
        loop
        playsInline
        width={1600}
        height={600}
        poster="https://res.cloudinary.com/dfd1buulq/video/upload/v1762928245/hero_txymkk.jpg"
      />

      <div className="absolute">
        <Chatbot />
      </div>
    </div>
  );
};

export default Hero;

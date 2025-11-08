import Button from "../ui/button"

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-5 md:px-10 px-4">
        <video 
            className="rounded-lg md:block hidden"
            src="/assets/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            width={1600}
            height={600}
        />
        <video 
            className="rounded-lg block md:hidden"
            src="/assets/videos/mobile-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            width={1600}
            height={600}
        />
        <div className="flex flex-col items-center gap-4 absolute">
            <h1 className="md:text-[4rem] text-[2.5rem] tracking-tight font-extrabold md:text-dark-gray text-white text-center w-3/4 md:leading-13 leading-none">Expert Virtual Mental Health Care Same-Day Appointments & Insurance Covered</h1>
            <p className="md:text-xl text-md text-center w-3/4 md:text-zinc-800 text-zinc-200">Connect with a licensed psychiatrist or therapist today</p>
            <Button
                text="Call Us 24/7"
                variant="rounded-circular"
             />
            <div className="w-1/2 flex justify-center items-center gap-10">
                <Button
                    text="Find a Psychiatrist"
                    variant="primary"
                 />
                <Button
                    text="Find a Therapist"
                    variant="primary"
                 />
            </div>
        </div>
    </div>
  )
}

export default Hero
import Image from "next/image"
import Button from "../ui/button"
import { FaPhoneAlt } from "react-icons/fa"

const Description = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      {/* Left Section */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="flex flex-col gap-3">
          <p className="uppercase text-brand-primary font-semibold text-base sm:text-lg leading-5">
            SAME DAY <br /> APPOINTMENTS AVAILABLE
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
            Evidence-based therapy + psychiatric treatment from a team that cares
          </h2>
        </div>

        <div className="flex flex-col gap-5 text-dark-gray">
          <p className="text-base sm:text-lg leading-relaxed">
            If you are looking for a <b>caring professional</b> to provide treatment in the comfort
            of your home, BlueSky is here to help. BlueSky's experienced network of licensed,{" "}
            <u>mental healthcare professionals</u> have a sincere commitment to patient-centered
            care, structured around evidence-based solutions for positive outcomes. At BlueSky, we
            approach every patient as an individual — with <b>empathy</b> and understanding.
          </p>

          <p className="flex items-center gap-3 font-extrabold text-lg">
            <FaPhoneAlt size={16} />
            +1 123 456 789
          </p>

          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-2/5">
            <Button text="Book An Appointment" variant="primary" />
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            alt="Doctor holding tablet"
            src="/assets/images/doctor-pad.jpg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Description

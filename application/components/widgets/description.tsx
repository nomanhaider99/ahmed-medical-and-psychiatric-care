import Image from "next/image"
import { FaPhoneAlt } from "react-icons/fa"
import Link from "next/link"
import Button from "../ui/button"

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
            Evidence-Based Therapy and Psychiatric Care Delivered with Compassion
          </h2>
        </div>

        <div className="flex flex-col gap-5 text-dark-gray">
          <p className="text-base sm:text-lg leading-relaxed">
            At <b><u>Lyari Medical & Psychiatric Care</u></b>, we provide professional, evidence-based mental health treatment in the comfort of your own home. Our team of licensed mental health professionals is dedicated to delivering patient-centered care, guided by proven, research-backed approaches to support meaningful and lasting outcomes. Every patient is treated as an individual, with empathy, understanding, and respect..
          </p>

          <p className="flex items-center gap-3 font-extrabold text-lg">
            <FaPhoneAlt size={16} />
            (442) 777-0876
          </p>

          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-2/5">
            <Link href="/appointment">
              <Button text="Book Consultation" variant="primary" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            alt="Doctor holding tablet"
            src="/assets/images/doctor-pad.jpeg"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Description

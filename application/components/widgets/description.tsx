import Image from "next/image"
import Button from "../ui/button"
import { FaPhoneAlt } from "react-icons/fa"

const Description = () => {
    return (
        <div className="w-full flex md:flex-row flex-col justify-between items-center md:px-20 px-4 py-5">
            <div className="md:w-1/2 w-full flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <p className="uppercase text-lg text-brand-primary font-semibold leading-5">SAME DAY <br />APPOINTMENTS AVAILABLE</p>
                    <h2 className="text-[2.2rem] font-medium leading-none md:w-[60%] ">Evidence-based therapy + psychiatric treatment from a team that cares</h2>
                </div>
                <div className="flex flex-col gap-5 text-dark-gray">
                    <p className="md:w-[60%] text-lg">If you are looking for a <b>caring professional</b> to provide treatment in the comfort of your home, BlueSky is here to help. BlueSky's experienced network of licensed, <u>mental healthcare professionals</u> have a sincere commitment to patient-centered care, structured around evidence-based solutions for positive outcomes. At BlueSky, we approach every patient as an individual -- with <b>empathy</b> and understanding.</p>
                    <p className="flex items-center gap-3 font-extrabold text-lg"><FaPhoneAlt size={16} />+1 123 456 789</p>
                    <div className="md:w-[40%] ">
                        <Button
                            text="Book An Appointment"
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <Image
                    alt=""
                    src="/assets/images/doctor-pad.jpg"
                    width={650}
                    height={750}
                 />
            </div>
        </div>
    )
}

export default Description
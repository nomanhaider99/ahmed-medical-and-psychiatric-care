import Link from "next/link"
import Button from "../ui/button"
import Logo from "../ui/logo"
import SocialIcon from "../ui/social-icon"
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail, MdFax } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="w-full py-8 md:px-10 px-4 bg-gradient-to-br from-vivid-azure to-blue-400 flex flex-col items-center gap-8">
      <div className="flex flex-col md:items-center items-start gap-3">
        <p className="uppercase text-white font-semibold">Your Path to Wellness Starts Here</p>
        <h2 className="text-[3rem] tracking-tight font-extrabold text-dark-gray leading-none">Request More Information</h2>
        <p className="md:text-center text-left text-zinc-200 w-full md:w-3/4">Ahmed Medical & Psychiatric Care is a hospital staffed by experienced psychiatrists and therapists dedicated to providing compassionate, evidence-based treatment for anxiety, depression, and other mental health conditions.</p>
        <div className="flex lg:flex-row flex-col items-start lg:items-center lg:gap-5 md:gap-3 gap-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={14} />
              <span className="font-medium"> (442) 777-0876</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail size={14} />
              <span className="font-medium">info@ahmedmedicalpsychiatriccare.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdFax />
              <span>(224) 252-3667</span>
            </div>
          </div>
      </div>
      <div className="w-3/4 bg-zinc-300/55 h-[1px]"></div>
      <div className="md:w-3/4 w-full flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-5">
        <Logo />
        <div className="flex md:flex-row flex-col lg:items-center items-start gap-4 text-zinc-50">
          <Link href="/">Home</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/our-team">Our Team</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link target="_blank" href={'https://facebook.com/ahmed-medical-psychiatric-care'}>
            <SocialIcon
              icon={<FaFacebook size={20} color="#fff" />}
            />
          </Link>
          <Link target="_blank" href={'https://instagram.com/ahmed-medical-psychiatric-care'}>
            <SocialIcon
              icon={<FaInstagram size={20} color="#fff" />}
            />
          </Link>
          <Link target="_blank" href={'https://linkedin.com/in/ahmed-medical-psychiatric-care'}>
            <SocialIcon
              icon={<FaLinkedin size={20} color="#fff" />}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
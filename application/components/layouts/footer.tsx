import Link from "next/link"
import Button from "../ui/button"
import Logo from "../ui/logo"
import SocialIcon from "../ui/social-icon"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full py-8 md:px-10 px-4 bg-brand-primary flex flex-col items-center gap-8">
      <div className="flex flex-col md:items-center items-start gap-3">
        <p className="uppercase text-white font-semibold">Your Path to Wellness Starts Here</p>
        <h2 className="text-[3rem] tracking-tight font-extrabold text-dark-gray leading-none">Request More Information</h2>
        <p className="md:text-center text-left text-zinc-200 w-full md:w-3/4">Ahmed Medical and Psychiatric Care is an integrated digital healthcare platform  that provides a secure, centralized hub for managing patient-provider interactions.</p>
        <Button
          text="Contact Us"
          variant="rounded-circular"
        />
        <p className="text-zinc-200 md:text-center text-left">1431 Opus Pl, Suite 110
          Downers Grove, IL 60515</p>
      </div>
      <div className="w-3/4 bg-zinc-300/55 h-[1px]"></div>
      <div className="md:w-3/4 w-full flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-5">
        <Logo />
        <div className="flex md:flex-row flex-col items-center gap-4 text-zinc-50">
          <Link href="/services">Services</Link>
          <Link href="/location">Location</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div className="flex items-center gap-4">
          <SocialIcon
            icon={<FaFacebook size={20} color="#fff" />}
           />
          <SocialIcon
            icon={<FaInstagram size={20} color="#fff" />}
           />
          <SocialIcon
            icon={<FaLinkedin size={20} color="#fff" />}
           />
          <SocialIcon
            icon={<FaTwitter size={20} color="#fff" />}
           />
        </div>
      </div>
    </footer>
  )
}

export default Footer
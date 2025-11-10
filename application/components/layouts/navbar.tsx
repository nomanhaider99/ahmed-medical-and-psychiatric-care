import Image from "next/image"
import Link from "next/link"
import Button from "../ui/button"
import Logo from "../ui/logo"
import MobileMenu from "../ui/mobile-menu"

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between sm:px-10 lg:px-6 px-4 md:h-[120px] bg-white">
        <Logo />
        <ul className="sm:flex hidden items-center gap-6 text-xl text-dark-gray">
            <Link className="hover:scale-105 transition-all hover:font-medium" href="/services">Services</Link>
            <Link className="hover:scale-105 transition-all hover:font-medium" href="/location">Location</Link>
            <Link className="hover:scale-105 transition-all hover:font-medium" href="/our-team">Our Team</Link>
            <Link className="hover:scale-105 transition-all hover:font-medium" href="/resources">Resources</Link>
            <Button
                text="Book Consultation"
                variant="primary"
             />
        </ul>
        <div className="sm:hidden block">
            <MobileMenu />
        </div>
    </nav>
  )
}

export default Navbar
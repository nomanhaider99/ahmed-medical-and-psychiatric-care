import Image from "next/image"
import Link from "next/link"
import Button from "../ui/button"
import Logo from "../ui/logo"
import MobileMenu from "../ui/mobile-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from 'react-icons/io';

const servicesData = [
  { id: 1, name: "Medication Management", route: "/services/medication-management" },
  { id: 2, name: "Mental Health", route: "/services/mental-health" },
  { id: 3, name: "Stress Management", route: "/services/stress-management" },
  { id: 4, name: "Seasonal Disorder", route: "/services/seasonal-disorder" },
  { id: 5, name: "Depression", route: "/services/depression" },
  { id: 6, name: "Anxiety", route: "/services/anxiety" },
  { id: 7, name: "Insomnia", route: "/services/insomnia" },
  { id: 8, name: "Post-Traumatic Stress Disorder (PTSD)", route: "/services/post-traumatic-stress-disorder" },
  { id: 9, name: "Self Harm", route: "/services/self-harm" },
  { id: 10, name: "Low Self Esteem", route: "/services/low-self-esteem" },
  { id: 11, name: "Suicidal Thoughts", route: "/services/suicidal-thoughts" },
  { id: 12, name: "Obsessive-Compulsive Disorder (OCD)", route: "/services/obsessive-compulsive-disorder" },
];

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between lg:px-10 sm:px-6 px-4 md:h-[120px] bg-white pt-1">
      <Logo />
      <ul className="sm:flex hidden items-center gap-6 text-xl text-dark-gray">
        
        {/* Home */}
        <Link
          href="/"
          className="relative hover:scale-105 transition-all hover:font-medium hover:text-vivid-green
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-vivid-green 
          after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>

        {/* Services Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="relative hover:scale-105 transition-all hover:font-medium flex items-center gap-2 cursor-pointer hover:text-vivid-green
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-vivid-green 
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Services <IoIosArrowDown />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[420px] grid grid-cols-2 gap-x-4 gap-y-1 p-3 font-medium text-dark-gray border border-vivid-azure/25 rounded-xl shadow-md"
          >
            {servicesData.map((item) => (
              <DropdownMenuItem
                key={item.id}
                className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-vivid-azure/10 hover:text-vivid-azure"
              >
                <Link href={item.route} className="block w-full text-[15px]">
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* FAQs */}
        <Link
          href="/faqs"
          className="relative hover:scale-105 transition-all hover:font-medium hover:text-vivid-green
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-vivid-green 
          after:transition-all after:duration-300 hover:after:w-full"
        >
          FAQs
        </Link>

        {/* Our Team */}
        <Link
          href="/our-team"
          className="relative hover:scale-105 transition-all hover:font-medium hover:text-vivid-green
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-vivid-green 
          after:transition-all after:duration-300 hover:after:w-full"
        >
          Our Team
        </Link>

        <Link href="/appointment">
            <Button text="Book Consultation" variant="primary" />
        </Link>
      </ul>

      <div className="sm:hidden block">
        <MobileMenu />
      </div>
    </nav>
  )
}

export default Navbar

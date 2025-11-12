'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { TbMenu3 } from "react-icons/tb";
import { useState } from "react";
import Logo from "./logo";
import Button from "./button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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

const MobileMenu = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger>
        <TbMenu3
          className="cursor-pointer text-brand-primary hover:text-brand-accent transition-all duration-300"
          size={34}
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full sm:max-w-sm bg-gradient-to-b from-white to-blue-50 border-r border-blue-100 px-6 py-4 shadow-2xl"
      >
        <SheetHeader className="">
          <SheetTitle className="flex items-center gap-1">
            <Logo />
          </SheetTitle>
          <SheetDescription className="text-brand-primary/80 text-base font-medium mt-1">
            Your Path to Wellness Starts Here 💙
          </SheetDescription>
        </SheetHeader>

        {/* Nav Links */}
        <ul className="flex flex-col gap-2 text-xl font-medium text-brand-dark">
          <li>
            <Link href="/" className="block hover:text-brand-primary transition-colors duration-300">
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-left hover:text-brand-primary transition-colors duration-300"
            >
              Services {servicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {servicesOpen && (
              <ul className="mt-2 ml-4 flex flex-col gap-3 text-sm font-medium text-brand-dark overflow-y-scroll invisible-scroller">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      className="block hover:text-brand-primary transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/location" className="block hover:text-brand-primary transition-colors duration-300">
              Location
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="block hover:text-brand-primary transition-colors duration-300">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/our-team" className="block hover:text-brand-primary transition-colors duration-300">
              Our Team
            </Link>
          </li>
        </ul>

        {/* Footer */}
        <SheetFooter className="mt-10 border-t border-blue-100 pt-6">
          <Button text="Book Consultation" variant="primary" />
          <p className="text-center text-sm text-gray-500 mt-3">
            Compassionate care. Modern treatment. Better health.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

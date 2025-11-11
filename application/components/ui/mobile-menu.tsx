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
import Logo from "./logo";
import Button from "./button";

const MobileMenu = () => {
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
        className="w-full sm:max-w-sm bg-gradient-to-b from-white to-blue-50 border-r border-blue-100 px-6 py-6 shadow-2xl"
      >
        <SheetHeader className="px-0">
          <SheetTitle className="flex items-center gap-2">
            <Logo />
          </SheetTitle>
          <SheetDescription className="text-brand-primary/80 text-base font-medium mt-1">
            Your Path to Wellness Starts Here 💙
          </SheetDescription>
        </SheetHeader>

        {/* Nav Links */}
        <ul className="flex flex-col gap-5 mt-10 text-2xl font-semibold text-brand-dark">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Location", href: "/location" },
            { name: "FAQs", href: "/faqs" },
            { name: "Our Team", href: "/our-team" },
            { name: "Resources", href: "/resources" },
          ].map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="block hover:text-brand-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <SheetFooter className="mt-10 border-t border-blue-100 pt-6">
          <Button
            text="Book Consultation"
            variant="primary"
          />
          <p className="text-center text-sm text-gray-500 mt-3">
            Compassionate care. Modern treatment. Better health.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

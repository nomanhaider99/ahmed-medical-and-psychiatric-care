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
            <SheetTrigger><TbMenu3 className="cursor-pointer" size={35} /></SheetTrigger>
            <SheetContent className="px-4 w-full">
                <SheetHeader className="px-0">
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <SheetDescription className="text-vivid-green text-lg">
                        Your Path to Wellness Starts Here.
                    </SheetDescription>
                </SheetHeader>
                <ul className="flex flex-col gap-4 text-[2.5rem] tracking-tight font-medium text-vivid-azure">
                    <Link href="/services">Services</Link>
                    <Link href="/location">Location</Link>
                    <Link href="/our-team">Our Team</Link>
                    <Link href="/resources">Resources</Link>
                </ul>
                <SheetFooter>
                    <Button
                        text="Book Consultation"
                        variant="primary"
                     />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdFax } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="w-full bg-vivid-azure text-white md:text-lg text-xs flex justify-between items-center px-4 sm:px-10 py-1.5">
      <span className="lg:block hidden">Welcome to Lyari Medical and Psychiatric Care</span>
      <div className="md:w-auto w-full flex md:flex-row flex-col md:items-center items-start justify-between md:gap-8 gap-2">
        <Link href={'tel:+18476165562'} className="flex items-center gap-2">
          <FaPhoneAlt size={14} />
          <span className="font-medium"> (847) 616-5562</span>
        </Link>
        <Link href={'tel:+18476165563'} className="lg:flex hidden items-center gap-2">
          <MdFax size={22} />
          <span>(847) 616-5563</span>
        </Link>
        <Link href={"mailto:info@lyarimp.com"} className="flex items-center gap-2">
          <MdEmail size={14} />
          <span className="font-medium">info@lyarimp.com</span>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;

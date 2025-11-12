import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="w-full bg-vivid-azure text-white md:text-lg text-xs flex justify-between items-center px-4 sm:px-10 py-1.5">
      <span className="lg:block hidden">Welcome to Ahmed Medical and Psychiatric Care</span>
      <div className="md:w-auto w-full flex items-center justify-between md:gap-8 gap-0">
        <div className="flex items-center gap-2">
        <FaPhoneAlt size={14} />
        <span className="font-medium"> (442) 777-0876</span>
      </div>
      <div className="flex items-center gap-2">
        <MdEmail size={14} />
        <span className="font-medium">ahmedmedandpsych@gmail.com</span>
      </div>
      </div>
    </div>
  );
};

export default TopHeader;

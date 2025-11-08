import { FaPhoneAlt } from "react-icons/fa"

const TopHeader = () => {
  return (
    <div className="w-full py-2 flex items-center justify-between md:text-center text-left bg-brand-primary font-semibold tracking-tight text-white md:px-10 px-2">
      <div className="md:flex hidden"></div>
      <div className="text-sm md:text-md">Welcome to Ahmed Medical and Psychiatric Care</div>
      <div className="w-1/2 md:w-auto flex items-center gap-2">
        <div><FaPhoneAlt size={18}  /></div>
        <div className="text-sm md:text-md">+1 123 456 789</div>
      </div>
    </div>
  )
}

export default TopHeader
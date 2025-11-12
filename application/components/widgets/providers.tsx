import Image from "next/image"

const providersImages = [
    "/assets/images/providers/insurance-1.png",
    "/assets/images/providers/insurance-2.png",
    "/assets/images/providers/insurance-3.png",
    "/assets/images/providers/insurance-5.png",
    "/assets/images/providers/insurance-7.png",
    "/assets/images/providers/insurance-6.png",
    "/assets/images/providers/insurance-4.png",
]
const Providers = () => {
  return (
    <div className='w-full flex flex-col items-center gap-5 md:px-20 px-4 py-10'>
        <h2 className='lg:text-[2rem] text-[1.5rem] text-dark-gray tracking-tight font-medium'>You can pay out-of-pocket or use your Blue Cross Blue Shield, Cigna, Aetna, and United Healthcare insurance plans to cover treatment from licensed Ahmed Medical health care providers.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2">
            {
                providersImages.map((item, index) => (
                    <Image
                        alt=""
                        src={item}
                        width={300}
                        height={175}
                        key={index}
                        className="cursor-pointer hover:scale-105 transition-all"
                     />
                ))
            }
        </div>
    </div>
  )
}

export default Providers
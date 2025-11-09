import Image from "next/image"

const Team = () => {
    return (
        <div className="w-full flex justify-center py-10 md:px-20 px-4">
            <div className="w-full flex md:flex-row flex-col justify-between items-center md:gap-0 gap-5 md:pr-4 px-4 md:px-0 pr-0 py-5 border-[1px]  border-brand-primary/50 md:h-[700px] rounded-lg">
                <div className="md:w-[40%] w-full">
                    <Image
                        alt=""
                        src="/assets/images/team.jpg"
                        width={500}
                        height={800}
                        className="rounded-lg md:-translate-x-4 md:block hidden"
                     />
                    <Image
                        alt=""
                        src="/assets/images/team-mobile.jpg"
                        width={1100}
                        height={600}
                        className="rounded-lg md:-translate-x-4 -translate-x-2 md:hidden block w-full"
                     />
                </div>
                <div className="md:w-[60%] w-full flex flex-col gap-3">
                    <h1 className="text-[2.2rem] font-semibold">Real Experts, Real Care</h1>
                    <p className="text-lg pr-4 md:px-0"><u>Our team</u> is composed of experienced psychiatrists and therapists dedicated to helping you achieve real, measurable improvements. At BlueSky, we treat anxiety, depression, and other mental health conditions with the utmost care. ​</p>
                    <p className="text-lg pr-4 md:px-0">Many of our patients report a significant reduction in symptoms after starting treatment. Our clinical team is led by leaders in <u>psychiatry</u> and psychotherapy, embracing diverse specialties and backgrounds. We are committed to providing the highest standards of care and ensuring each individual feels supported throughout their mental health journey.</p>
                </div>
            </div>
        </div>
    )
}

export default Team
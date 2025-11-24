import Image from "next/image"

const Team = () => {
    const clipPathClasses = "md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:rounded-r-lg";
    return (
        <div className="w-full flex justify-center py-16 px-4">
            <div className="w-full max-w-7xl flex md:flex-row flex-col justify-between md:gap-0 gap-8 bg-white shadow-xl md:shadow-2xl rounded-xl">
                <div className="md:w-[40%] w-full relative">
                    <Image
                        alt="Expert team member"
                        src="/assets/images/team.webp"
                        width={500}
                        height={800}
                        className="rounded-l-xl"
                    />
                </div>

                <div
                    className={`md:w-[60%] w-full flex flex-col gap-6 md:py-16 py-8 md:px-16 px-6 
                                ${clipPathClasses} bg-sky-50 rounded-b-xl md:rounded-l-none`}
                >
                    <h1 className="text-[2.5rem] md:text-5xl font-extrabold text-vivid-green leading-tight">
                        <span className="text-vivid-azure">Real Experts,</span> Real Care
                    </h1>

                    {/* Content Section */}
                    <div className="space-y-4 text-dark-gray">
                        <p className="text-lg">
                            Our team at <b><u>Ahmed Medical & Psychiatric Care</u></b> is composed of experienced psychiatrists and therapists dedicated to helping you achieve meaningful, measurable improvements in your mental health. We provide compassionate, evidence-based treatment for anxiety, depression, and other mental health conditions.
                        </p>
                        <p className="text-lg">
                            Many of our patients experience significant symptom reduction after beginning treatment. Our clinical team is led by recognized experts in psychiatry and psychotherapy, representing diverse specialties and backgrounds. We are committed to the highest standards of care, ensuring each individual feels supported and empowered throughout their mental health journey.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Team
import Image from "next/image"
import Button from "../ui/button";

const Team = () => {
    // We will use an arbitrary value for the clip-path.
    // This creates a diagonal line running from the top-left (10% down) to the bottom-left (0%) of the container.
    const clipPathClasses = "md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:rounded-r-lg";
    // NOTE: If you want a more noticeable diagonal slice, adjust the first coordinate: 
    // e.g., md:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]

    return (
        <div className="w-full flex justify-center py-16 px-4">
            {/* Outer Container (Replaces the border) */}
            <div className="w-full max-w-7xl flex md:flex-row flex-col justify-between md:gap-0 gap-8 bg-white shadow-xl md:shadow-2xl rounded-xl">

                {/* 1. Left Column: Image Area (40% width) */}
                <div className="md:w-[40%] w-full relative">
                    {/* Desktop Image: Set to overflow slightly, and use rounded corners */}
                    <Image
                        alt="Expert team member"
                        src="/assets/images/team.jpeg"
                        width={500}
                        height={800}
                        // Position the image absolutely within its 40% column and round its corners
                        className="absolute inset-0 object-cover w-full h-full rounded-l-xl hidden md:block"
                    />

                    {/* Mobile Image: Full width, basic rounding */}
                    <Image
                        alt="Expert team member"
                        src="/assets/images/team-mobile.jpg"
                        width={1100}
                        height={600}
                        className="rounded-t-xl md:hidden block w-full object-cover"
                    />
                </div>

                {/* 2. Right Column: Text Content Area (60% width) */}
                {/* Apply the diagonal clip-path to this div on medium screens and up */}
                <div
                    className={`md:w-[60%] w-full flex flex-col gap-6 md:py-16 py-8 md:px-16 px-6 
                                ${clipPathClasses} bg-sky-50 rounded-b-xl md:rounded-l-none`}
                >
                    <h2 className="text-[2.5rem] md:text-5xl font-extrabold text-brand-primary leading-tight">
                        <span className="text-gray-900">Real Experts,</span> Real Care
                    </h2>

                    {/* Content Section */}
                    <div className="space-y-4 text-dark-gray">
                        <p className="text-lg">
                            Our team at <u>Ahmed Medical & Psychiatric Care</u> is composed of experienced psychiatrists and therapists dedicated to helping you achieve meaningful, measurable improvements in your mental health. We provide compassionate, evidence-based treatment for anxiety, depression, and other mental health conditions.
                        </p>
                        <p className="text-lg">
                            Many of our patients experience significant symptom reduction after beginning treatment. Our clinical team is led by recognized experts in psychiatry and psychotherapy, representing diverse specialties and backgrounds. We are committed to the highest standards of care, ensuring each individual feels supported and empowered throughout their mental health journey.
                        </p>
                    </div>

                    <div className="lg:w-[40%]">
                        <Button
                            text="Meet Our Licensed Specialists"
                            variant="primary"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Team
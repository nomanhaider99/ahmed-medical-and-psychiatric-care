'use client';

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Heather Green",
    username: "@heathergreen",
    body: "I felt heard during my appointment. I have no doubt I will continue using this provider.",
    img: "/assets/images/patient-1.jpg",
  },
  {
    name: "Michael Roberts",
    username: "@michaelroberts",
    body: "The staff was incredibly kind and professional. I felt comfortable from start to finish.",
    img: "/assets/images/patient-2.jpg",
  },
  {
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    body: "My provider really took the time to listen and understand my concerns. Highly recommend.",
    img: "/assets/images/patient-3.jpg",
  },
  {
    name: "David Lee",
    username: "@davidlee",
    body: "The entire experience was smooth and stress-free. I truly appreciate their compassion and care.",
    img: "/assets/images/patient-4.jpg",
  },
  {
    name: "Emily Turner",
    username: "@emilyturner",
    body: "I finally found a place that genuinely cares about my health. Every visit feels reassuring.",
    img: "/assets/images/patient-6.jpg",
  },
  {
    name: "Joshua Miller",
    username: "@joshuamiller",
    body: "They made me feel comfortable and valued throughout my appointment. Couldn’t ask for better service.",
    img: "/assets/images/patient-5.jpg",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-vivid-azure/25 bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white text-brand-primary">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-vivid-green dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeReviews() {
  return (
    <div className="relative h-[400px] flex w-full flex-col items-center justify-center overflow-x-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:px-20 px-4 md:py-10 py-5">
      <div className="text-center">
        <h1 className="md:text-[3rem] text-[2rem] tracking-tight font-semibold leading-none text-vivid-azure">Patients Feedback</h1>
        <p className="md:text-lg text-vivid-green">Our patients consistently share positive experiences and are genuinely happy with the care they receive.</p>
      </div>
      <div><MarqueeReviews /></div>
    </div>
  )
}

export default Testimonials
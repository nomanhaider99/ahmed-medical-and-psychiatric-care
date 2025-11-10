"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../ui/button";
import Link from "next/link";

const Skiper48 = ({ onSlideChange }: { onSlideChange: (index: number) => void }) => {
  const images = [
    { src: "/assets/images/service1.jpg", alt: "Illustrations by my fav AarzooAly" },
    { src: "/assets/images/service2.jpg", alt: "Illustrations by my fav AarzooAly" },
    { src: "/assets/images/service3.jpg", alt: "Illustrations by my fav AarzooAly" },
    { src: "/assets/images/service4.jpg", alt: "Illustrations by my fav AarzooAly" },
    { src: "/assets/images/service5.jpg", alt: "Illustrations by my fav AarzooAly" },
    { src: "/assets/images/service6.jpg", alt: "Illustrations by my fav AarzooAly" },
  ];

  return (
    <div className="h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full flex justify-center">
      <Carousel_002 images={images} loop onSlideChange={onSlideChange} />
    </div>
  );
};

export { Skiper48 };

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
  onSlideChange,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
  onSlideChange?: (index: number) => void;
}) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-[400px] sm:max-w-[440px] md:max-w-[480px]", className)}
    >
      {/* Left Arrow */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute lg:left-[-50px] top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/70 text-white lg:p-5 p-2 rounded-full transition cursor-pointer"
      >
        <ChevronLeftIcon className="w-7 h-7" />
      </button>

      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={spaceBetween}
        autoplay={autoplay ? { delay: 2000, disableOnInteraction: false } : false}
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={showPagination ? { clickable: true } : false}
        onSlideChange={(swiper) => onSlideChange && onSlideChange(swiper.realIndex)}
        className="h-[420px] sm:h-[480px] md:h-[550px] lg:h-[580px] w-full"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-3xl overflow-hidden">
            <Image
              className="object-cover w-full h-full rounded-3xl"
              src={image.src}
              alt={image.alt}
              width={600}
              height={800}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute lg:right-[-50px] right-[0px] top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/70 text-white lg:p-5 p-2 rounded-full transition cursor-pointer"
      >
        <ChevronRightIcon className="w-7 h-7" />
      </button>
    </motion.div>
  );
};


export { Carousel_002 };

const Services = () => {
  const diseases = [
    {
      route: '/services/anxiety-disorders',
      title: "Anxiety Disorders",
      desc: "We provide personalized therapy and coping techniques for managing anxiety, panic attacks, and phobias effectively.",
    },
    {
      route: '/services/depression-treatment',
      title: "Depression Treatment",
      desc: "Comprehensive mental health support to help you overcome depression, regain motivation, and rebuild confidence.",
    },
    {
      route: '/services/biopolar-disorder',
      title: "Bipolar Disorder",
      desc: "Expert guidance and treatment for stabilizing mood swings and managing manic-depressive episodes.",
    },
    {
      route: '/services/schizophernia-care',
      title: "Schizophrenia Care",
      desc: "Evidence-based therapy for individuals struggling with psychotic disorders and hallucinations.",
    },
    {
      route: '/services/ptsd-therapy',
      title: "PTSD Therapy",
      desc: "Specialized trauma recovery sessions to heal from past experiences and restore emotional balance.",
    },
    {
      route: '/services/stress-management',
      title: "Stress Management",
      desc: "Learn mindfulness, relaxation techniques, and coping strategies to reduce stress and improve daily life.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeDisease = diseases[activeIndex];

  return (
    <section className="w-full flex flex-col items-center gap-10 px-8 md:px-10 lg:px-20">
      <h1 className="lg:text-[3rem] text-[2rem] sm:text-4xl md:text-[3rem] font-semibold text-center leading-none">
        Our Comprehensive Mental Health Services
      </h1>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 items-center justify-center overflow-hidden">
          <Skiper48 onSlideChange={setActiveIndex} />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <motion.h2
            key={activeDisease.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-[2.2rem] font-medium tracking-tight"
          >
            {activeDisease.title}
          </motion.h2>

          <motion.p
            key={activeDisease.desc}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            {activeDisease.desc}
          </motion.p>
          <div className="lg:w-[50%]">
            <Link href={`${activeDisease.route}`}>
              <Button
                text="Learn More"
                variant="primary"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

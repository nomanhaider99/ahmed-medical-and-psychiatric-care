"use client";

import { m, motion } from "framer-motion";
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
import Button from "../ui/button";
import Link from "next/link";

const Skiper48 = ({ onSlideChange }: { onSlideChange: (index: number) => void }) => {
  const images = [
    { src: "/assets/images/disorders/medication-management.png", alt: "" },
    { src: "/assets/images/disorders/mental-health.png", alt: "" },
    { src: "/assets/images/disorders/stress-management.png", alt: "" },
    { src: "/assets/images/disorders/seasonal-disorder.png", alt: "" },
    { src: "/assets/images/disorders/depression.png", alt: "" },
    { src: "/assets/images/disorders/anxiety.jpeg", alt: "" },
    { src: "/assets/images/disorders/insomania.png", alt: "" },
    { src: "/assets/images/disorders/ptsd.jpeg", alt: "" },
    { src: "/assets/images/disorders/self-harm.png", alt: "" },
    { src: "/assets/images/disorders/low-self-stream.jpeg", alt: "" },
    { src: "/assets/images/disorders/suicidal-thoughts.jpeg", alt: "" },
    { src: "/assets/images/disorders/ocd.png", alt: "" },
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
      id: 1,
      route: '/services/medication-management',
      title: "Medication Management",
      desc: "Medication management is a crucial component of mental health care, designed to optimize the use of prescribed medications for mental health conditions. At Ahmed Medical & Psychiatric Care, we provide comprehensive online medication management that ensures medications are effective, safe, and tailored to your individual needs.",
    },
    {
      id: 2,
      route: '/services/mental-health',
      title: "Mental Health",
      desc: "Mental health challenges shouldn’t have to wait. At Ahmed Medical Psychiatric Care, we provide online mental health counseling that delivers timely, high-quality care from the comfort of your home. Whether you’re experiencing stress, anxiety, depression, or other mental health concerns, our virtual consultations ensure you receive the support you need, exactly when you need it.",
    },
    {
      id: 3,
      route: '/services/stress-management',
      title: "Stress Management",
      desc: "Stress affects nearly every aspect of life—from work performance and relationships to physical and emotional health. Effective stress management is more than just learning how to relax; it’s about developing practical tools and long-term strategies to handle challenges in a healthy, balanced way. It involves identifying your stress triggers, recognizing early warning signs, and applying evidence-based coping methods before things become overwhelming.",
    },
    {
      id: 4,
      route: '/services/seasonal-disorder',
      title: "Seasonal Disorder",
      desc: "Seasonal Affective Disorder (SAD) is a type of recurrent major depressive disorder that follows a seasonal pattern, typically beginning in the fall or winter. It impacts energy levels, mood stability, and sleep. Effective management involves developing practical tools and long-term strategies, not just waiting for the season to change. This includes identifying seasonal triggers (like reduced daylight), recognizing early warning signs, and applying evidence-based treatments such as light therapy and counseling before symptoms become overwhelming.",
    },
    {
      id: 5,
      route: '/services/depression',
      title: 'Depression',
      desc: 'Depression is a mental health condition that affects how you think, feel, and function in daily life. It is characterized by persistent sadness, loss of interest in activities, and physical symptoms like fatigue and sleep disturbances. Through online depression therapy, you can explore underlying causes, develop coping strategies, and build healthier thought patterns.'
    },
    {
      id: 6,
      route: '/services/anxiety',
      title: 'Anxiety',
      desc: "Anxiety is more than just feeling nervous it's a persistent, often overwhelming feeling of worry or fear that can significantly impact daily functioning, relationships, and health. Anxiety management involves developing a deep understanding of your anxiety triggers, learning to challenge negative thought patterns, and acquiring effective, science-backed strategies to reduce and cope with anxious feelings. It is about reclaiming control and finding peace in your day-to-day life."
    },
    {
      id: 7,
      route: '/services/insomnia',
      title: "Insomnia",
      desc: "Insomnia is more than an occasional restless night. It’s a chronic sleep disorder that makes it difficult to fall asleep, stay asleep, or feel refreshed upon waking. Persistent insomnia can cause daytime fatigue, irritability, and difficulty concentrating, significantly affecting your daily life. While short-term sleeplessness is common, chronic insomnia can contribute to serious physical and emotional health issues if left untreated.",
    },
    {
      id: 8,
      route: '/services/post-traumatic-stress-disorder',
      title: "Post-Traumatic Stress Disorder (PTSD)",
      desc: "Post-Traumatic Stress Disorder (PTSD) is a complex mental health condition that can develop after experiencing or witnessing a traumatic event. It can affect individuals who have encountered situations such as combat, natural disasters, accidents, or personal assaults. While commonly associated with veterans, PTSD can impact people of all backgrounds and ages. The symptoms of PTSD can be debilitating and may include persistent fear, intrusive memories or flashbacks, avoidance of triggers, negative mood changes, and heightened anxiety",
    },
    {
      id: 9,
      route: '/services/self-harm',
      title: "Self Harm",
      desc: "Self-harm refers to the intentional act of causing physical injury to oneself, often as a way to cope with overwhelming emotions, stress, or psychological distress. Common forms include cutting, burning, hitting, or other actions that produce physical pain. While self-harming behaviors may provide temporary relief from emotional suffering, they often mask deeper issues such as anxiety, depression, or unresolved trauma.",
    },
    {
      id: 10,
      route: '/services/low-self-esteem',
      title: 'Low Self Esteem',
      desc: 'Low self-esteem is a pervasive and often painful lack of confidence and self-worth. It affects how you view your abilities, your relationships, and your potential for happiness. Self-esteem management is not about instant, fleeting affirmations; it is about fundamentally restructuring negative core beliefs, challenging the inner critic, and developing a stable, compassionate, and realistic appreciation for your own value.'
    },
    {
      id: 11,
      route: '/services/suicidal-thoughts',
      title: 'Suicidal Thoughts',
      desc: "Compassionate Support and Therapy with Ahmed Medical & Psychiatric Care  Experiencing suicidal thoughts (sometimes referred to as suicidality) is a sign of extreme emotional distress, often linked to overwhelming pain, hopelessness, or a sense of entrapment. It is a mental health emergency that requires professional attention. Therapeutic support in this area focuses on stabilization, safety planning, and addressing the underlying mental health conditions—such as severe depression, trauma, or anxiety—that drive these feelings."
    },
    {
      id: 12,
      route: '/services/obsessive-compulsive-disorder',
      title: "Obsessive-Compulsive Disorder (OCD)",
      desc: "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by persistent, unwanted thoughts (obsessions) and repetitive behaviors (compulsions). These compulsions are performed to reduce the anxiety caused by obsessions. Without treatment, OCD can interfere with daily life, relationships, and overall well-being.",
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
          <div className="w-full flex justify-center md:justify-start items-center gap-2">
            <div className="">
              <Link href={`${activeDisease.route}`}>
                <Button
                  text="Learn More"
                  variant="primary"
                />
              </Link>
            </div>
            <div className="">
              <Link href={`/appointment`}>
                <Button
                  text="Book an Appointment"
                  variant="secondary"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

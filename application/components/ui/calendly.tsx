"use client";

import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-[3rem] text-[2rem] font-semibold text-center">Book Your Appointment</h1>
      </div>
      <div
        className="calendly-inline-widget rounded-2xl w-[90%] h-[700px] md:w-[80%]"
        data-url="https://calendly.com/noman567n/30min"
      ></div>
    </div>
  );
};

export default CalendlyEmbed;

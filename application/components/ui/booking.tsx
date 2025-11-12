"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Button from "./button";

export default function Booking() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button text="Book Consultation" variant="primary" />
            </DialogTrigger>

            <DialogContent className="flex flex-col">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                        Schedule Your Appointment
                    </DialogTitle>
                </DialogHeader>

                {/* Calendly Embed */}
                <div className="flex-1">
                    <div
                        className="calendly-inline-widget rounded-2xl w-full h-[700px] md:w-[80%]"
                        data-url="https://calendly.com/noman567n/30min"
                    ></div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface HeroSectionProps {
  rabbiName?: string;
  quote?: string;
  profileImage?: string;
}

export default function HeroSection({
  rabbiName = "הרב ישראל ישראלי",
  quote = "מחפשים משמעות רוחנית? בואו נצא יחד למסע של גילוי והתחדשות",
  profileImage = "/rabbi-bg.jpg",
}: HeroSectionProps) {
  return (
    <section className="relative h-[600px] w-full bg-slate-50 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/80" />

      {/* Background image */}
      <img
        src={profileImage}
        alt="Rabbi background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />

      {/* Content container */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-center h-full text-right">
          <Card className="bg-white/90 backdrop-blur-sm p-8 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-blue-900">
              {rabbiName}
            </h1>
            <p className="text-xl text-blue-800 mb-6">{quote}</p>
            <div className="flex justify-start gap-4">
              <Button
                variant="outline"
                className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() => {
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                צור קשר
              </Button>
              <Button
                variant="outline"
                className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() => {
                  document
                    .getElementById("brit")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                ברית מילה
              </Button>
              <Button
                className="bg-blue-900 text-white hover:bg-blue-800"
                onClick={() => {
                  document
                    .getElementById("about-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                אודותי
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface HeroSectionProps {
  rabbiName?: string;
  quote?: string;
  profileImage?: string;
}

export default function HeroSection({
  rabbiName = "רב מוהל שלמה לביא",
  quote = "רב קהילת היכל בינימין ומוהל מומחה",
  profileImage = "https://ravshlomobucket.s3.us-east-1.amazonaws.com/harav.jpeg",
}: HeroSectionProps) {
  return (
    <section className="relative h-[500px] w-full bg-slate-50 overflow-hidden">
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
        <div className="flex flex-col items-end justify-end h-full text-right">
          <Card className="bg-white/90 backdrop-blur-sm p-8 mb-10 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              {rabbiName}
            </h1>
            <p className="text-md md:text-xl text-blue-800 mb-6">{quote}</p>
            <div className="flex justify-start gap-4">
              <Button
                variant="outline"
                className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() => {
                  document
                    .getElementById("about-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                אודותי
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface HeroSectionProps {
  rabbiName?: string;
  quote?: string;
  profileImage?: string;
}

export default function HeroSection({
  rabbiName = "הרב שלמה לביא",
  quote = "מוהל רפואי מוסמך",
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
      <div className="absolute inset-0 z-10">
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-end pb-12 justify-start">
            <Card className="bg-white/90 backdrop-blur-sm p-8 max-w-2xl ml-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                {rabbiName}
              </h1>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
                {quote}
              </h1>
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
      </div>
    </section>
  );
}

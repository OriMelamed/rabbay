import React from "react";
import HeroSection from "./HeroSection";
import MediaGallery from "./MediaGallery";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Section */}
      <section id="contact-section">
        <ContactSection />
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-right">
          <h2 className="text-3xl font-bold mb-6">אודותי</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">תוכן אודות הרב...</p>
          </div>
        </div>
      </section>

      {/* Brit Mila Section */}
      <section id="brit" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <MediaGallery />
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
        aria-label="חזרה למעלה"
      >
        ↑
      </button>
    </div>
  );
}

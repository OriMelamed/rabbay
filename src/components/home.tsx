import React from "react";
import HeroSection from "./HeroSection";
import MediaGallery from "./MediaGallery";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white mx-4" dir="rtl">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about-section" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-right">על הרב..</h2>
          <div className="grid md:grid-cols-2 items-center">
            {/* Image Column */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-72 h-72 overflow-hidden rounded-full shadow-md">
                <img
                  src="https://ravshlomobucket.s3.us-east-1.amazonaws.com/PHOTO-2025-01-28-07-18-39.jpg"
                  alt="הרב שלמה לביא"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text content */}
            <div className=" justify-center">
              <div className="max-w-none text-right space-y-4">
                <p className="md:whitespace-nowrap">
                  הרב שלמה לביא מוהל מוסמך באזור מודיעין והסביבה למעלה מעשור.
                </p>
                <p className="font-bold md:whitespace-nowrap">
                  הרב שלמה לביא הינו מוהל מוסמך ע"י משרד הבריאות והרבנות הראשית
                  (מ.ר. 1050)
                </p>
                <p>
                  ובעל ניסיון עשיר גם למקרים מורכבים (חצי מהול והיפוספדיאס).
                </p>
                <p>
                  הרב משמש כרב קהילה בעיר מודיעין עורך חופות ומלווה משפחות בכל
                  תחומי הדת.
                </p>
                <p>כמו כן הרב מוסר הרצאות בתחומי ידע שונים ומגוונים.</p>
                <p>הרב מביא את הרוח הדתית והחמה לכל אירוע שעורך.</p>
                <p className="md:whitespace-nowrap">
                  באירועים שהרב עורך יש דגש על הפרטים הקטנים שהאירוע יותאם
                  בהתאמה אישית לזוג - להורים.
                </p>
                <p className="md:whitespace-nowrap">
                  תוכלו לצפות לטקס חשוב ומרגש שישאיר אתכם עם רגעים נפלאים.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brit Mila Section */}
      <section id="brit" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-right"></div>
        <div className="max-w-7xl mx-auto">
          <MediaGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section">
        <ContactSection />
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

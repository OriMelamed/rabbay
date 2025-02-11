import React from "react";
import HeroSection from "./HeroSection";
import MediaGallery from "./MediaGallery";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about-section" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-right">אודותי</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1504199367641-aba8151af406?w=400&h=500&fit=crop"
                alt="הרב שלמה לביא"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/5]"
              />
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none text-right">
                <p className="mb-4">
                  הרב שלמה לביא מוהל מומחה באזור מודיעין והסביבה למעלה מעשור.
                  הרב משמש כרב קהילה בעיר מודיעין עורך חופות ומלווה משפחות בכל
                  תחומי הדת. כמו כן הרב מוסר הרצאות בתחומי ידע שונים ומגוונים.
                </p>
                <p className="mb-4">
                  הרב מביא את הרוח הדתית והחמה לכל אירוע שעורך.
                </p>
                <p className="mb-4">
                  באירועים שהרב עורך יש דגש על הפרטים הקטנים שהאירוע יותאם
                  בהתאמה אישית לזוג - להורים.
                </p>
                <p className="mb-4">
                  תוכלו לצפות לטקס חשוב ומרגש שישאיר אתכם עם רגעים נפלאים.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brit Mila Section */}
      <section id="brit" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-right">
          <h2 className="text-3xl font-bold mb-6">ברית מילה</h2>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
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

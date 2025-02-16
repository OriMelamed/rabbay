import React from "react";
import MainHeader from "../components/MainHeader";
import ScheduleSection from "../components/ScheduleSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <MainHeader
        rabbiName="הרב מוהל שלמה לביא"
        quote="רב קבילת ביניימין ומוהל מומחה"
        profileImage="https://images.unsplash.com/photo-1504199367641-aba8151af406?w=400&h=400&fit=crop"
      />

      <main>
        <ScheduleSection
          weeklyLessons={[
            {
              id: "1",
              title: "שיעור בפרשת השבוע",
              time: "20:00",
              date: "יום ראשון",
              location: "בית המדרש המרכזי",
              maxParticipants: 30,
              currentParticipants: 15,
            },
            {
              id: "2",
              title: "הלכות שבת",
              time: "19:00",
              date: "יום שני",
              location: "בית המדרש המרכזי",
              maxParticipants: 25,
              currentParticipants: 10,
            },
            {
              id: "3",
              title: "מוסר ומחשבה",
              time: "20:30",
              date: "יום שלישי",
              location: "בית המדרש המרכזי",
              maxParticipants: 35,
              currentParticipants: 20,
            },
          ]}
        />

        <ContactSection />
      </main>
    </div>
  );
}

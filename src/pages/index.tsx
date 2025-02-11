import React from "react";
import MainHeader from "../components/MainHeader";
import ScheduleSection from "../components/ScheduleSection";
import ContentGallery from "../components/ContentGallery";
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

        <ContentGallery
          videos={[
            {
              id: "1",
              title: "פרשת השבוע - בראשית",
              date: "01.01.2024",
              duration: "45 דקות",
              thumbnail:
                "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=320&h=240&fit=crop",
            },
            {
              id: "2",
              title: "הלכות שבת",
              date: "02.01.2024",
              duration: "60 דקות",
              thumbnail:
                "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=320&h=240&fit=crop",
            },
            {
              id: "3",
              title: "מוסר ומחשבה",
              date: "03.01.2024",
              duration: "30 דקות",
              thumbnail:
                "https://images.unsplash.com/photo-1533094602577-95291773e5d7?w=320&h=240&fit=crop",
            },
          ]}
          audios={[
            {
              id: "4",
              title: "שיעור בגמרא",
              date: "01.01.2024",
              duration: "90 דקות",
              thumbnail:
                "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=320&h=240&fit=crop",
            },
            {
              id: "5",
              title: "הלכות תפילה",
              date: "02.01.2024",
              duration: "45 דקות",
              thumbnail:
                "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=320&h=240&fit=crop",
            },
            {
              id: "6",
              title: "פרקי אבות",
              date: "03.01.2024",
              duration: "60 דקות",
              thumbnail:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=320&h=240&fit=crop",
            },
          ]}
        />

        <ContactSection />
      </main>
    </div>
  );
}

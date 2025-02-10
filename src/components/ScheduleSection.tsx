import React from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LessonCard from "./LessonCard";
import { Calendar } from "./ui/calendar";

interface ScheduleSectionProps {
  weeklyLessons?: Array<{
    id: string;
    title: string;
    time: string;
    date: string;
    location: string;
    maxParticipants: number;
    currentParticipants: number;
  }>;
  onRegister?: (lessonId: string) => void;
}

const ScheduleSection = ({
  weeklyLessons = [
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
  ],
  onRegister = (lessonId) => console.log(`Registered for lesson ${lessonId}`),
}: ScheduleSectionProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <section className="py-16 bg-gray-100" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">לוח שיעורים שבועי</h2>
          <p className="text-gray-600">הצטרפו לשיעורים השבועיים שלנו</p>
        </div>

        <Card className="max-w-6xl mx-auto bg-white p-6">
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="schedule">לוח שיעורים</TabsTrigger>
              <TabsTrigger value="calendar">לוח שנה</TabsTrigger>
            </TabsList>

            <TabsContent value="schedule">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeklyLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    title={lesson.title}
                    time={lesson.time}
                    date={lesson.date}
                    location={lesson.location}
                    maxParticipants={lesson.maxParticipants}
                    currentParticipants={lesson.currentParticipants}
                    onRegister={() => onRegister(lesson.id)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleSection;

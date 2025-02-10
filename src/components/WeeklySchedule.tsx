import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

interface WeeklyScheduleProps {
  schedule?: Array<{
    day: string;
    classes: Array<{
      time: string;
      title: string;
      description: string;
    }>;
  }>;
}

const defaultSchedule = [
  {
    day: "יום ראשון",
    classes: [
      {
        time: "09:00",
        title: "שיעור בפרשת השבוע",
        description: "עיון מעמיק בפרשת השבוע עם מקורות מהמפרשים",
      },
      {
        time: "19:00",
        title: "הלכות שבת",
        description: "שיעור שבועי בהלכות שבת",
      },
    ],
  },
  {
    day: "יום שלישי",
    classes: [
      {
        time: "20:00",
        title: "מוסר ומחשבה",
        description: "שיעור במסילת ישרים",
      },
    ],
  },
  {
    day: "יום חמישי",
    classes: [
      {
        time: "18:00",
        title: "גמרא",
        description: "שיעור בעיון במסכת ברכות",
      },
    ],
  },
];

export default function WeeklySchedule({
  schedule = defaultSchedule,
}: WeeklyScheduleProps) {
  const [selectedClass, setSelectedClass] = React.useState<{
    title: string;
    time: string;
    day: string;
  } | null>(null);

  return (
    <div className="w-full bg-white p-6 rtl">
      <h2 className="text-3xl font-bold mb-8 text-right">לוח שיעורים שבועי</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {schedule.map((day, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-bold">{day.day}</h3>
            </div>

            <div className="space-y-4">
              {day.classes.map((lesson, lessonIndex) => (
                <div
                  key={lessonIndex}
                  className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{lesson.time}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-right mb-2">
                    {lesson.title}
                  </h4>

                  <p className="text-gray-600 text-right mb-3">
                    {lesson.description}
                  </p>

                  <Button
                    onClick={() =>
                      setSelectedClass({
                        title: lesson.title,
                        time: lesson.time,
                        day: day.day,
                      })
                    }
                    className="w-full"
                  >
                    הרשמה לשיעור
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {selectedClass && (
        <RegistrationForm
          open={true}
          onClose={() => setSelectedClass(null)}
          lessonTitle={`${selectedClass.title} - ${selectedClass.day} ${selectedClass.time}`}
        />
      )}
    </div>
  );
}

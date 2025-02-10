import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";

interface LessonCardProps {
  title?: string;
  time?: string;
  date?: string;
  location?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  onRegister?: () => void;
}

const LessonCard = ({
  title = "שיעור בפרשת השבוע",
  time = "20:00",
  date = "יום שלישי",
  location = "בית המדרש המרכזי",
  maxParticipants = 30,
  currentParticipants = 15,
  onRegister = () => console.log("Registration clicked"),
}: LessonCardProps) => {
  return (
    <Card className="w-[280px] h-[180px] p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="h-full flex flex-col justify-between" dir="rtl">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>

          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{time}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>

          <p className="text-sm text-gray-500 mt-1">{location}</p>
        </div>

        <div className="mt-2">
          <div className="text-sm text-gray-600 mb-2">
            משתתפים: {currentParticipants}/{maxParticipants}
          </div>

          <Button onClick={onRegister} className="w-full" variant="outline">
            הרשמה לשיעור
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LessonCard;

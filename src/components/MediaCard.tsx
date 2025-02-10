import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Headphones, Calendar } from "lucide-react";

interface MediaCardProps {
  type?: "video" | "audio";
  title?: string;
  date?: string;
  duration?: string;
  thumbnail?: string;
  onPlay?: () => void;
}

export default function MediaCard({
  type = "video",
  title = "שיעור בנושא פרשת השבוע",
  date = "01.01.2024",
  duration = "45 דקות",
  thumbnail = "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=320&h=240&fit=crop",
  onPlay = () => console.log("Play clicked"),
}: MediaCardProps) {
  return (
    <Card className="w-[320px] bg-white overflow-hidden">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[180px] object-cover"
        />
        {type === "video" ? (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Play className="w-12 h-12 text-white opacity-80" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Headphones className="w-12 h-12 text-white opacity-80" />
          </div>
        )}
      </div>

      <CardContent className="p-4" dir="rtl">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <span>{duration}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0" dir="rtl">
        <Button onClick={onPlay} className="w-full" variant="secondary">
          {type === "video" ? "צפה בשיעור" : "האזן לשיעור"}
        </Button>
      </CardFooter>
    </Card>
  );
}

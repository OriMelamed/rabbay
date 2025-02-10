import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";

interface MeetingSchedulerProps {
  isOpen?: boolean;
  onSchedule?: (date: Date, time: string) => void;
}

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const MeetingScheduler = ({
  isOpen = true,
  onSchedule = () => {},
}: MeetingSchedulerProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<string>(timeSlots[0]);

  const handleSchedule = () => {
    if (date) {
      onSchedule(date, time);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          תיאום פגישה
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right">תיאום פגישה עם הרב</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">בחר תאריך</label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">בחר שעה</label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="w-full">
                    <Clock className="h-4 w-4 ml-2" />
                    <SelectValue placeholder="בחר שעה" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={handleSchedule}>
                אישור פגישה
              </Button>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingScheduler;

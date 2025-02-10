import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Mail, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ContactSectionProps {
  onSubmit?: (data: any) => void;
  isSubmitting?: boolean;
  defaultOpen?: boolean;
}

const ContactSection = ({
  onSubmit = () => console.log("Form submitted"),
  isSubmitting = false,
  defaultOpen = true,
}: ContactSectionProps) => {
  return (
    <section className="w-full min-h-[400px] bg-gray-50 py-12 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">צור קשר</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
              }}
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">שם מלא</Label>
                  <Input id="name" placeholder="הכנס את שמך המלא" />
                </div>

                <div>
                  <Label htmlFor="email">דואר אלקטרוני</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="phone">מספר טלפון</Label>
                  <Input id="phone" type="tel" placeholder="050-0000000" />
                </div>

                <div>
                  <Label>סוג הפנייה</Label>
                  <RadioGroup defaultValue="general" className="mt-2">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general">פנייה כללית</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message">תוכן ההודעה</Label>
                  <Textarea
                    id="message"
                    placeholder="כתוב את הודעתך כאן..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "שולח..." : "שלח הודעה"}
                </Button>
              </div>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-4">פרטי התקשרות</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>054-1234567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>rabbi@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>שעות קבלה: א'-ה' 9:00-17:00</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

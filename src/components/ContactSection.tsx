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
    <section className="w-full bg-gray-50 py-12 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold text-center">צור קשר</h2>
          </div>

          <Card className="p-6 bg-white flex flex-col items-center text-center">
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

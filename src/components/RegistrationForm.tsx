import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Phone number must be at least 9 digits"),
});

interface RegistrationFormProps {
  open?: boolean;
  onClose?: () => void;
  className?: string;
  lessonTitle?: string;
}

export default function RegistrationForm({
  open = true,
  onClose = () => {},
  className = "",
  lessonTitle = "Weekly Torah Class",
}: RegistrationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle form submission
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={`bg-white rtl ${className}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-right">
            הרשמה לשיעור
          </DialogTitle>
          <DialogDescription className="text-right">
            {lessonTitle}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right block">שם מלא</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ישראל ישראלי"
                      {...field}
                      className="text-right"
                    />
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right block">דוא"ל</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="israel@example.com"
                      {...field}
                      className="text-right"
                    />
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right block">טלפון</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="050-0000000"
                      {...field}
                      className="text-right"
                    />
                  </FormControl>
                  <FormMessage className="text-right" />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={onClose}>
                ביטול
              </Button>
              <Button type="submit">הרשמה</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

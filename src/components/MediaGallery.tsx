import React from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Play, Volume2 } from "lucide-react";

interface MediaItem {
  id: string;
  title: string;
  duration: string;
  thumbnail?: string;
  url: string;
}

interface MediaGalleryProps {
  beforeItems?: MediaItem[];
  duringItems?: MediaItem[];
  afterItems?: MediaItem[];
}

const aboutRabbiText = [
  {
    id: "1",
    content:
      "ברית מילה היא אירוע משמח, אך גם מלווה בחששות עבור ההורים הטריים. הפקדת ביטחונו של תינוקכם בידיו של מוהל מנוסה ומוסמך יכולה להפיג חששות רבים.",
  },
  {
    id: "2",
    content:
      "ברית המילה שמתבצעת על ידי המוהל הרב שלמה לביא הינה מהירה וחלקה, ללא כאבים מיותרים, תוך שיתוף מלא של ההורים, עם הרבה תמיכה וסבלנות.",
  },
  {
    id: "3",
    content:
      "ברית במינימום כאב לתינוק, התינוק שלכם יעבור ברית במהירות האפשרית על ידי שימוש בכלים סטריליים ואילחוש מקומי אשר יפחית משמעותית את הכאב של הברית אצל התינוק.",
  },
];

const faqItems = [
  {
    id: "1",
    title: "מה עושים כדי להוריד את הצהבת?",
    content: [
      "מומלץ לשים את התינוק באור השמש ללא בגדים (רק עם טיטול) לסרוגין.",
      "מפורסם בשם הסטייפלר סגולה ליטול לתינוק ידיים פעם ביום.",
      'יש ברשותנו גמ"ח אבנים המסוגלות להורדת הצהבת.',
    ],
  },
  {
    id: "2",
    title: "האם המוהל מגיע לפני ואחרי הברית?",
    content: [
      "המוהל עובר על המכתב שחרור ונותן הנחיות לגבי הברית. המוהל מגיע גם אחרי הברית כדי להוריד את התחבושת.",
    ],
  },
  {
    id: "3",
    title: "האם הברית מתבצעת בהרדמה?",
    content: [
      "לא, זריקת ההרדמה עלולה להכאיב יותר לתינוק מאשר ברית המתבצעת לפי המסורת היהודית ולאחריה אלחוש מקומי.",
    ],
  },
];

export default function MediaGallery() {
  return (
    <div className="w-full bg-gray-50 p-6 rounded-lg" dir="rtl">
      <Tabs defaultValue="about" dir="rtl" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="about">על הרב</TabsTrigger>
          <TabsTrigger value="faq">שאלות נפוצות</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-4 md:p-10">
          <ScrollArea className="h-[600px] w-full rounded-md border p-10">
            <div className=" space-y-6 text-right">
              <div className="flex justify-between">
                <h1 className="font-bold text-center">הרב שלמה לביא</h1>
                <img
                  src="https://images.unsplash.com/photo-1504199367641-aba8151af406?w=400&h=500&fit=crop"
                  className=" rounded-full h-14 w-14"
                />
              </div>
              {aboutRabbiText.map((item) => (
                <div key={item.id} className="prose prose-lg max-w-none">
                  {item.title && (
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  )}
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-8">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-right text-blue-900 border-b pb-2">
                    {item.title}
                  </h3>
                  <div className="space-y-3">
                    {item.content.map((text, index) => (
                      <p
                        key={index}
                        className="text-gray-700 text-right leading-relaxed"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

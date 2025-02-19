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
      "מוהל מנוסה ומוסמך, המציע טקס ברית ללא כאבים מיותרים, תוך שיתוף מלא של ההורים, ועם הרבה תמיכה וסבלנות. ברית במינימום כאב לתינוק.",
  },
  {
    id: "2",
    title: "מקפיד על:",
    items: [
      "שימוש בציוד סטרילי מהמתקדמים ביותר",
      "שיטת אלחוש עדינה במיוחד להפחתת כאב",
      "תקשורת רציפה איתכם לפני, במהלך ואחרי הברית",
      "זמינות מלאה לכל שאלה או חשש",
    ],
  },
  {
    id: "3",
    content:
      "ליווי אישי וצמוד כדי להפיג את החששות שלכם, וכדי שתוכלו לחוות את ברית המילה של ילדכם כאירוע משמח ומרגש במסע ההורות שלכם.",
  },
  {
    id: "4",
    content: "תושב מודיעין.",
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
    <div className="w-full bg-white" dir="rtl">
      <h2 className="text-4xl font-bold mb-8 text-right">ברית מילה</h2>
      <Tabs defaultValue="about" dir="rtl" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100">
          <TabsTrigger value="about" className="data-[state=active]:bg-white">
            ברית עם הרב
          </TabsTrigger>
          <TabsTrigger
            value="preparations"
            className="data-[state=active]:bg-white"
          >
            הכנות לברית
          </TabsTrigger>
          <TabsTrigger value="faq" className="data-[state=active]:bg-white">
            שאלות נפוצות
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="space-y-4">
          <div className="flex flex-row h-[600px] w-full">
            {/* Content Section - 2/3 width */}
            <div className="flex-grow px-8">
              <div className="text-right">
                {aboutRabbiText.map((item, index) => (
                  <div key={item.id} className="mb-8">
                    {item.title ? (
                      <>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <ul className="list-none space-y-3">
                          {item.items?.map((listItem, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="text-gray-400 mt-1">-</span>
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section - 1/3 width */}
            <div className="w-1/3">
              <img
                src="https://ravshlomobucket.s3.us-east-1.amazonaws.com/brit.jpg"
                className="w-full h-full object-cover"
                alt="ברית מילה"
              />
            </div>
          </div>
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

        <TabsContent value="preparations" className="space-y-4">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-right text-blue-900 border-b pb-2">
                  הכנות לפני הברית
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 text-right leading-relaxed">
                    1. יש לוודא שהתינוק בריא ומוכן לברית
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed">
                    2. יש להכין את כל הציוד הנדרש כולל חיתולים וביגוד נקי
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed">
                    3. מומלץ להאכיל את התינוק כשעתיים לפני הברית
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-right text-blue-900 border-b pb-2">
                  הכנות ביום הברית
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 text-right leading-relaxed">
                    1. להגיע עם התינוק למקום הברית בזמן
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed">
                    2. להביא את כל המסמכים הנדרשים
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed">
                    3. לוודא שיש מניין (10 גברים) לטקס
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

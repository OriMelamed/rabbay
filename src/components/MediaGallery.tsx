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

const beforeBritItems: MediaItem[] = [
  {
    id: "1",
    title: "הכנות רוחניות לברית",
    duration: "20:00",
    thumbnail:
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
  {
    id: "2",
    title: "הלכות ברית מילה",
    duration: "35:00",
    thumbnail:
      "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
  {
    id: "3",
    title: "סגולות ומנהגים",
    duration: "25:00",
    thumbnail:
      "https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
];

const duringBritItems: MediaItem[] = [
  {
    id: "4",
    title: "סדר הברית",
    duration: "30:00",
    thumbnail:
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
  {
    id: "5",
    title: "תפילות וברכות",
    duration: "20:00",
    thumbnail:
      "https://images.unsplash.com/photo-1577037834423-c1a1b245ea8b?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
  {
    id: "6",
    title: "מנהגי הסעודה",
    duration: "15:00",
    thumbnail:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
];

const afterBritItems: MediaItem[] = [
  {
    id: "7",
    title: "הלכות שמירת התינוק",
    duration: "25:00",
    thumbnail:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
  {
    id: "8",
    title: "ברכת המזון",
    duration: "15:00",
    thumbnail:
      "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
  {
    id: "9",
    title: "מנהגי השבוע הראשון",
    duration: "20:00",
    thumbnail:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&auto=format&fit=crop&q=60",
    url: "#",
  },
];

export default function MediaGallery({
  beforeItems = beforeBritItems,
  duringItems = duringBritItems,
  afterItems = afterBritItems,
}: MediaGalleryProps) {
  return (
    <div className="w-full bg-gray-50 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-right mb-6">ברית מילה</h2>

      <Tabs defaultValue="before" dir="rtl" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="before">לפני הברית</TabsTrigger>
          <TabsTrigger value="during">יום הברית</TabsTrigger>
          <TabsTrigger value="after">אחרי הברית</TabsTrigger>
        </TabsList>

        <TabsContent value="before" className="space-y-4">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {beforeItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <CardContent className="p-4 text-right">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="during" className="space-y-4">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {duringItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <CardContent className="p-4 text-right">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="after" className="space-y-4">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {afterItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <CardContent className="p-4 text-right">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

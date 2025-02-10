import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import MediaCard from "./MediaCard";

interface ContentGalleryProps {
  videos?: Array<{
    id: string;
    title: string;
    date: string;
    duration: string;
    thumbnail: string;
  }>;
  audios?: Array<{
    id: string;
    title: string;
    date: string;
    duration: string;
    thumbnail: string;
  }>;
  onPlayVideo?: (id: string) => void;
  onPlayAudio?: (id: string) => void;
}

export default function ContentGallery({
  videos = [
    {
      id: "1",
      title: "פרשת השבוע - בראשית",
      date: "01.01.2024",
      duration: "45 דקות",
      thumbnail:
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=320&h=240&fit=crop",
    },
    {
      id: "2",
      title: "הלכות שבת",
      date: "02.01.2024",
      duration: "60 דקות",
      thumbnail:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=320&h=240&fit=crop",
    },
    {
      id: "3",
      title: "מוסר ומחשבה",
      date: "03.01.2024",
      duration: "30 דקות",
      thumbnail:
        "https://images.unsplash.com/photo-1533094602577-95291773e5d7?w=320&h=240&fit=crop",
    },
  ],
  audios = [
    {
      id: "4",
      title: "שיעור בגמרא",
      date: "01.01.2024",
      duration: "90 דקות",
      thumbnail:
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=320&h=240&fit=crop",
    },
    {
      id: "5",
      title: "הלכות תפילה",
      date: "02.01.2024",
      duration: "45 דקות",
      thumbnail:
        "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=320&h=240&fit=crop",
    },
    {
      id: "6",
      title: "פרקי אבות",
      date: "03.01.2024",
      duration: "60 דקות",
      thumbnail:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=320&h=240&fit=crop",
    },
  ],
  onPlayVideo = (id: string) => console.log(`Playing video ${id}`),
  onPlayAudio = (id: string) => console.log(`Playing audio ${id}`),
}: ContentGalleryProps) {
  return (
    <section className="bg-gray-100 py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ספריית תוכן</h2>

        <Tabs defaultValue="videos" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="videos">שיעורים מוקלטים</TabsTrigger>
            <TabsTrigger value="audio">שיעורי אודיו</TabsTrigger>
          </TabsList>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <MediaCard
                  key={video.id}
                  type="video"
                  title={video.title}
                  date={video.date}
                  duration={video.duration}
                  thumbnail={video.thumbnail}
                  onPlay={() => onPlayVideo(video.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audios.map((audio) => (
                <MediaCard
                  key={audio.id}
                  type="audio"
                  title={audio.title}
                  date={audio.date}
                  duration={audio.duration}
                  thumbnail={audio.thumbnail}
                  onPlay={() => onPlayAudio(audio.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

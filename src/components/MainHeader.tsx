import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface MainHeaderProps {
  rabbiName?: string;
  quote?: string;
  profileImage?: string;
  navigationItems?: Array<{
    label: string;
    href: string;
    items?: Array<{ title: string; href: string; description?: string }>;
  }>;
}

export default function MainHeader({
  rabbiName = "הרב ישראל ישראלי",
  quote = "מורה דרך רוחני ומנהיג קהילתי",
  profileImage = "https://images.unsplash.com/photo-1504199367641-aba8151af406?w=400&h=400&fit=crop",
  navigationItems = [
    { label: "צור קשר", href: "#contact" },
    { label: "אודותי", href: "#about" },
    { label: "ברית מילה", href: "#brit" },
  ],
}: MainHeaderProps) {
  return (
    <header className="relative bg-gradient-to-b from-blue-50 to-white min-h-[600px] w-full">
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <nav className="py-4" dir="rtl">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.items ? (
                    <NavigationMenuTrigger className="text-lg">
                      {item.label}
                    </NavigationMenuTrigger>
                  ) : (
                    <Button variant="ghost" asChild>
                      <NavigationMenuLink className="text-lg" href={item.href}>
                        {item.label}
                      </NavigationMenuLink>
                    </Button>
                  )}
                  {item.items && (
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink asChild>
                              <a
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.title}
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                )}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Hero Section */}
        <div
          className="flex flex-col items-center text-center pt-20 pb-16"
          dir="rtl"
        >
          <div className="mb-8">
            <img
              src={profileImage}
              alt={rabbiName}
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{rabbiName}</h1>
          <p className="text-xl text-gray-600 mb-8">{quote}</p>
          <Button size="lg" className="text-lg px-8">
            צור קשר
          </Button>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6,transparent)]" />
      </div>
    </header>
  );
}

import { Link, useLocation } from "wouter";
import { MessageCircle, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function TabBar() {
  const [location] = useLocation();

  const tabs = [
    { icon: MessageCircle, label: "小白", href: "/" },
    { icon: BookOpen, label: "性知识", href: "/learn" },
    { icon: User, label: "我的", href: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/50 pb-safe pt-2 px-6 z-50 shadow-[0_-5px_20px_rgba(168,85,247,0.05)]">
      <div className="flex justify-around items-center max-w-md mx-auto relative">
        {tabs.map((tab) => {
          const isActive = location === tab.href;
          return (
            <Link key={tab.href} href={tab.href}>
              <div
                className={cn(
                  "flex flex-col items-center gap-1 p-2 transition-all duration-300 relative group cursor-pointer",
                  isActive ? "text-primary -translate-y-2" : "text-muted-foreground hover:text-primary/70"
                )}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/20 blur-xl rounded-full -z-10" />
                )}
                
                <div
                  className={cn(
                    "p-3 rounded-2xl transition-all duration-300 shadow-sm border",
                    isActive 
                      ? "bg-gradient-to-br from-pink-400 to-purple-500 text-white border-white/20 shadow-lg scale-110" 
                      : "bg-white border-transparent shadow-none group-hover:bg-white/80"
                  )}
                >
                  <tab.icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={cn("transition-transform duration-300", isActive && "animate-pulse-subtle")}
                  />
                </div>
                <span className={cn(
                  "text-[10px] font-bold tracking-wide transition-all",
                  isActive ? "text-primary opacity-100 scale-105" : "text-muted-foreground/80"
                )}>
                  {tab.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

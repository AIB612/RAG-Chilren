import { Link, useLocation } from "wouter";
import { Home, BookOpen, ShieldCheck, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function TabBar() {
  const [location] = useLocation();

  const tabs = [
    { icon: Home, label: "首页", href: "/" },
    { icon: BookOpen, label: "学习", href: "/learn" },
    { icon: ShieldCheck, label: "测试", href: "/quiz" },
    { icon: User, label: "我的", href: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-border/40 pb-safe pt-2 px-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = location === tab.href;
          return (
            <Link key={tab.href} href={tab.href}>
              <div
                className={cn(
                  "flex flex-col items-center gap-1 p-2 transition-all duration-300",
                  isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-primary/70"
                )}
              >
                <div
                  className={cn(
                    "p-1.5 rounded-2xl transition-all duration-300",
                    isActive ? "bg-primary/10" : "bg-transparent"
                  )}
                >
                  <tab.icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={cn("transition-transform duration-300", isActive && "animate-bounce-subtle")}
                  />
                </div>
                <span className="text-[10px] font-medium tracking-wide">{tab.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

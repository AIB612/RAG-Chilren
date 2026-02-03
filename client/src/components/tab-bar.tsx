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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border pb-safe pt-2 px-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = location === tab.href;
          return (
            <Link key={tab.href} href={tab.href}>
              <div
                className={cn(
                  "flex flex-col items-center gap-1.5 p-2 cursor-pointer group",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon
                  size={24}
                  strokeWidth={1.5}
                  className={cn("transition-colors duration-200", isActive && "fill-current/10")}
                />
                <span className={cn(
                  "text-[10px] font-medium tracking-wide transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
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

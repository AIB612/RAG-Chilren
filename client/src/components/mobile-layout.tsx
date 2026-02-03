import { ReactNode } from "react";
import { TabBar } from "./tab-bar";

interface MobileLayoutProps {
  children: ReactNode;
  showTabBar?: boolean;
}

export function MobileLayout({ children, showTabBar = true }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex justify-center">
      <div className="w-full max-w-md bg-background min-h-screen shadow-2xl relative flex flex-col overflow-hidden">
        {/* WeChat-style Status Bar Mockup */}
        <div className="h-10 w-full bg-transparent flex justify-between items-center px-4 pt-2 z-50 absolute top-0 left-0 right-0 pointer-events-none">
          <div className="text-xs font-medium text-foreground/80 font-mono">9:41</div>
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded-full border-2 border-foreground/30"></div>
            <div className="w-4 h-4 rounded-full border-2 border-foreground/30"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
          {children}
        </div>

        {/* Bottom Tab Bar */}
        {showTabBar && <TabBar />}
      </div>
    </div>
  );
}

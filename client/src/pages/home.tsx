import { MobileLayout } from "@/components/mobile-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Import generated assets
import heroImage from "@/assets/hero-kids.png";
import iconSafety from "@/assets/icon-safety.png";
import iconGender from "@/assets/icon-gender.png";
import iconFamily from "@/assets/icon-family.png";

// Placeholder for the 4th icon, reusing one for now or using lucide
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <MobileLayout>
      {/* Header Section */}
      <header className="relative pt-12 px-6 pb-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h1 className="text-2xl font-bold text-primary mb-1">你好, 小朋友! 👋</h1>
            <p className="text-sm text-muted-foreground font-medium">今天想学点什么呢？</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full p-0.5 shadow-sm border-2 border-white overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full bg-secondary/20" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-primary/50" />
          </div>
          <Input 
            className="pl-10 h-12 bg-white border-none shadow-sm rounded-2xl text-sm placeholder:text-muted-foreground/70 transition-all focus-visible:ring-primary/30 group-hover:shadow-md" 
            placeholder="搜索课程..." 
          />
        </div>
      </header>

      {/* Main Content Scroll */}
      <div className="px-6 space-y-8">
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm group cursor-pointer box-shadow-cute-hover transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply z-10" />
          <img src={heroImage} alt="Hero" className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center text-white">
            <Badge className="w-fit bg-white/20 text-white hover:bg-white/30 border-none mb-2 backdrop-blur-sm">每日推荐</Badge>
            <h2 className="text-2xl font-bold mb-2 text-shadow-sm">我的身体<br/>我做主</h2>
            <Button size="sm" className="w-fit rounded-full bg-white text-primary hover:bg-white/90 font-bold px-6 shadow-lg border-2 border-transparent hover:border-white/50">
              开始学习 <Play size={14} className="ml-2 fill-current" />
            </Button>
          </div>
        </div>

        {/* Menu Grid */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-foreground/90">探索主题</h3>
            <span className="text-xs text-primary font-bold cursor-pointer hover:underline">全部</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CategoryCard 
              title="认识身体" 
              color="bg-orange-100" 
              icon={iconSafety} 
              textColor="text-orange-700"
              count="5 节课"
            />
            <CategoryCard 
              title="男孩女孩" 
              color="bg-blue-100" 
              icon={iconGender} 
              textColor="text-blue-700"
              count="3 节课"
            />
            <CategoryCard 
              title="家庭关系" 
              color="bg-pink-100" 
              icon={iconFamily} 
              textColor="text-pink-700"
              count="4 节课"
            />
            <CategoryCard 
              title="自我保护" 
              color="bg-green-100" 
              // Using a placeholder/lucide for the 4th if image not generated, or reuse safety
              icon={iconSafety} 
              textColor="text-green-700"
              count="6 节课"
            />
          </div>
        </section>

        {/* Daily Tip / Interactive Element */}
        <section>
          <h3 className="text-lg font-bold text-foreground/90 mb-4">小知识</h3>
          <Card className="p-0 border-none shadow-none bg-transparent">
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-border/50 flex items-center gap-4 relative overflow-hidden box-shadow-cute">
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-bl-full -mr-4 -mt-4"></div>
               <div className="h-12 w-12 rounded-full bg-accent/30 flex items-center justify-center shrink-0 text-accent-foreground">
                 <Star className="fill-current" />
               </div>
               <div className="flex-1 z-10">
                 <h4 className="font-bold text-foreground">坏坏的接触?</h4>
                 <p className="text-xs text-muted-foreground mt-1 line-clamp-2">如果有人让你感觉不舒服，记得要大声说“不”！并告诉爸爸妈妈。</p>
               </div>
               <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted text-muted-foreground shrink-0">
                 <ChevronRight />
               </Button>
            </div>
          </Card>
        </section>

        {/* Spacing for tab bar */}
        <div className="h-8"></div>
      </div>
    </MobileLayout>
  );
}

function CategoryCard({ title, color, icon, textColor, count }: { title: string, color: string, icon: string, textColor: string, count: string }) {
  return (
    <div className={cn(
      "aspect-square rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer box-shadow-cute",
      color
    )}>
      <div className="flex justify-between items-start">
        <span className={cn("text-xs font-bold px-2 py-1 rounded-full bg-white/40 backdrop-blur-sm", textColor)}>
          {count}
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={icon} alt={title} className="w-16 h-16 object-contain drop-shadow-md" />
        <span className={cn("text-lg font-bold", textColor)}>{title}</span>
      </div>
    </div>
  );
}

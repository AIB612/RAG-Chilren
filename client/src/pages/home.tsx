import { MobileLayout } from "@/components/mobile-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Search, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Import Minimalist assets
import heroImage from "@/assets/hero-minimal.png";
import iconBody from "@/assets/icon-body-flat.png";
import iconGender from "@/assets/icon-gender-flat.png";
import iconFamily from "@/assets/icon-family-flat.png";

export default function Home() {
  return (
    <MobileLayout>
      {/* Header Section - Minimalist & Clean */}
      <header className="pt-14 px-6 pb-2 bg-background">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">小小卫士</h1>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Health & Safety Education</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden">
             <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Profile" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
        </div>

        {/* Search - Flat & Functional */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10 h-10 bg-secondary/50 border-none rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary/20" 
            placeholder="搜索课程或知识点..." 
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 space-y-10 pb-10">
        
        {/* Hero Section - 2D Flat Style */}
        <div className="group cursor-pointer">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-blue-50/50 border border-blue-100/50 mb-4">
            <img src={heroImage} alt="Hero" className="absolute right-0 top-0 h-full w-2/3 object-contain object-right-bottom p-4 opacity-90 mix-blend-multiply" />
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-start">
              <Badge variant="outline" className="mb-3 rounded-sm border-primary/20 text-primary bg-primary/5 text-[10px] px-2 py-0.5 uppercase tracking-wider">
                Daily Focus
              </Badge>
              <h2 className="text-2xl font-bold text-foreground leading-tight mb-1">
                我的身体<br/>不仅属于我
              </h2>
              <p className="text-xs text-muted-foreground mb-0">了解界限，学会保护。</p>
            </div>
          </div>
          <div className="flex items-center text-primary text-sm font-medium pl-1 group-hover:translate-x-1 transition-transform">
            开始今日课程 <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>

        {/* Categories - Grid System */}
        <section>
          <div className="flex justify-between items-baseline mb-6 border-b border-border/40 pb-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">Modules</h3>
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">View All</span>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            <CategoryItem 
              title="认识身体" 
              subtitle="Body Parts"
              icon={iconBody} 
            />
            <CategoryItem 
              title="性别认知" 
              subtitle="Gender Identity"
              icon={iconGender} 
            />
            <CategoryItem 
              title="家庭关系" 
              subtitle="Family Units"
              icon={iconFamily} 
            />
            <CategoryItem 
              title="自我保护" 
              subtitle="Self Defense"
              // Reuse icon or use lucide fallback if needed
              icon={iconBody} 
            />
          </div>
        </section>

        {/* Featured Tip - Minimal Card */}
        <section>
          <div className="bg-slate-900 rounded-lg p-6 text-white relative overflow-hidden">
             {/* Abstract circle decoration */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
             
             <div className="relative z-10 flex gap-4 items-start">
               <div className="p-2 bg-white/10 rounded-md shrink-0">
                 <Shield className="h-5 w-5 text-emerald-400" />
               </div>
               <div>
                 <h4 className="font-semibold text-sm mb-1 text-slate-100">隐私部位保护</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">
                   背心和短裤覆盖的地方是隐私部位。除了爸爸妈妈帮你洗澡或医生检查，别人不可以看，也不可以摸。
                 </p>
               </div>
             </div>
          </div>
        </section>

      </div>
    </MobileLayout>
  );
}

function CategoryItem({ title, subtitle, icon }: { title: string, subtitle: string, icon: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-white border border-border rounded-lg mb-3 flex items-center justify-center p-8 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-300"></div>
        <img src={icon} alt={title} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{subtitle}</p>
      </div>
    </div>
  );
}

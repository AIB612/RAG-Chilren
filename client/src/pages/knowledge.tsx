import { MobileLayout } from "@/components/mobile-layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight, Heart, Pill, Stethoscope, Baby, Users, Smile, ShieldAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Assets
import iconKnowledge from "@/assets/icon-knowledge-3d.png";

const categories = [
  { id: "Abortion", title: "堕胎", subtitle: "人工流产", icon: Stethoscope, color: "from-red-400 to-pink-500" },
  { id: "Birth_Control", title: "避孕", subtitle: "生育控制", icon: Pill, color: "from-blue-400 to-cyan-500" },
  // Removed Cancer as requested
  { id: "Emergency_Contraception", title: "紧急避孕", subtitle: "事后补救", icon: Pill, color: "from-orange-400 to-amber-500" },
  { id: "Gender_Identity", title: "性别认同", subtitle: "自我认知", icon: Users, color: "from-teal-400 to-emerald-500" },
  { id: "Health_and_Wellness", title: "健康与保健", subtitle: "身心福祉", icon: Heart, color: "from-green-400 to-lime-500" },
  { id: "Pregnancy_Full", title: "怀孕全程", subtitle: "完整孕期", icon: Baby, color: "from-rose-400 to-red-500" },
  { id: "Relationships", title: "情感关系", subtitle: "亲密关系", icon: Heart, color: "from-pink-400 to-rose-500" },
  { id: "Sex_and_Pleasure", title: "性与愉悦", subtitle: "探索美好", icon: Smile, color: "from-violet-400 to-purple-500" },
  { id: "Sexual_Orientation", title: "性取向", subtitle: "爱与被爱", icon: Users, color: "from-indigo-400 to-blue-500" },
  { id: "STDs_HIV_Safer_Sex", title: "性健康", subtitle: "STD & HIV", icon: ShieldAlert, color: "from-slate-400 to-gray-500" },
];

export default function Knowledge() {
  return (
    <MobileLayout>
      <div className="bg-[#F8F5FC] min-h-screen px-6 pt-12 pb-24">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <img src={iconKnowledge} alt="Knowledge" className="w-full h-full object-contain relative z-10 drop-shadow-lg" />
             </div>
             <div>
               <h1 className="text-2xl font-bold text-foreground tracking-tight">性知识百科</h1>
               <p className="text-sm text-muted-foreground font-medium">科学、开放、包容的知识库</p>
             </div>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              className="pl-11 h-12 bg-white border-none rounded-2xl shadow-sm text-sm placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all" 
              placeholder="搜索你感兴趣的话题..." 
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative bg-white rounded-2xl p-4 flex items-center gap-4 card-3d cursor-pointer overflow-hidden"
            >
              {/* Icon Container */}
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-br shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                cat.color
              )}>
                <cat.icon size={20} strokeWidth={2.5} />
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">{cat.subtitle}</p>
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-secondary-foreground/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ChevronRight size={16} />
              </div>
              
              {/* Decorative Blur */}
              <div className={cn("absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 blur-2xl pointer-events-none bg-gradient-to-br", cat.color)} />
            </div>
          ))}
        </div>

      </div>
    </MobileLayout>
  );
}

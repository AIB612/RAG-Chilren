import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, Share2, ThumbsUp, BookOpen, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

// Assets
import imgBirthControl from "@/assets/article-birth-control.png";
import imgSTDs from "@/assets/article-stds.png";
import imgRelationships from "@/assets/article-relationships.png";

// Mock Data for Articles
const articles: Record<string, any> = {
  "Birth_Control": {
    title: "避孕 (Birth Control)",
    subtitle: "保护自己，规划未来",
    image: imgBirthControl,
    color: "from-blue-400 to-cyan-500",
    tags: ["避孕药", "避孕套", "长期避孕"],
    content: (
      <>
        <p className="mb-4 text-foreground/80 leading-relaxed">
          避孕（Birth Control）是指通过各种方法来预防意外怀孕。选择适合自己的避孕方式非常重要，它不仅关乎生育计划，更是对自己身体负责的表现。
        </p>
        
        <h3 className="text-lg font-bold text-foreground mt-6 mb-3 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-blue-400"></span>
          常见的避孕方式
        </h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
            <h4 className="font-bold text-blue-600 mb-2">1. 避孕套 (Condoms)</h4>
            <p className="text-sm text-muted-foreground">
              最常见的方式。不仅能避孕，还能有效预防性传播疾病 (STDs)。
              <br/>
              <span className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded mt-1 inline-block">推荐指数: ⭐⭐⭐⭐⭐</span>
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
            <h4 className="font-bold text-blue-600 mb-2">2. 短效避孕药 (The Pill)</h4>
            <p className="text-sm text-muted-foreground">
              需要每天按时服用。成功率很高，但无法预防 STDs。需要医生处方。
            </p>
          </div>

           <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
            <h4 className="font-bold text-blue-600 mb-2">3. 宫内节育器 (IUD)</h4>
            <p className="text-sm text-muted-foreground">
              一种放置在子宫内的小型装置，有效期可达 3-10 年。
            </p>
          </div>
        </div>

        <div className="mt-6 bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex gap-3">
          <AlertCircle className="text-blue-500 shrink-0" />
          <p className="text-xs text-blue-700/80">
            <strong>小贴士：</strong> 没有任何一种避孕方式是 100% 有效的。结合使用（例如：避孕药 + 避孕套）可以提供双重保护。
          </p>
        </div>
      </>
    )
  },
  "STDs_HIV_Safer_Sex": {
    title: "性健康与 STDs",
    subtitle: "了解风险，安全去爱",
    image: imgSTDs,
    color: "from-slate-400 to-gray-500",
    tags: ["STD", "HIV", "检测"],
    content: (
      <>
        <p className="mb-4 text-foreground/80 leading-relaxed">
          性传播疾病 (STDs) 是通过性接触传播的感染。许多 STDs 在早期没有症状，因此定期检测是保持性健康的关键。
        </p>
        
        <h3 className="text-lg font-bold text-foreground mt-6 mb-3 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-slate-400"></span>
          如何进行安全性行为？
        </h3>
        
        <ul className="list-disc pl-5 space-y-2 text-foreground/80 mb-6 marker:text-slate-400">
           <li><strong>全程使用避孕套：</strong> 这是预防 STDs 最有效的方法。</li>
           <li><strong>定期检测：</strong> 如果你有性生活，建议每年至少进行一次检测。</li>
           <li><strong>坦诚沟通：</strong> 与伴侣讨论性健康状况并不尴尬，这是负责任的表现。</li>
           <li><strong>接种疫苗：</strong> 例如 HPV 疫苗可以预防特定的病毒感染。</li>
        </ul>

         <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-600 mb-2">关于 HIV (艾滋病毒)</h4>
            <p className="text-sm text-muted-foreground">
              HIV 是一种破坏免疫系统的病毒。它是可以通过药物控制的慢性病。PrEP（暴露前预防）是一种可以有效预防 HIV 感染的药物。
            </p>
          </div>
      </>
    )
  },
  "Relationships": {
    title: "情感与亲密关系",
    subtitle: "健康的爱，从尊重开始",
    image: imgRelationships,
    color: "from-pink-400 to-rose-500",
    tags: ["同意", "界限", "沟通"],
    content: (
      <>
        <p className="mb-4 text-foreground/80 leading-relaxed">
          一段健康的关系应该让你感到安全、被尊重和快乐。无论是友情还是爱情，建立健康的边界都是至关重要的。
        </p>
        
        <h3 className="text-lg font-bold text-foreground mt-6 mb-3 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-pink-400"></span>
          健康关系的标志
        </h3>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
           <div className="bg-pink-50 p-3 rounded-xl text-center">
             <span className="block text-2xl mb-1">🤝</span>
             <span className="text-xs font-bold text-pink-700">相互尊重</span>
           </div>
           <div className="bg-pink-50 p-3 rounded-xl text-center">
             <span className="block text-2xl mb-1">🗣️</span>
             <span className="text-xs font-bold text-pink-700">开放沟通</span>
           </div>
           <div className="bg-pink-50 p-3 rounded-xl text-center">
             <span className="block text-2xl mb-1">🛑</span>
             <span className="text-xs font-bold text-pink-700">尊重界限</span>
           </div>
           <div className="bg-pink-50 p-3 rounded-xl text-center">
             <span className="block text-2xl mb-1">🥰</span>
             <span className="text-xs font-bold text-pink-700">支持彼此</span>
           </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mt-6 mb-3 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-pink-400"></span>
          什么是“知情同意” (Consent)?
        </h3>
        <p className="text-foreground/80 text-sm bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
          同意必须是<strong>自愿的、明确的、热情的</strong>。仅仅没有说“不”并不代表“是”。任何时候，你都有权改变主意。
        </p>
      </>
    )
  }
};

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const [_, setLocation] = useLocation();
  const article = articles[params.id] || articles["Birth_Control"]; // Fallback

  return (
    <MobileLayout showTabBar={false}>
      <div className="bg-white min-h-screen pb-safe relative">
        
        {/* Hero Image Header */}
        <div className="relative h-64 w-full overflow-hidden rounded-b-[2.5rem] shadow-md z-10">
           <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", article.color)} />
           <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
           <img src={article.image} alt={article.title} className="absolute bottom-0 right-0 w-48 h-48 object-contain drop-shadow-2xl translate-y-4 translate-x-4" />
           
           {/* Navbar */}
           <div className="absolute top-0 left-0 right-0 p-4 pt-safe flex justify-between items-center z-20">
             <Button 
               variant="ghost" 
               size="icon" 
               className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full"
               onClick={() => setLocation("/learn")}
             >
               <ChevronLeft />
             </Button>
             <Button 
               variant="ghost" 
               size="icon" 
               className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full"
             >
               <Share2 size={20} />
             </Button>
           </div>

           {/* Title Area */}
           <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
             <div className="flex gap-2 mb-2">
               {article.tags.map((tag: string) => (
                 <Badge key={tag} variant="secondary" className="bg-white/30 text-white border-none backdrop-blur-sm shadow-sm">
                   {tag}
                 </Badge>
               ))}
             </div>
             <h1 className="text-2xl font-bold text-white mb-1 shadow-sm">{article.title}</h1>
             <p className="text-white/90 text-sm font-medium">{article.subtitle}</p>
           </div>
        </div>

        {/* Content Body */}
        <div className="px-6 py-8">
           {article.content}

           {/* Feedback Action */}
           <div className="mt-12 flex flex-col items-center gap-4">
             <p className="text-xs text-muted-foreground">这篇文章有帮助吗？</p>
             <div className="flex gap-4">
               <Button variant="outline" className="rounded-full gap-2 border-primary/20 text-primary hover:bg-primary/5">
                 <ThumbsUp size={16} /> 有帮助
               </Button>
               <Button variant="outline" className="rounded-full gap-2 border-primary/20 text-primary hover:bg-primary/5">
                 <BookOpen size={16} /> 收藏
               </Button>
             </div>
           </div>
        </div>

      </div>
    </MobileLayout>
  );
}

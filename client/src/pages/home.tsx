import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles, MoreHorizontal, Database, CloudLightning } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Assets
import avatarXiaoBai from "@/assets/avatar-xiaobai.png";


interface Message {
  id: number;
  sender: string;
  text: string;
  sourceTag?: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: "你好呀！我是小白，你的私密健康小助手。✨" },
    { id: 2, sender: "bot", text: "关于青春期、避孕、身体变化，或者任何小秘密，都可以问我哦～ 我会优先查找专业知识库回答你！📚" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchSource, setSearchSource] = useState<"rag" | "ai" | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, searchSource]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userText = inputValue.trim();
    const newMsg = { id: Date.now(), sender: "user", text: userText };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulation of RAG + AI Logic
    // Step 1: Searching Knowledge Base (RAG)
    setTimeout(() => {
      setSearchSource("rag");
      
      // Step 2: Generating Response
      setTimeout(() => {
        setSearchSource(null);
        setIsTyping(false);
        
        // Simple keyword matching logic for better relevance
        const lowerInput = userText.toLowerCase();
        let matchedResponse = null;

        const knowledgeBase = [
          // 1. Abortion: 堕胎（人工流产）
          {
            keywords: ["堕胎", "流产", "人工流产", "打胎", "药流", "人流", "手术流产"],
            text: "堕胎（人工流产）是一种安全、合法的医疗程序。主要有两种方式：\n1. 药物流产（药流）：通常适用于怀孕11周以内，使用米非司酮和米索前列醇。\n2. 手术流产（人流）：在诊所由医生进行，通常只需几分钟。\n每个人都有权根据自己的情况做出决定。❤️",
            source: "RAG: Abortion"
          },
          {
            keywords: ["米非司酮", "米索前列醇", "堕胎药"],
            text: "堕胎药包含两种药物：米非司酮（阻断孕激素）和米索前列醇（引起子宫收缩）。这通常像一次严重的痛经。切记要在医生指导下使用。",
            source: "RAG: Abortion"
          },

          // 2. Birth_Control: 避孕（生育控制）
          {
            keywords: ["避孕", "避孕方式", "避孕方法", "不想要孩子", "预防怀孕"],
            text: "避孕方式有很多种，选择适合你的最重要：\n- 短效避孕药（每日服用，有效率99%）\n- 避孕套（唯一防性病，方便购买）\n- IUD宫内节育器（长效省心，3-12年）\n- 皮下埋植（手臂植入，3年）\n- 避孕针（每3个月注射一次）\n你需要详细了解哪一种呢？",
            source: "RAG: Birth_Control"
          },
          {
            keywords: ["避孕药", "吃药", "短效"],
            text: "短效避孕药需要每天同一时间服用，有效率可达99%。它还可以调节月经、缓解痛经。如果你经常忘吃，可能更适合长效避孕方式（如IUD）。",
            source: "RAG: Birth_Control"
          },
          {
            keywords: ["iud", "节育器", "环", "上环"],
            text: "IUD（宫内节育器）是放置在子宫内的小型T状装置。分含铜（无激素，12年）和含激素（3-7年）两种。它是最有效的长效可逆避孕方式之一。",
            source: "RAG: Birth_Control"
          },

          // 3. Emergency_Contraception: 紧急避孕
          {
            keywords: ["紧急", "事后", "plan b", "毓婷", "漏服", "套破", "意外"],
            text: "紧急避孕药（如Plan B）在无保护性行为后越早服用效果越好（最好在72小时内）。它不是堕胎药，如果已经怀孕则无效。注意：它不能作为常规避孕手段。",
            source: "RAG: Emergency_Contraception"
          },

          // 4. Gender_Identity: 性别认同
          {
            keywords: ["性别", "跨性别", "非二元", "男", "女", "认同"],
            text: "性别认同是你内心对自己性别的深层感受，可能与出生时的指定性别一致（顺性别），也可能不一致（跨性别）。这完全是个人的体验，只有你能定义你自己。",
            source: "RAG: Gender_Identity"
          },
          {
            keywords: ["代词", "称呼", "他", "她", "ta"],
            text: "使用正确的代词（如他、她、Ta/They）是对他人性别认同的基本尊重。如果不确定，礼貌地询问对方希望被如何称呼是完全可以的。",
            source: "RAG: Gender_Identity"
          },

          // 5. Health_and_Wellness: 健康与保健（健康与福祉）
          {
            keywords: ["月经", "大姨妈", "痛经", "周期", "经期"],
            text: "健康的月经周期通常为21-35天。痛经是常见的，但如果痛到无法正常生活，建议咨询医生。保持良好的卫生习惯和心情对经期健康很有帮助。",
            source: "RAG: Health_and_Wellness"
          },
          {
            keywords: ["心情", "抑郁", "焦虑", "压力", "难过"],
            text: "心理健康和身体健康一样重要。感到压力或焦虑是正常的，但如果持续时间很长，或者影响了生活，请寻求帮助（如学校心理咨询或信任的长辈）。",
            source: "RAG: Health_and_Wellness"
          },

          // 6. Pregnancy_Full: 怀孕全程（完整孕期）
          {
            keywords: ["怀孕", "有了", "怀上", "测", "两条杠", "孕期"],
            text: "怀孕是一个复杂的生理过程。最早可以在性行为后14天用验孕棒检测。如果你怀孕了，你需要考虑产前护理，并了解你的选择（抚养、领养或堕胎）。",
            source: "RAG: Pregnancy_Full"
          },
          {
            keywords: ["早孕", "反应", "恶心", "吐"],
            text: "早孕反应（如晨吐、乳房胀痛、疲劳）因人而异。如果你怀疑自己怀孕了，进行测试是确认的唯一方法。",
            source: "RAG: Pregnancy_Full"
          },

          // 7. Relationships: 情感关系（亲密关系）
          {
            keywords: ["同意", "强迫", "不要", "拒绝", "consent"],
            text: "在任何关系中，性同意（Consent）都是核心。它必须是自愿的、知情的、热情的，且可以随时撤销。没有同意的性行为就是性侵犯。你的身体由你做主。✋",
            source: "RAG: Relationships"
          },
          {
            keywords: ["分手", "虐待", "控制", "暴力", "关系"],
            text: "健康的关系建立在尊重、信任和沟通之上。如果伴侣试图控制你、羞辱你或伤害你，这是虐待的迹象。你有权结束任何让你感到不安全或不快乐的关系。",
            source: "RAG: Relationships"
          },

          // 8. Sex_and_Pleasure: 性与愉悦
          {
            keywords: ["自慰", "手淫", "diy", "高潮", "舒服"],
            text: "性与愉悦是健康生活的一部分。自慰是完全正常且安全的，是探索自己身体喜好的方式。了解什么让你感到快乐和舒适，有助于建立健康的性观念。",
            source: "RAG: Sex_and_Pleasure"
          },

          // 9. Sexual_Orientation: 性取向
          {
            keywords: ["性取向", "喜欢", "同性", "异性", "双性", "出柜"],
            text: "性取向是指你在情感、浪漫或性方面被谁吸引（如异性恋、同性恋、双性恋等）。这不需要被“治愈”或改变。发现自己的性取向是一个旅程，不用急于贴标签。🌈",
            source: "RAG: Sexual_Orientation"
          },

          // 10. STDs_HIV_Safer_Sex: 性传播疾病 (STD)、艾滋病毒 (HIV) 与安全性行为
          {
            keywords: ["std", "性病", "性传播", "梅毒", "淋病", "衣原体", "疱疹", "尖锐湿疣", "hpv"],
            text: "大多数 STD 在早期没有症状！唯一确认的方法是检测。常见 STD 包括衣原体、淋病、梅毒、HPV 等。好消息是大多数都是可以治愈或控制的。",
            source: "RAG: STDs_HIV_Safer_Sex"
          },
          {
            keywords: ["hiv", "艾滋", "aids"],
            text: "HIV 是攻击免疫系统的病毒。现在有很好的药物（抗逆转录病毒疗法）可以让感染者保持健康且不具传染性（U=U）。PrEP 是一种可以预防 HIV 的药物。",
            source: "RAG: STDs_HIV_Safer_Sex"
          },
          {
            keywords: ["安全", "避孕套", "套套", "润滑液"],
            text: "安全性行为（Safer Sex）可以保护你免受 STD 和意外怀孕。全程正确使用避孕套是最好的防护措施。定期检测也是安全性行为的一部分。",
            source: "RAG: STDs_HIV_Safer_Sex"
          },
           {
            keywords: ["痒", "异味", "分泌物", "痛"],
            text: "私处的不适（痒、痛、异味）可能是感染迹象（如阴道炎或 STD），也可能只是过敏。建议去医院做分泌物检查，不要自己盲目用药。",
            source: "RAG: STDs_HIV_Safer_Sex"
          }
        ];

        // Find best match
        for (const entry of knowledgeBase) {
          if (entry.keywords.some(k => lowerInput.includes(k))) {
            matchedResponse = entry;
            break;
          }
        }

        // Default fallback if no keywords match
        if (!matchedResponse) {
          matchedResponse = {
            text: "这个问题很有深度呢！🤔 作为一个AI助手，我建议你可以去我们的【知识库】版块查找更详细的信息。那里有关于避孕、性健康和人际关系的专业文章。或者你可以换个说法问我？",
            source: "AI: General Knowledge"
          };
        }
        
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          sender: "bot", 
          text: matchedResponse.text,
          sourceTag: matchedResponse.source
        }]);
      }, 1000 + Math.random() * 1000); // Randomize wait time slightly for natural feel
    }, 600); // Shorter search time
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100vh-80px)] bg-gradient-to-b from-purple-50/50 to-white">
        
        {/* Header */}
        <header className="px-6 py-6 flex items-center justify-between bg-white/60 backdrop-blur-xl border-b border-white/60 sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 p-0.5 shadow-lg overflow-hidden ring-2 ring-white">
                <img src={avatarXiaoBai} alt="小白" className="w-full h-full object-cover bg-white rounded-full scale-110" />
              </div>
              <div className="absolute bottom-1 right-0 w-3.5 h-3.5 bg-green-400 border-[3px] border-white rounded-full shadow-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                小白
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold shadow-inner">Online</span>
              </h1>
              <p className="text-xs text-muted-foreground font-medium">由 RAG 知识库驱动</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-white/50 rounded-full h-10 w-10">
            <MoreHorizontal size={22} />
          </Button>
        </header>

        {/* Chat Area */}
        <ScrollArea className="flex-1 px-4 py-4" ref={scrollRef}>
          <div className="space-y-6 pb-4">
            <div className="flex justify-center my-4">
              <span className="text-[10px] text-muted-foreground bg-white/60 px-3 py-1 rounded-full shadow-sm border border-white/50 backdrop-blur-sm">
                今天 14:30
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex w-full",
                  msg.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn("flex max-w-[85%] gap-3", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}>
                  {msg.sender === "bot" && (
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 p-0.5 shadow-md overflow-hidden shrink-0 self-end mb-2">
                       <img src={avatarXiaoBai} alt="Bot" className="w-full h-full object-cover bg-white rounded-full scale-110" />
                     </div>
                  )}
                  
                  <div className="flex flex-col gap-1">
                    <div className={cn(
                      "px-5 py-3.5 text-sm leading-relaxed relative group transition-all duration-300 shadow-sm",
                      msg.sender === "user" 
                        ? "bubble-right rounded-br-none bg-gradient-to-br from-pink-500 to-purple-600 border-none text-white font-medium" 
                        : "bubble-left rounded-bl-none bg-white font-medium text-slate-700"
                    )}>
                      {msg.text}
                      {/* Tiny 3D reflection effect overlay */}
                      <div className="absolute inset-0 rounded-inherit bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-50"></div>
                    </div>
                    
                    {/* Source Tag for Bot Messages */}
                    {msg.sender === "bot" && msg.sourceTag && (
                      <div className="flex items-center gap-1.5 ml-1 opacity-70">
                         <Database size={10} className="text-purple-500" />
                         <span className="text-[10px] text-purple-600 font-bold">{msg.sourceTag}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Simulated Logic Status Indicators */}
            {searchSource === "rag" && (
               <div className="flex justify-start w-full px-14 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-xs text-purple-600 bg-purple-50/80 px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
                     <Database size={12} className="animate-pulse" />
                     <span>正在检索专业知识库...</span>
                  </div>
               </div>
            )}
            
            {/* Typing Indicator */}
            {isTyping && !searchSource && (
              <div className="flex justify-start w-full px-14 animate-in fade-in slide-in-from-bottom-2">
                 <div className="bg-white border border-purple-50 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm w-fit">
                   <div className="flex gap-1.5">
                     <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-75"></div>
                     <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-150"></div>
                   </div>
                 </div>
              </div>
            )}

          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 bg-white/80 backdrop-blur-2xl border-t border-white/50 pb-6">
          <div className="relative flex items-center gap-3">
            <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:bg-purple-50 hover:text-primary rounded-full h-12 w-12 transition-colors">
              <Sparkles size={22} />
            </Button>
            <div className="flex-1 relative group">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="问问小白..."
                className="w-full h-12 pl-5 pr-4 bg-white border-none rounded-full shadow-inner-highlight ring-1 ring-purple-100 focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all placeholder:text-muted-foreground/50 text-foreground text-sm font-medium group-hover:shadow-md transition-shadow"
              />
            </div>
            <Button 
              onClick={handleSend}
              className={cn(
                "h-12 w-12 rounded-full shrink-0 transition-all duration-300 shadow-lg flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 border-none",
                inputValue.trim() 
                  ? "scale-100 opacity-100 hover:scale-105 active:scale-95" 
                  : "bg-muted text-muted-foreground scale-90 opacity-50 cursor-not-allowed bg-none"
              )}
              disabled={!inputValue.trim()}
            >
              <Send size={20} className="ml-0.5 mt-0.5 text-white" />
            </Button>
          </div>
        </div>

      </div>
    </MobileLayout>
  );
}

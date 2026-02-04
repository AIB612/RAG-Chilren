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
          // Birth Control General
          {
            keywords: ["避孕", "避孕方式", "避孕方法", "不想要孩子", "预防怀孕"],
            text: "目前有很多种有效的避孕方式！最常见的包括：\n1. 短效避孕药（每日服用，有效率99%）\n2. 避孕套（唯一防性病，方便购买）\n3. IUD宫内节育器（长效省心，有效期3-12年）\n4. 皮下埋植（手臂植入，有效期3年）\n5. 紧急避孕药（事后72小时内补救）。\n\n你需要根据自己的生活习惯来选，我可以为你详细介绍其中某一种哦！👩‍⚕️",
            source: "RAG: Birth Control Overview"
          },
          // Birth Control Specifics
          {
            keywords: ["避孕药", "吃药", "短效"],
            text: "根据【Planned Parenthood】的资料：避孕药的有效率可达99%，但必须每天按时服用。如果你经常忘记吃药，可能更适合宫内节育器(IUD)或避孕贴。需要我详细介绍其他避孕方式吗？💊",
            source: "RAG: Birth Control Methods"
          },
          {
            keywords: ["iud", "节育器", "环"],
            text: "IUD（宫内节育器）是非常高效的长效避孕方式。分两种：含铜（无激素，有效期12年）和含激素（有效期3-7年）。置入后你就不用操心避孕的事了，而且随时可以取出恢复生育能力。",
            source: "RAG: Long-Acting Reversible Contraception"
          },
          {
            keywords: ["避孕套", "套套", "安全套"],
            text: "避孕套是唯一能同时预防怀孕和性传播疾病(STDs)的方法！建议每次性行为都全程使用。如果搭配润滑液使用，体验会更好哦。🛡️",
            source: "RAG: Barrier Methods"
          },
          {
            keywords: ["紧急", "事后", "plan b", "漏服", "套破"],
            text: "紧急避孕药（如毓婷/Plan B）在无保护性行为后越早吃越有效，最好在72小时内服用。但它不能作为常规避孕手段，因为它比常规避孕药副作用大且失败率略高。",
            source: "RAG: Emergency Contraception"
          },
          // STDs
          {
            keywords: ["std", "性病", "艾滋", "hiv", "梅毒", "疱疹", "尖锐湿疣", "hpv", "淋病", "衣原体"],
            text: "大多数性传播疾病(STDs)在早期是没有症状的，所以“看起来健康”不代表没有感染。唯一确认的方法就是去检测。Planned Parenthood 或当地医院都可以提供保密的检测服务。这一步是保护你自己和伴侣的关键！🏥",
            source: "RAG: STD Testing & Prevention"
          },
          {
            keywords: ["痒", "异味", "分泌物", "痛"],
            text: "私处的瘙痒、异味或异常分泌物可能是感染的迹象（如霉菌、细菌性阴道炎或滴虫），也可能只是普通的过敏。建议不要自己乱用药，去医院做一个简单的分泌物检查最放心。",
            source: "RAG: Vaginal Health"
          },
          // Pregnancy & Abortion
          {
            keywords: ["怀孕", "有了", "怀上", "测", "两条杠"],
            text: "如果你担心怀孕，最早可以在性行为后14天用验孕棒测试，或者等月经推迟一周后再测最准。如果意外怀孕了，不论你决定生下来、领养还是堕胎，都有相应的支持资源。",
            source: "RAG: Pregnancy & Options"
          },
          {
            keywords: ["堕胎", "流产", "打胎", "人流", "药流"],
            text: "堕胎是安全合法的医疗程序。主要有两种方式：\n1. 药物流产（药流）：适用于怀孕11周内，像一次严重的痛经。\n2. 手术流产（人流）：在诊所进行，只需几分钟，安全高效。\n不论选择哪种，都要去正规医院哦。",
            source: "RAG: Abortion Information"
          },
          // General Health & Consent
          {
            keywords: ["月经", "大姨妈", "痛经", "周期"],
            text: "每个人的月经周期都不太一样，21-35天都算正常。如果痛经严重影响生活，或者月经量突然变化很大，建议咨询医生。有时候短效避孕药也可以用来调节月经和缓解痛经哦。",
            source: "RAG: Menstrual Health"
          },
          {
            keywords: ["同意", "强迫", "不要", "拒绝"],
            text: "记住，性同意(Consent)必须是自愿、清醒、热情且可随时撤销的。如果对方施压、强迫或者你在醉酒状态下，那都不是有效的同意。你的身体完全由你自己做主。✋",
            source: "RAG: Relationships & Consent"
          },
          {
            keywords: ["自慰", "手淫", "diy"],
            text: "自慰是完全正常、健康且安全的行为，是探索自己身体喜好的好方式。它不会导致失明、不孕或任何健康问题。尽情享受属于你自己的快乐吧！✨",
            source: "RAG: Sex & Pleasure"
          },
          {
            keywords: ["心情", "抑郁", "难过", "焦虑"],
            text: "青春期情绪波动大是很正常的，但如果这种低落持续很久，或者让你不想做平时喜欢的事，可能需要找人聊聊。学校的心理老师或信任的长辈都是很好的倾诉对象。",
            source: "RAG: Mental Wellness"
          },
          // Greetings
          {
            keywords: ["你好", "hello", "hi", "hey", "在吗"],
            text: "你好呀！👋 我是小白，很高兴见到你。今天有什么想聊的吗？无论是关于身体的小秘密，还是心里的困惑，我都在这里陪着你哦。✨",
            source: "AI: Greeting"
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

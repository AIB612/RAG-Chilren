import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles, MoreHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Assets
import avatarXiaoBai from "@/assets/avatar-xiaobai.png";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "你好呀！我是小白，你的私密健康小助手。✨" },
    { id: 2, sender: "bot", text: "关于青春期、身体变化或者小秘密，都可以问我哦～ 我会保守秘密的！🤫" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMsg = { id: Date.now(), sender: "user", text: inputValue };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Mock bot response
    setTimeout(() => {
      const responses = [
        "这是一个很好的问题！让我们一起探索一下...",
        "摸摸头～这种感觉是正常的哦。",
        "小白正在查找相关的健康知识...",
        "记住，你的身体属于你自己，你有权说不！🛡️"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: "bot", text: randomResponse }]);
    }, 1000);
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
              <p className="text-xs text-muted-foreground font-medium">随时陪伴你的成长伙伴</p>
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
                </div>
              </div>
            ))}
            
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

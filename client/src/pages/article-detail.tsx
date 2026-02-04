import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, Share2, ThumbsUp, BookOpen, AlertCircle, Info, HelpCircle, CheckCircle2, Heart, XCircle, Baby } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

// Assets
import imgBirthControl from "@/assets/article-birth-control.png";
import imgBcPill from "@/assets/article-bc-pill.png";
import imgBcIud from "@/assets/article-bc-iud.png";
import imgBcImplant from "@/assets/article-bc-implant.png";
import imgBcCondom from "@/assets/article-bc-condom.png";
import imgBcShot from "@/assets/article-bc-shot.png";
import imgBcPatch from "@/assets/article-bc-patch.png";
import imgBcRing from "@/assets/article-bc-ring.png";
import imgSTDs from "@/assets/article-stds.png";
import imgRelationships from "@/assets/article-relationships.png";
import imgAbortion from "@/assets/article-abortion.png";
import imgEmergencyPill from "@/assets/article-emergency-pill.png";
import imgGenderIdentity from "@/assets/article-gender-identity.png";
import imgWellness from "@/assets/article-wellness.png";
import imgPregnancy from "@/assets/article-pregnancy.png";
import imgPleasure from "@/assets/article-pleasure.png";
import imgOrientation from "@/assets/article-orientation.png";

// Micro Assets
import imgMicroAbortionPills from "@/assets/article-micro-abortion-pills.png";
import imgMicroClinic from "@/assets/article-micro-clinic.png";
import imgMicroClock from "@/assets/article-micro-clock-72h.png";
import imgMicroPronouns from "@/assets/article-micro-pronouns.png";
import imgMicroUterus from "@/assets/article-micro-uterus.png";
import imgMicroFetus1 from "@/assets/article-micro-fetus-1.png";
import imgMicroAnatomy from "@/assets/article-micro-anatomy.png";
import imgMicroTestKit from "@/assets/article-micro-test-kit.png";
import imgMicroChat from "@/assets/article-micro-chat-bubbles.png";

// Reusable Components for Articles
const SectionTitle = ({ color, children }: { color: string, children: React.ReactNode }) => (
  <h3 className="text-lg font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
    <span className={cn("w-1.5 h-6 rounded-full", color)}></span>
    {children}
  </h3>
);

const InfoCard = ({ title, children, colorClass }: { title: string, children: React.ReactNode, colorClass: string }) => (
  <div className={cn("p-5 rounded-2xl shadow-sm border mb-4 bg-white", colorClass)}>
    <h4 className="font-bold mb-2 flex items-center gap-2 text-base">
      <Info size={16} className="shrink-0" />
      {title}
    </h4>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="mb-4 border-b border-border/50 pb-4 last:border-0">
    <h5 className="font-bold text-sm text-foreground mb-1 flex gap-2">
      <HelpCircle size={14} className="mt-0.5 text-primary shrink-0" />
      {question}
    </h5>
    <p className="text-xs text-muted-foreground pl-6 leading-relaxed">{answer}</p>
  </div>
);

const ListSection = ({ title, items, icon: Icon = CheckCircle2, color = "text-primary" }: { title?: string, items: string[], icon?: any, color?: string }) => (
  <div className="mb-6">
    {title && <h4 className="font-bold text-sm mb-3">{title}</h4>}
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="bg-white p-3 rounded-xl border border-border/50 flex items-start gap-3 shadow-sm">
          <Icon size={16} className={cn("mt-0.5 shrink-0", color)} />
          <span className="text-sm text-foreground/80 leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Mock Data for Articles
const articles: Record<string, any> = {
  "Birth_Control": {
    title: "避孕 (Birth Control)",
    subtitle: "保护自己，规划未来",
    image: imgBirthControl,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["避孕药", "避孕套", "长期避孕", "IUD"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕（Birth Control）是指通过各种方法来预防意外怀孕。选择适合自己的避孕方式非常重要，它不仅关乎生育计划，更是对自己身体负责的表现。没有一种避孕方式适合所有人，你需要根据自己的生活方式、健康状况和需求来选择。
        </p>
        
        <SectionTitle color="bg-blue-400">常见的避孕方式对比</SectionTitle>
        
        <div className="space-y-6">
          <InfoCard title="皮下埋植剂 (The Implant)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcImplant} alt="Implant" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>一种火柴棍大小的细管，由医生植入上臂皮下。释放孕激素来阻止排卵。</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: &gt;99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效期: 3-5年</span>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Implant_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 了解详细操作与副作用 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="宫内节育器 (IUD)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
             <img src={imgBcIud} alt="IUD" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
             <p>放置在子宫内的T形装置。分含铜（无激素）和含激素两种。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: &gt;99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效期: 3-12年</span>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_IUD_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 含铜 vs 含激素的区别 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="短效避孕药 (The Pill)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcPill} alt="Pill" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>每天口服一片。如果不漏服，效果极佳。有调节月经、改善痤疮等额外益处。</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 91-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每日</span>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Pill_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 漏服了怎么办？详细指南 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="避孕套 (Condoms)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcCondom} alt="Condom" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>唯一能同时预防 STDs 的方法。无副作用，随买随用。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 85-98%</span>
              <span className="px-2 py-1 bg-green-100 rounded text-green-600">防 STDs: 是</span>
            </div>
             <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Condom_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 正确使用步骤 (图解) <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="避孕针 (The Shot)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcShot} alt="Shot" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>每3个月注射一次孕激素。私密性好，不用每天记着吃药。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 94-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每3个月</span>
            </div>
          </InfoCard>

          <InfoCard title="避孕贴 (The Patch)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcPatch} alt="Patch" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>每周在皮肤上贴一片。释放激素通过皮肤进入血液。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 91-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每周</span>
            </div>
          </InfoCard>

          <InfoCard title="阴道避孕环 (NuvaRing)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcRing} alt="Ring" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>柔软的透明环，自行放入阴道内。放置3周，取出1周（来月经）。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 91-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每月</span>
            </div>
          </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">如何选择？</SectionTitle>
        <ListSection items={[
          "我想很多年都不用担心怀孕：选择 IUD 或 皮下埋植",
          "我不想让体内有激素：选择 铜IUD 或 避孕套",
          "我想同时预防性病：必须配合使用 避孕套",
          "我想要规律的月经：选择 短效避孕药"
        ]} />

        <SectionTitle color="bg-blue-400">常见误区 (FAQ)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <FaqItem 
            question="长期服用避孕药会导致不孕吗？" 
            answer="不会。停药后，你的生育能力通常会很快恢复。避孕药不会在这个过程中“积累”在体内。" 
          />
          <FaqItem 
            question="体外射精能避孕吗？" 
            answer="非常不可靠。射精前的液体中可能含有精子。它的失败率很高（约22%），不建议作为主要避孕手段。" 
          />
          <FaqItem 
            question="哺乳期会怀孕吗？" 
            answer="会的。虽然哺乳会降低受孕几率，但这并不是一种可靠的避孕方法。产后应尽快咨询医生选择避孕措施。" 
          />
        </div>
      </>
    )
  },
  },
  
  // ------------------------------------
  // DETAILED SUB-ARTICLES (BIRTH CONTROL)
  // ------------------------------------
  "BC_Pill_Detail": {
    title: "短效避孕药详解",
    subtitle: "每日一片，科学避孕",
    image: imgBcPill,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["漏服指南", "副作用", "使用方法"],
    content: (
      <>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
           <h4 className="font-bold text-blue-800 mb-2">💊 它是如何工作的？</h4>
           <p className="text-sm text-blue-700/80 leading-relaxed">
             短效避孕药含有激素（通常是雌激素和孕激素），它们主要通过三种方式防止怀孕：
           </p>
           <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-blue-700/80">
             <li>阻止卵巢排卵。</li>
             <li>使宫颈粘液变稠，阻止精子游向卵子。</li>
             <li>使子宫内膜变薄，受精卵难以着床。</li>
           </ul>
        </div>

        <SectionTitle color="bg-blue-400">漏服了怎么办？(重要)</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="漏服 1 片" colorClass="border-yellow-100 bg-yellow-50/50 text-yellow-800">
             <p className="text-sm font-bold">尽快补服。</p>
             <p className="text-xs mt-1">
               如果想起来的时候已经是第二天吃药的时间了，就一次吃两片。你不需要额外的避孕措施。
             </p>
           </InfoCard>
           
           <InfoCard title="漏服 2 片或更多" colorClass="border-red-100 bg-red-50/50 text-red-800">
             <p className="text-sm font-bold">不仅要补服，还需要备用避孕措施！</p>
             <ul className="list-disc pl-4 mt-2 space-y-1 text-xs">
               <li>尽快服用最后漏服的那一片（哪怕意味着一天吃两片）。扔掉之前漏服的药片。</li>
               <li>接下来的7天内，如果你发生性行为，<span className="font-bold">必须使用避孕套</span>。</li>
               <li>如果漏服发生在第一周，并且你有无保护性行为，你可能需要紧急避孕药。</li>
             </ul>
           </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">常见副作用</SectionTitle>
        <ListSection items={[
          "不规则出血（点滴出血）：通常在前3个月最常见。",
          "恶心：建议在睡前或饭后服用。",
          "乳房胀痛：通常几周后会消失。",
          "情绪变化：如果你觉得情绪受到严重影响，可以咨询医生换一种品牌的药。"
        ]} />

        <SectionTitle color="bg-blue-400">额外的好处</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
           <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
             <li>让月经更规律、量更少、痛经更轻。</li>
             <li>改善痤疮（痘痘）。</li>
             <li>降低患卵巢癌和子宫内膜癌的风险。</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_Condom_Detail": {
    title: "避孕套完全指南",
    subtitle: "双重保护：避孕 + 防病",
    image: imgBcCondom,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["使用图解", "材质选择", "防破裂"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕套（Condoms）是唯一能同时预防怀孕和性传播疾病 (STDs) 的方法。正确使用避孕套，有效率可达98%。
        </p>

        <SectionTitle color="bg-blue-400">正确使用步骤</SectionTitle>
        <div className="space-y-3">
           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">1</div>
             <div>
               <p className="text-sm font-bold text-foreground">检查有效期和包装</p>
               <p className="text-xs text-muted-foreground">确保包装中有空气（像个小气囊），这说明没有破损。过期的避孕套容易破裂。</p>
             </div>
           </div>
           
           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">2</div>
             <div>
               <p className="text-sm font-bold text-foreground">分清正反面</p>
               <p className="text-xs text-muted-foreground">它应该像一顶卷边的小帽子。如果卷边在里面，那就是反了。如果不小心戴反了，<span className="text-red-500">扔掉换一个新的</span>，不要翻过来再用（上面可能已经沾有精液）。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">3</div>
             <div>
               <p className="text-sm font-bold text-foreground">捏住储精囊</p>
               <p className="text-xs text-muted-foreground">戴上之前，捏住顶端的小囊排出空气。这给精液留出了空间，防止避孕套破裂。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">4</div>
             <div>
               <p className="text-sm font-bold text-foreground">戴到底</p>
               <p className="text-xs text-muted-foreground">在勃起的阴茎上，将避孕套一直展开到根部。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">5</div>
             <div>
               <p className="text-sm font-bold text-foreground">及时撤出</p>
               <p className="text-xs text-muted-foreground">射精后，在阴茎疲软之前，按住避孕套的根部撤出。防止精液溢出。</p>
             </div>
           </div>
        </div>

        <SectionTitle color="bg-blue-400">常见错误</SectionTitle>
        <ListSection items={[
          "戴两层：错！两层避孕套摩擦更容易破裂。",
          "使用油性润滑剂：错！凡士林、婴儿油会腐蚀乳胶，导致避孕套破裂。请使用水性或硅基润滑剂。",
          "放在钱包里：错！摩擦和体温会使避孕套老化变脆。"
        ]} />
      </>
    )
  },

  "BC_IUD_Detail": {
    title: "宫内节育器 (IUD)",
    subtitle: "一劳永逸的选择",
    image: imgBcIud,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["含铜IUD", "曼月乐", "放置过程"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          宫内节育器 (Intrauterine Device, IUD) 是一个T形的小装置，由医生放入子宫内。它是目前最有效的可逆避孕方法之一。一旦取出，受孕能力立即恢复。
        </p>

        <SectionTitle color="bg-blue-400">两种类型的区别</SectionTitle>
        <div className="grid grid-cols-1 gap-4 mb-6">
           <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
             <h4 className="font-bold text-orange-800 mb-2">含铜 IUD (ParaGard)</h4>
             <ul className="list-disc pl-4 space-y-1 text-xs text-orange-700">
               <li><strong>无激素：</strong> 适合不想使用激素的人。</li>
               <li><strong>原理：</strong> 铜离子对精子有毒，阻止精子受精。</li>
               <li><strong>副作用：</strong> 可能导致月经量变多、痛经加重。</li>
               <li><strong>有效期：</strong> 最长可达 10-12 年。</li>
               <li><strong>额外技能：</strong> 可作为紧急避孕措施！</li>
             </ul>
           </div>

           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
             <h4 className="font-bold text-blue-800 mb-2">含激素 IUD (Mirena/Kyleena)</h4>
             <ul className="list-disc pl-4 space-y-1 text-xs text-blue-700">
               <li><strong>含孕激素：</strong> 释放微量孕激素。</li>
               <li><strong>原理：</strong> 增稠宫颈粘液，变薄子宫内膜。</li>
               <li><strong>副作用：</strong> 可能导致不规则出血。</li>
               <li><strong>有效期：</strong> 3-8 年（取决于品牌）。</li>
               <li><strong>额外技能：</strong> 通常会让月经变少，甚至消失（这是无害的）。</li>
             </ul>
           </div>
        </div>

        <SectionTitle color="bg-blue-400">放置过程痛吗？</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <p className="text-sm text-muted-foreground mb-3">
            这因人而异。大多数人会感到强烈的痉挛痛（像严重的痛经），持续几分钟。
          </p>
          <p className="text-sm font-bold text-foreground mb-2">建议：</p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
            <li>在手术前1小时服用布洛芬 (Ibuprofen)。</li>
            <li>安排在月经期间放置（此时宫颈较软）。</li>
            <li>放好后休息一天，对自己好一点。</li>
          </ul>
        </div>
      </>
    )
  },

  "BC_Implant_Detail": {
    title: "皮下埋植剂 (The Implant)",
    subtitle: "长效、隐形、省心",
    image: imgBcImplant,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["操作过程", "副作用", "恢复生育"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          皮下埋植剂（如 Nexplanon）是一根火柴棍大小的柔韧塑料棒。医生会把它植入你上臂内侧的皮肤下。它释放孕激素来防止怀孕。
        </p>

        <SectionTitle color="bg-blue-400">为什么选择它？</SectionTitle>
        <ListSection items={[
          "极其有效：失败率只有 0.05%，比结扎手术还可靠。",
          "省心：一旦植入，3-5年不用管它。",
          "隐形：别人看不出来，只有你自己能摸到它。",
          "可逆：想怀孕了？找医生取出，受孕能力很快恢复。"
        ]} />

        <SectionTitle color="bg-blue-400">植入过程</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ol className="list-decimal pl-4 space-y-2 text-xs text-muted-foreground">
             <li>医生会先给你的手臂局部麻醉（打一针麻药）。</li>
             <li>使用特殊的植入器，将小棒滑入皮下。你会有感觉，但不会痛。</li>
             <li>整个过程只需要几分钟。</li>
             <li>之后手臂可能会淤青几天，会有绷带包扎。</li>
           </ol>
        </div>

        <SectionTitle color="bg-blue-400">主要副作用</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
           <p className="text-sm text-muted-foreground mb-2">
             最常见的副作用是<strong>月经模式的改变</strong>：
           </p>
           <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
             <li>大约1/3的人会月经停止（这是安全的）。</li>
             <li>大约1/3的人会有不规则出血或点滴出血。</li>
             <li>少数人可能会有较长时间的出血。</li>
           </ul>
           <p className="text-xs text-blue-600 mt-3 font-medium">通常给身体3-6个月的时间去适应。</p>
        </div>
      </>
    )
  },

  "Abortion": {
    title: "堕胎 (Abortion)",
    subtitle: "安全、合法的医疗程序",
    image: imgAbortion,
    color: "from-red-400 to-pink-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["药物流产", "手术流产", "安全性"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          堕胎（Abortion）是一种终止妊娠的医疗手段。它是一项非常常见的医疗保健服务。在正规医疗机构进行的堕胎是非常安全的，比拔牙还要安全。了解不同类型的堕胎方式可以帮助你做出适合自己的决定。
        </p>

        <SectionTitle color="bg-pink-400">主要类型详解</SectionTitle>
        
        <div className="space-y-4">
          <InfoCard title="药物流产 (The Abortion Pill)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <img src={imgMicroAbortionPills} alt="Pills" className="w-16 h-16 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-pink-100" />
            <p className="mb-2">通常适用于怀孕早期（10-11周以内）。包含两步：</p>
            <ul className="list-disc pl-4 space-y-1 text-xs mb-2">
              <li><strong>米非司酮：</strong> 阻断孕酮，使妊娠停止发展。</li>
              <li><strong>米索前列醇：</strong> 引起子宫收缩，排出妊娠组织（通常在家中发生）。</li>
            </ul>
            <p className="text-xs text-muted-foreground">感受：类似严重的痛经和大量出血，过程持续几小时。</p>
          </InfoCard>

          <InfoCard title="手术流产 (In-Clinic Abortion)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <img src={imgMicroClinic} alt="Procedure" className="w-16 h-16 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-pink-100" />
            <p className="mb-2">由医生在诊所进行。常见的有“负压吸引术”。</p>
             <ul className="list-disc pl-4 space-y-1 text-xs mb-2">
              <li><strong>高效：</strong> 过程通常只需5-10分钟。</li>
              <li><strong>舒适度：</strong> 医生会使用麻醉或镇痛药物。</li>
            </ul>
             <p className="text-xs text-muted-foreground">感受：术后可能会有几天的轻微出血和痉挛。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-pink-400">术后护理</SectionTitle>
        <ListSection color="text-pink-500" items={[
          "休息：给自己几天时间恢复体力。",
          "避免感染：术后2周内避免阴道冲洗、性生活或使用卫生棉条。",
          "观察症状：如果出现发烧、剧烈腹痛或出血量过大（一小时湿透两片卫生巾），请立即就医。",
          "情绪支持：感到如释重负、悲伤或复杂的情绪都是正常的。给自己一点时间。"
        ]} />

        <SectionTitle color="bg-pink-400">常见问题</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <FaqItem 
            question="堕胎会增加患乳腺癌的风险吗？" 
            answer="不会。广泛的科学研究表明，堕胎与乳腺癌之间没有联系。" 
          />
          <FaqItem 
            question="堕胎会影响未来的生育能力吗？" 
            answer="通常不会。安全、合法的堕胎不会导致不孕。事实上，堕胎后几周内你就可能再次怀孕，所以如果你不打算怀孕，请立即开始避孕。" 
          />
        </div>
      </>
    )
  },
  "Emergency_Contraception": {
    title: "紧急避孕",
    subtitle: "事后补救措施",
    image: imgEmergencyPill,
    color: "from-orange-400 to-amber-500",
    accentColor: "bg-orange-500",
    lightColor: "bg-orange-50 border-orange-100 text-orange-700",
    tags: ["紧急避孕药", "黄金72小时", "IUD"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          紧急避孕（Emergency Contraception）是在无保护性行为或避孕失败（如避孕套破裂、漏服避孕药）后，用于防止怀孕的方法。它不能终止已经发生的妊娠（它不是堕胎药）。
        </p>
        
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center mb-6 relative overflow-hidden">
          <div className="absolute right-2 top-2 opacity-20"><img src={imgMicroClock} className="w-16 h-16" /></div>
          <h4 className="text-xl font-bold text-orange-600 mb-2 relative z-10">⏰ 越早越好</h4>
          <p className="text-sm text-orange-800 relative z-10">虽然有些方法在5天内有效，但<span className="font-bold">24小时内</span>服用效果最好。</p>
        </div>

        <SectionTitle color="bg-orange-400">你的选择</SectionTitle>
         <div className="space-y-4">
          <InfoCard title="左炔诺孕酮片 (Plan B / 毓婷)" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
            <p className="text-sm">最常见的非处方药。性行为后72小时（3天）内服用有效。</p>
            <p className="text-xs mt-2 text-muted-foreground">注意：对于体重指数 (BMI) 较高的女性，效果可能降低。</p>
          </InfoCard>

          <InfoCard title="醋酸乌利司他 (Ella)" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
            <p className="text-sm">处方药。性行为后120小时（5天）内服用有效，且效果比普通药片更强。</p>
          </InfoCard>

          <InfoCard title="铜宫内节育器 (Copper IUD)" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
            <p className="text-sm">最有效的紧急避孕方式（有效率&gt;99.9%）。如果在性行为后5天内放入，不仅能紧急避孕，还能提供长达10年的保护。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-orange-400">副作用</SectionTitle>
        <ListSection color="text-orange-500" items={[
          "恶心或呕吐（如果服药后2小时内呕吐，需要补服）",
          "下一次月经提前或推迟",
          "乳房胀痛、头痛或疲劳",
          "这种不适通常在24小时内消失"
        ]} />
      </>
    )
  },
  "Gender_Identity": {
    title: "性别认同",
    subtitle: "我是谁？",
    image: imgGenderIdentity,
    color: "from-teal-400 to-emerald-500",
    accentColor: "bg-teal-500",
    lightColor: "bg-teal-50 border-teal-100 text-teal-700",
    tags: ["顺性别", "跨性别", "非二元性别"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性别不仅仅是男或女。性别认同（Gender Identity）是你内心深处对自己的性别感知。这与你的生理性别（Assigned Sex at Birth）不同，也与你喜欢谁（性取向）不同。
        </p>

        <SectionTitle color="bg-teal-400">词汇表：理解性别</SectionTitle>
        <div className="space-y-3">
          <InfoCard title="顺性别 (Cisgender)" colorClass="border-teal-100 bg-white text-teal-800">
            <img src={imgMicroPronouns} alt="Pronouns" className="w-14 h-14 object-contain float-right ml-2 bg-teal-50/20 rounded-lg p-1" />
            <p>你的性别认同与出生时被指派的性别一致。例如，出生时被指派为女性，并且觉得自己是女性。</p>
          </InfoCard>
          
           <InfoCard title="跨性别 (Transgender)" colorClass="border-teal-100 bg-white text-teal-800">
            <p>你的性别认同与出生时被指派的性别不同。跨性别是一个涵盖性术语，包含许多不同的身份。</p>
          </InfoCard>

           <InfoCard title="非二元性别 (Non-binary)" colorClass="border-teal-100 bg-white text-teal-800">
            <p>你的性别认同不完全属于“男性”或“女性”。你可能觉得自己两者都是、两者都不是，或者是流动的。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-teal-400">支持与盟友</SectionTitle>
        <ListSection color="text-teal-500" items={[
          "使用正确的代词：询问并使用别人希望被称呼的代词（如 他/她/ta）。",
          "不要假设：不要通过外表判断一个人的性别。",
          "尊重隐私：不要随意询问关于跨性别者生殖器或手术的私人问题。",
          "自我探索：对此感到困惑是正常的。花时间去感受，无论结论是什么，你都是独一无二的。"
        ]} />
      </>
    )
  },
  "Health_and_Wellness": {
    title: "健康与保健",
    subtitle: "全面关爱你的身体",
    image: imgWellness,
    color: "from-green-400 to-lime-500",
    accentColor: "bg-green-500",
    lightColor: "bg-green-50 border-green-100 text-green-700",
    tags: ["青春期", "月经", "体检", "HPV疫苗"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          生殖健康是整体健康的重要组成部分。了解从青春期开始的身体变化，到日常的护理和预防，是每个人对自己身体负责的表现。
        </p>

        <SectionTitle color="bg-green-400">青春期：成长的开始</SectionTitle>
        <div className="bg-green-50 rounded-2xl p-5 mb-6 border border-green-100">
           <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2"><Baby size={16} /> 身体的变化</h4>
           <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-3 rounded-xl border border-green-100/50">
                 <p className="text-xs font-bold text-green-700 mb-1">共同特征</p>
                 <p className="text-xs text-muted-foreground">身高突增、体毛生长（腋下/私处）、皮肤变油（可能长痘）、体味出现。</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-green-100/50">
                 <p className="text-xs font-bold text-green-700 mb-1">女生</p>
                 <p className="text-xs text-muted-foreground">乳房发育、臀部变宽、分泌物出现、<span className="font-bold">月经初潮</span>。</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-green-100/50">
                 <p className="text-xs font-bold text-green-700 mb-1">男生</p>
                 <p className="text-xs text-muted-foreground">生殖器发育、变声（喉结突出）、梦遗。</p>
              </div>
           </div>
        </div>

        <SectionTitle color="bg-green-400">月经百科 (Period 101)</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="基础知识" colorClass="border-green-100 bg-green-50/30 text-green-800">
             <ul className="list-disc pl-4 space-y-1 text-xs">
               <li><strong>周期：</strong> 21-35天。从见红第一天算起。</li>
               <li><strong>经期：</strong> 持续2-7天。</li>
               <li><strong>经血：</strong> 整个周期仅流失2-3汤匙血量。</li>
             </ul>
           </InfoCard>

           <InfoCard title="卫生用品选择" colorClass="border-green-100 bg-green-50/30 text-green-800">
             <div className="space-y-2">
               <div>
                 <p className="text-xs font-bold">卫生巾 (Pads)</p>
                 <p className="text-xs text-muted-foreground">最简单。每4-8小时更换。</p>
               </div>
               <div>
                 <p className="text-xs font-bold">卫生棉条 (Tampons)</p>
                 <p className="text-xs text-muted-foreground">置入阴道。无感、可游泳。必须每4-8小时更换以防TSS。</p>
               </div>
                <div>
                 <p className="text-xs font-bold">月经杯 (Cups)</p>
                 <p className="text-xs text-muted-foreground">硅胶小杯，环保可重复使用。可放置12小时。</p>
               </div>
             </div>
           </InfoCard>
           
           <InfoCard title="痛经管理" colorClass="border-green-100 bg-green-50/30 text-green-800">
             <p className="text-xs">热敷、布洛芬 (Ibuprofen) 止痛药、轻度运动。如果痛到无法生活，请就医（可能是子宫内膜异位症）。</p>
           </InfoCard>
        </div>

        <SectionTitle color="bg-green-400">常见妇科健康问题</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="尿路感染 (UTI)" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <img src={imgMicroTestKit} alt="Test Kit" className="w-14 h-14 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-green-100" />
            <p><strong>症状：</strong> 尿频、尿急、尿痛（烧灼感）。<br/><strong>原因：</strong> 细菌进入尿道（女性更常见）。<br/><strong>处理：</strong> 多喝水，及时就医使用抗生素。</p>
          </InfoCard>
           <InfoCard title="阴道酵母菌感染 (Yeast Infection)" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <p><strong>症状：</strong> 阴道极度瘙痒、豆腐渣样分泌物。<br/><strong>原因：</strong> 阴道内菌群失调。<br/><strong>处理：</strong> 使用抗真菌药物（非处方药或处方药）。</p>
          </InfoCard>

          <InfoCard title="经前综合症 (PMS) & PMDD" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <img src={imgMicroUterus} alt="Uterus" className="w-14 h-14 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-green-100" />
            <p><strong>症状：</strong> 经期前的情绪波动、乳房胀痛、疲劳。PMDD 是更严重的版本，可能导致抑郁。<br/><strong>处理：</strong> 运动、饮食调整，严重时可咨询医生用药。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-green-400">预防性保健</SectionTitle>
        <ListSection color="text-green-500" items={[
          "HPV 疫苗：可以预防导致宫颈癌和尖锐湿疣的病毒。建议在开始性行为前接种，但之后接种也有益。",
          "宫颈癌筛查 (Pap Smear)：建议从21岁开始，定期检测宫颈细胞变化。",
          "乳房自检：定期触摸检查乳房是否有肿块或异常变化。"
        ]} />
      </>
    )
  },
  "Pregnancy_Full": {
    title: "怀孕全程 (Pregnancy)",
    subtitle: "生命的奇妙旅程：逐月详解",
    image: imgPregnancy,
    color: "from-rose-400 to-red-500",
    accentColor: "bg-rose-500",
    lightColor: "bg-rose-50 border-rose-100 text-rose-700",
    tags: ["逐月指南", "胎儿发育", "身体变化", "产检"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          怀孕通常持续约 40 周（约 9-10 个月）。每一周，你和宝宝都在发生惊人的变化。这里是根据 Planned Parenthood 整理的逐月详细指南。
        </p>
        
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 mb-6">
           <h4 className="font-bold text-rose-700 mb-2 flex items-center gap-2">
             <Info size={16} /> 孕期计算
           </h4>
           <p className="text-xs text-rose-800 leading-relaxed">
             孕期是从你<span className="font-bold">最后一次月经的第一天</span>开始计算的，而不是受孕的那一天。所以当你“怀孕1个月”时，实际受孕可能才2周左右。
           </p>
        </div>

        {/* 第一孕期 */}
        <div className="relative pl-4 border-l-2 border-rose-200 space-y-8 mb-8">
          <div className="absolute -left-[9px] -top-1 w-4 h-4 rounded-full bg-rose-400 ring-4 ring-white"></div>
          
          <div>
            <h3 className="text-xl font-bold text-rose-600 mb-4">第一孕期 (Month 1-3)</h3>
            <p className="text-sm text-muted-foreground mb-4">这是宝宝器官形成的关键期，也是你身体适应激素剧烈变化的时期。</p>

            {/* Month 1 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 1 个月 (1-4周)</h4>
                <Badge variant="outline" className="text-rose-500 bg-rose-50 border-rose-200">胚胎期</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">受精卵着床。此时宝宝只是一个微小的细胞球（囊胚），大小像一粒罂粟籽。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-rose-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">如果你月经规律，你可能会发现<span className="text-rose-600 font-medium">月经没来</span>。可能会有轻微的着床出血（褐色斑点）。你可能会感到异常疲惫。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>买验孕棒测试。</li>
                     <li>开始服用含有<span className="text-rose-600">叶酸</span>的产前维生素。</li>
                     <li>停止吸烟、饮酒，减少咖啡因摄入。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 2 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 2 个月 (5-8周)</h4>
                <Badge variant="outline" className="text-rose-500 bg-rose-50 border-rose-200">覆盆子大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">心脏开始跳动。神经管（大脑和脊髓的前身）形成。虽然还很小，但已经有了微小的手指和脚趾芽。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-rose-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground"><span className="text-rose-600 font-medium">晨吐</span>（恶心）可能开始。乳房胀痛、乳晕变深。你需要频繁跑厕所（子宫压迫膀胱）。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>预约第一次产检（通常在第8周左右）。</li>
                     <li>多休息，应对疲劳。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 3 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 3 个月 (9-12周)</h4>
                <Badge variant="outline" className="text-rose-500 bg-rose-50 border-rose-200">李子大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">现在被称为“胎儿”。手指甲、脚趾甲形成。生殖器官开始发育（但B超还看不清）。宝宝可以握拳、张嘴。</p>
                </div>
                 <img src={imgMicroFetus1} className="w-12 h-12 object-contain bg-rose-50 rounded-lg p-1" />
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-rose-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">恶心症状可能在月底开始缓解。你的小腹可能微微隆起，裤子开始变紧。激素可能导致情绪波动。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>进行早期唐氏筛查（NT检查，11-13周）。</li>
                     <li>可以听到胎心音了。</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第二孕期 */}
        <div className="relative pl-4 border-l-2 border-orange-200 space-y-8 mb-8">
          <div className="absolute -left-[9px] -top-1 w-4 h-4 rounded-full bg-orange-400 ring-4 ring-white"></div>
          
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">第二孕期 (Month 4-6)</h3>
            <p className="text-sm text-muted-foreground mb-4">通常被称为“蜜月期”。早孕反应消失，你感觉精力充沛，肚子开始显怀。</p>

            {/* Month 4 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 4 个月 (13-16周)</h4>
                <Badge variant="outline" className="text-orange-500 bg-orange-50 border-orange-200">牛油果大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">骨骼开始硬化。宝宝开始练习吸吮和吞咽。如果在B超下运气好，可能看出性别。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-orange-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">食欲恢复！孕妇装开始成为必需品。你可能会感到烧心（胃酸倒流）。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>唐氏筛查（中期）。</li>
                     <li>开始侧睡（最好是左侧），有利于胎盘血流。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 5 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 5 个月 (17-20周)</h4>
                <Badge variant="outline" className="text-orange-500 bg-orange-50 border-orange-200">香蕉大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">头发、眉毛、睫毛开始生长。身上覆盖着一层白色的胎脂（Vernix）保护皮肤。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-orange-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground"><span className="text-orange-600 font-bold">胎动！</span>（Quickening）你可能会第一次感觉到宝宝在动，像蝴蝶扇翅膀或小鱼游动。可能会出现腿抽筋。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li><span className="font-bold">大排畸检查</span>（20周B超）：详细检查宝宝的所有器官发育情况。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 6 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 6 个月 (21-24周)</h4>
                <Badge variant="outline" className="text-orange-500 bg-orange-50 border-orange-200">玉米大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">指纹形成。肺部开始发育表面活性物质（为呼吸做准备）。宝宝能听到外面的声音了——可以跟Ta说话了！</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-orange-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">脚踝和脚可能会水肿。可能会感到假性宫缩（Braxton Hicks），肚子偶尔发紧但不痛。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>妊娠期糖尿病筛查（喝糖水测试）。</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第三孕期 */}
        <div className="relative pl-4 border-l-2 border-red-200 space-y-8 mb-8">
          <div className="absolute -left-[9px] -top-1 w-4 h-4 rounded-full bg-red-500 ring-4 ring-white"></div>
          
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">第三孕期 (Month 7-9)</h3>
            <p className="text-sm text-muted-foreground mb-4">最后冲刺！宝宝迅速长大，你的身体负担加重，为分娩做准备。</p>

            {/* Month 7 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-red-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 7 个月 (25-28周)</h4>
                <Badge variant="outline" className="text-red-500 bg-red-50 border-red-200">茄子大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">眼睑睁开，可以看到光。脂肪层开始堆积，皮肤变平滑。大脑快速发育。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-red-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">肚子越来越大，可能出现妊娠纹。睡觉翻身变得困难。背痛可能加剧。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>如果血型是Rh阴性，注射抗D免疫球蛋白。</li>
                     <li>接种百日咳疫苗 (Tdap)。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 8 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-red-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 8 个月 (29-32周)</h4>
                <Badge variant="outline" className="text-red-500 bg-red-50 border-red-200">菠萝大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">骨骼完全硬化（除了头骨，为了通过产道）。宝宝开始练习呼吸运动。胎动变得有力（踢肋骨！）。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-red-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">呼吸短促（子宫顶到了横膈膜）。初乳（黄色的早期乳汁）可能开始渗出。尿频再次加重。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>产检变为每两周一次。</li>
                     <li>开始数胎动：每天花时间记录宝宝的活动。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 9 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-red-100 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 9 个月 (33-36周)</h4>
                <Badge variant="outline" className="text-red-500 bg-red-50 border-red-200">哈密瓜大小</Badge>
              </div>
              
              <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">👶 宝宝的变化</p>
                  <p className="text-xs text-muted-foreground">肺部接近成熟。宝宝通常会转为头朝下的姿势（入盆）。体重迅速增加。</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dashed border-red-100">
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">🤰 你的身体</p>
                   <p className="text-xs text-muted-foreground">因为宝宝入盆，骨盆压力增大，但呼吸会顺畅一些。可能会有“筑巢本能”（疯狂打扫卫生）。</p>
                </div>
                <div>
                   <p className="text-sm font-semibold text-foreground mb-1">✅ 本月重点</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                     <li>产检变为每周一次。</li>
                     <li>B族链球菌 (GBS) 检查。</li>
                     <li>准备好待产包。</li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Month 10 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-red-100 mb-4">
               <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">第 10 个月 (37-40+周)</h4>
                <Badge variant="outline" className="text-red-500 bg-red-50 border-red-200">西瓜大小</Badge>
              </div>
              
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground"><strong>37周算足月</strong>，宝宝随时可能出生。只有5%的宝宝会在预产期当天出生。</p>
                
                 <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                   <p className="text-sm font-bold text-red-800 mb-1">⚠️ 分娩征兆：何时去医院？</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-red-700">
                     <li><strong>规律宫缩：</strong> 每5分钟一次，持续1分钟，持续1小时 (5-1-1规则)。</li>
                     <li><strong>破水：</strong> 感到大量液体流出（哪怕没有阵痛也要去）。</li>
                     <li><strong>见红：</strong> 粘液栓脱落，伴有血丝。</li>
                   </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <SectionTitle color="bg-rose-400">产后初期 (The 4th Trimester)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            分娩后的前3个月被称为“第四孕期”。你的身体需要时间恢复，宝宝需要适应子宫外的生活。
          </p>
          <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>恶露：</strong> 产后会有类似月经的出血，持续几周。</li>
             <li><strong>情绪：</strong> “产后抑郁” (Baby Blues) 很常见，但如果持续超过2周或感到绝望，请立即就医。</li>
             <li><strong>恢复：</strong> 如果是顺产，伤口需要几周愈合；如果是剖腹产，则是大型腹部手术，需要更长恢复期。</li>
          </ul>
        </div>
      </>
    )
  },
  "Sex_and_Pleasure": {
    title: "性与愉悦",
    subtitle: "探索与享受",
    image: imgPleasure,
    color: "from-violet-400 to-purple-500",
    accentColor: "bg-violet-500",
    lightColor: "bg-violet-50 border-violet-100 text-violet-700",
    tags: ["自慰", "性高潮", "沟通", "解剖学"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性不仅仅是为了生殖。性愉悦是健康生活的一部分。了解自己的身体、喜好，并与伴侣沟通，是获得美好性体验的基础。
        </p>
        
        <SectionTitle color="bg-violet-400">了解你的身体</SectionTitle>
        <div className="space-y-4">
          <InfoCard title="阴蒂 (The Clitoris)" colorClass="border-violet-100 bg-violet-50/30 text-violet-800">
            <img src={imgMicroAnatomy} alt="Anatomy" className="w-16 h-16 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-violet-100" />
            <p>这是一个专门为快乐而生的器官。它有成千上万个神经末梢。对于大多数女性来说，刺激阴蒂是达到高潮的关键，而不仅仅是阴道插入。</p>
          </InfoCard>
           <InfoCard title="自慰 (Masturbation)" colorClass="border-violet-100 bg-violet-50/30 text-violet-800">
            <p>这是完全正常、健康且安全的。它是了解自己身体喜好的最佳方式。没有所谓“过多”的自慰，只要它不影响你的日常生活。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-violet-400">沟通的艺术</SectionTitle>
        <ListSection color="text-violet-500" items={[
          "不要指望伴侣会读心术：直接告诉对方你喜欢什么，不喜欢什么。",
          "这是一个探索的过程：性爱不是一场表演，不需要像A片里那样。真实、笨拙、欢笑都是性的一部分。",
          "如果不舒服，停下来：性应该是快乐的，不应该是痛苦的。如果感到疼痛或不适，随时可以停止。"
        ]} />
      </>
    )
  },
  "Sexual_Orientation": {
    title: "性取向 (Sexual Orientation)",
    subtitle: "爱与吸引：深度解析多元光谱",
    image: imgOrientation,
    color: "from-indigo-400 to-blue-500",
    accentColor: "bg-indigo-500",
    lightColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
    tags: ["LGBTQ+", "金赛量表", "流动性", "盟友指南"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性取向（Sexual Orientation）是指你在情感、浪漫或性方面被谁吸引。这是一种深刻的自我认同，而不是一种选择，更不是一种疾病。它是你的一部分，就像你的眼睛颜色或身高一样自然。
        </p>

        {/* 金赛量表 */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-6">
           <h4 className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
             <Info size={16} /> 金赛量表 (The Kinsey Scale)
           </h4>
           <p className="text-sm text-indigo-800 leading-relaxed mb-4">
             早在1948年，性学家阿尔弗雷德·金赛就提出：性取向不是非黑即白的，而是一个从0到6的光谱。
           </p>
           <div className="relative h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-8 mx-2">
              <div className="absolute top-4 left-0 -translate-x-1/2 text-[10px] text-indigo-400 font-bold w-12 text-center">完全<br/>异性恋</div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-indigo-400 font-bold w-12 text-center">双性恋<br/>(均等)</div>
              <div className="absolute top-4 right-0 translate-x-1/2 text-[10px] text-indigo-400 font-bold w-12 text-center">完全<br/>同性恋</div>
              
              {/* Dots */}
              <div className="absolute top-1/2 left-0 w-3 h-3 bg-white border-2 border-indigo-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white border-2 border-indigo-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-3 h-3 bg-white border-2 border-indigo-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
           </div>
           <p className="text-xs text-indigo-600/80 italic text-center mt-6">
             大部分人都落在0和6之间的某个位置，而不是极端的两端。
           </p>
        </div>
        
        <SectionTitle color="bg-indigo-400">常见类别详解</SectionTitle>
        <div className="space-y-4">
          <InfoCard title="异性恋 (Heterosexual / Straight)" colorClass="border-indigo-100 bg-white text-indigo-800">
            <p className="text-sm">通常被称为“直人”。指在情感和性方面主要被不同性别的人吸引。</p>
          </InfoCard>

          <InfoCard title="同性恋 (Gay & Lesbian)" colorClass="border-indigo-100 bg-white text-indigo-800">
             <p className="text-sm mb-2">指在情感和性方面主要被相同性别的人吸引。</p>
             <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
               <li><strong className="text-indigo-600">男同性恋 (Gay):</strong> 被男性吸引的男性。</li>
               <li><strong className="text-indigo-600">女同性恋 (Lesbian):</strong> 被女性吸引的女性。</li>
             </ul>
          </InfoCard>

          <InfoCard title="双性恋 (Bisexual)" colorClass="border-indigo-100 bg-white text-indigo-800">
             <p className="text-sm">指被不止一种性别的人吸引。这并不意味着他们“贪心”或“困惑”。即使双性恋者目前处于一段异性关系中，他们的性取向依然是双性恋。</p>
          </InfoCard>

          <InfoCard title="泛性恋 (Pansexual)" colorClass="border-indigo-100 bg-white text-indigo-800">
             <p className="text-sm">指吸引力不受性别限制。对于泛性恋者来说，他们爱的是“人”本身，对方的性别对他们的吸引力没有决定性影响。“Hearts not parts.”</p>
          </InfoCard>

          <InfoCard title="无性恋 (Asexual / Ace)" colorClass="border-indigo-100 bg-white text-indigo-800">
             <p className="text-sm">指很少或没有感受到性吸引力。但这不代表没有感情需求。无性恋也是一个光谱：</p>
             <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-2">
               <li>有些无性恋者完全没有性欲。</li>
               <li>有些可能会在建立深厚情感后产生性吸引（半性恋 Demisexual）。</li>
               <li>许多无性恋者仍然渴望浪漫关系和拥抱。</li>
               <li><strong>浪漫取向 vs 性取向：</strong> 一个无性恋者可以是“异性浪漫倾向”(Heteroromantic)，即只想和异性谈恋爱但不想发生性关系。</li>
             </ul>
          </InfoCard>
          
           <InfoCard title="酷儿 (Queer)" colorClass="border-indigo-100 bg-white text-indigo-800">
             <p className="text-sm">原本是一个贬义词，但现在被广泛回收使用。它是一个包容性的术语，用来描述任何不符合主流“异性恋”或“顺性别”规范的人。如果你不想给自己贴上具体的标签，“酷儿”是一个很好的选择。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-indigo-400">区分三个概念</SectionTitle>
        <div className="bg-indigo-900 text-white rounded-2xl p-5 mb-6 relative overflow-hidden shadow-lg">
           <div className="relative z-10 space-y-4">
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🧠</div>
               <div>
                 <h5 className="font-bold text-indigo-200 text-sm">性别认同 (Gender Identity)</h5>
                 <p className="text-xs opacity-90">你是谁？(Who you are)<br/>例如：男人、女人、非二元性别。</p>
               </div>
             </div>
             <div className="border-b border-white/10"></div>
             <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">❤️</div>
               <div>
                 <h5 className="font-bold text-indigo-200 text-sm">性取向 (Sexual Orientation)</h5>
                 <p className="text-xs opacity-90">你爱谁？(Who you love)<br/>例如：同性恋、异性恋、双性恋。</p>
               </div>
             </div>
             <div className="border-b border-white/10"></div>
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🧬</div>
               <div>
                 <h5 className="font-bold text-indigo-200 text-sm">生理性别 (Biological Sex)</h5>
                 <p className="text-xs opacity-90">你的身体构造？(Your body)<br/>例如：男性、女性、间性人 (Intersex)。</p>
               </div>
             </div>
           </div>
           <div className="absolute right-0 top-0 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
           <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        <SectionTitle color="bg-indigo-400">流动性 (Fluidity)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
          <p className="text-sm text-muted-foreground mb-3">
            性取向不仅是光谱，还是流动的。你可能在年轻时认为自己是异性恋，后来发现自己对同性也有感觉。
          </p>
          <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100">
             <p className="text-xs text-indigo-800 font-medium">“昨天我喜欢穿裤子，今天我喜欢穿裙子，这并不意味着我在‘假装’，只是我的喜好在变化。” —— 性取向也是如此。</p>
          </div>
        </div>

        <SectionTitle color="bg-indigo-400">关于“出柜” (Coming Out)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
          <p className="text-sm text-muted-foreground mb-4">
            “出柜”是指向他人表明自己的性取向或性别认同的过程。这是一个非常个人化的决定。
          </p>
          <ListSection color="text-indigo-500" items={[
            "安全第一：如果出柜会威胁到你的安全、住房或经济来源，请暂时等待。你的安全最重要。",
            "没有时间表：你不需要在特定时间告诉任何人。你可以选择只告诉特定的朋友。",
            "这是一个过程：出柜不是一次性的，而是一生中不断发生的过程（对新朋友、新同事等）。",
            "寻找社群：知道自己并不孤单非常重要。寻找线上的 LGBTQ+ 社区或支持小组。"
          ]} />
        </div>

        <SectionTitle color="bg-indigo-400">如何成为盟友 (Allyship)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-sm text-muted-foreground mb-3">就算你是异性恋顺性别者，你也可以成为很好的支持者（盟友）：</p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>不要假设：</strong> 不要默认每个人都是异性恋。在谈论伴侣时使用中性词（如“伴侣”而不是“男/女朋友”）。</li>
             <li><strong>倾听：</strong> 当有人向你出柜时，倾听他们的感受，感谢他们的信任。不要说“我早就知道了”。</li>
             <li><strong>制止歧视：</strong> 当听到恐同笑话或言论时，勇敢指出来。</li>
           </ul>
        </div>

        <SectionTitle color="bg-indigo-400">常见误区 (Myth Busting)</SectionTitle>
         <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <FaqItem 
            question="性取向是选择出来的吗？" 
            answer="不是。就像你不能选择你的身高一样，你也不能选择你被谁吸引。你可以选择是否通过行为来表达你的性取向，但内在的吸引力是自然存在的。" 
          />
          <FaqItem 
            question="双性恋只是过渡阶段吗？" 
            answer="不是。双性恋是一种独立且完整的性取向。很多双性恋者终生都保持这种取向。" 
          />
           <FaqItem 
            question="治疗（扭转治疗）能改变性取向吗？" 
            answer="绝对不能。所有主流医学和心理学组织都谴责“扭转治疗”。它不仅无效，而且极为有害，可能导致抑郁和自杀风险。你需要的是接纳，而不是治疗。" 
          />
        </div>
      </>
    )
  },

  // ------------------------------------
  // DETAILED SUB-ARTICLES (BIRTH CONTROL)
  // ------------------------------------
  "BC_Pill_Detail": {
    title: "短效避孕药详解",
    subtitle: "每日一片，科学避孕",
    image: imgBcPill,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["漏服指南", "副作用", "使用方法"],
    content: (
      <>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
           <h4 className="font-bold text-blue-800 mb-2">💊 它是如何工作的？</h4>
           <p className="text-sm text-blue-700/80 leading-relaxed">
             短效避孕药含有激素（通常是雌激素和孕激素），它们主要通过三种方式防止怀孕：
           </p>
           <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-blue-700/80">
             <li>阻止卵巢排卵。</li>
             <li>使宫颈粘液变稠，阻止精子游向卵子。</li>
             <li>使子宫内膜变薄，受精卵难以着床。</li>
           </ul>
        </div>

        <SectionTitle color="bg-blue-400">漏服了怎么办？(重要)</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="漏服 1 片" colorClass="border-yellow-100 bg-yellow-50/50 text-yellow-800">
             <p className="text-sm font-bold">尽快补服。</p>
             <p className="text-xs mt-1">
               如果想起来的时候已经是第二天吃药的时间了，就一次吃两片。你不需要额外的避孕措施。
             </p>
           </InfoCard>
           
           <InfoCard title="漏服 2 片或更多" colorClass="border-red-100 bg-red-50/50 text-red-800">
             <p className="text-sm font-bold">不仅要补服，还需要备用避孕措施！</p>
             <ul className="list-disc pl-4 mt-2 space-y-1 text-xs">
               <li>尽快服用最后漏服的那一片（哪怕意味着一天吃两片）。扔掉之前漏服的药片。</li>
               <li>接下来的7天内，如果你发生性行为，<span className="font-bold">必须使用避孕套</span>。</li>
               <li>如果漏服发生在第一周，并且你有无保护性行为，你可能需要紧急避孕药。</li>
             </ul>
           </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">常见副作用</SectionTitle>
        <ListSection items={[
          "不规则出血（点滴出血）：通常在前3个月最常见。",
          "恶心：建议在睡前或饭后服用。",
          "乳房胀痛：通常几周后会消失。",
          "情绪变化：如果你觉得情绪受到严重影响，可以咨询医生换一种品牌的药。"
        ]} />

        <SectionTitle color="bg-blue-400">额外的好处</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
           <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
             <li>让月经更规律、量更少、痛经更轻。</li>
             <li>改善痤疮（痘痘）。</li>
             <li>降低患卵巢癌和子宫内膜癌的风险。</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_Condom_Detail": {
    title: "避孕套完全指南",
    subtitle: "双重保护：避孕 + 防病",
    image: imgBcCondom,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["使用图解", "材质选择", "防破裂"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕套（Condoms）是唯一能同时预防怀孕和性传播疾病 (STDs) 的方法。正确使用避孕套，有效率可达98%。
        </p>

        <SectionTitle color="bg-blue-400">正确使用步骤</SectionTitle>
        <div className="space-y-3">
           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">1</div>
             <div>
               <p className="text-sm font-bold text-foreground">检查有效期和包装</p>
               <p className="text-xs text-muted-foreground">确保包装中有空气（像个小气囊），这说明没有破损。过期的避孕套容易破裂。</p>
             </div>
           </div>
           
           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">2</div>
             <div>
               <p className="text-sm font-bold text-foreground">分清正反面</p>
               <p className="text-xs text-muted-foreground">它应该像一顶卷边的小帽子。如果卷边在里面，那就是反了。如果不小心戴反了，<span className="text-red-500">扔掉换一个新的</span>，不要翻过来再用（上面可能已经沾有精液）。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">3</div>
             <div>
               <p className="text-sm font-bold text-foreground">捏住储精囊</p>
               <p className="text-xs text-muted-foreground">戴上之前，捏住顶端的小囊排出空气。这给精液留出了空间，防止避孕套破裂。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">4</div>
             <div>
               <p className="text-sm font-bold text-foreground">戴到底</p>
               <p className="text-xs text-muted-foreground">在勃起的阴茎上，将避孕套一直展开到根部。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">5</div>
             <div>
               <p className="text-sm font-bold text-foreground">及时撤出</p>
               <p className="text-xs text-muted-foreground">射精后，在阴茎疲软之前，按住避孕套的根部撤出。防止精液溢出。</p>
             </div>
           </div>
        </div>

        <SectionTitle color="bg-blue-400">常见错误</SectionTitle>
        <ListSection items={[
          "戴两层：错！两层避孕套摩擦更容易破裂。",
          "使用油性润滑剂：错！凡士林、婴儿油会腐蚀乳胶，导致避孕套破裂。请使用水性或硅基润滑剂。",
          "放在钱包里：错！摩擦和体温会使避孕套老化变脆。"
        ]} />
      </>
    )
  },

  "BC_IUD_Detail": {
    title: "宫内节育器 (IUD)",
    subtitle: "一劳永逸的选择",
    image: imgBcIud,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["含铜IUD", "曼月乐", "放置过程"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          宫内节育器 (Intrauterine Device, IUD) 是一个T形的小装置，由医生放入子宫内。它是目前最有效的可逆避孕方法之一。一旦取出，受孕能力立即恢复。
        </p>

        <SectionTitle color="bg-blue-400">两种类型的区别</SectionTitle>
        <div className="grid grid-cols-1 gap-4 mb-6">
           <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
             <h4 className="font-bold text-orange-800 mb-2">含铜 IUD (ParaGard)</h4>
             <ul className="list-disc pl-4 space-y-1 text-xs text-orange-700">
               <li><strong>无激素：</strong> 适合不想使用激素的人。</li>
               <li><strong>原理：</strong> 铜离子对精子有毒，阻止精子受精。</li>
               <li><strong>副作用：</strong> 可能导致月经量变多、痛经加重。</li>
               <li><strong>有效期：</strong> 最长可达 10-12 年。</li>
               <li><strong>额外技能：</strong> 可作为紧急避孕措施！</li>
             </ul>
           </div>

           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
             <h4 className="font-bold text-blue-800 mb-2">含激素 IUD (Mirena/Kyleena)</h4>
             <ul className="list-disc pl-4 space-y-1 text-xs text-blue-700">
               <li><strong>含孕激素：</strong> 释放微量孕激素。</li>
               <li><strong>原理：</strong> 增稠宫颈粘液，变薄子宫内膜。</li>
               <li><strong>副作用：</strong> 可能导致不规则出血。</li>
               <li><strong>有效期：</strong> 3-8 年（取决于品牌）。</li>
               <li><strong>额外技能：</strong> 通常会让月经变少，甚至消失（这是无害的）。</li>
             </ul>
           </div>
        </div>

        <SectionTitle color="bg-blue-400">放置过程痛吗？</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <p className="text-sm text-muted-foreground mb-3">
            这因人而异。大多数人会感到强烈的痉挛痛（像严重的痛经），持续几分钟。
          </p>
          <p className="text-sm font-bold text-foreground mb-2">建议：</p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
            <li>在手术前1小时服用布洛芬 (Ibuprofen)。</li>
            <li>安排在月经期间放置（此时宫颈较软）。</li>
            <li>放好后休息一天，对自己好一点。</li>
          </ul>
        </div>
      </>
    )
  },

  "BC_Implant_Detail": {
    title: "皮下埋植剂 (The Implant)",
    subtitle: "长效、隐形、省心",
    image: imgBcImplant,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["操作过程", "副作用", "恢复生育"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          皮下埋植剂（如 Nexplanon）是一根火柴棍大小的柔韧塑料棒。医生会把它植入你上臂内侧的皮肤下。它释放孕激素来防止怀孕。
        </p>

        <SectionTitle color="bg-blue-400">为什么选择它？</SectionTitle>
        <ListSection items={[
          "极其有效：失败率只有 0.05%，比结扎手术还可靠。",
          "省心：一旦植入，3-5年不用管它。",
          "隐形：别人看不出来，只有你自己能摸到它。",
          "可逆：想怀孕了？找医生取出，受孕能力很快恢复。"
        ]} />

        <SectionTitle color="bg-blue-400">植入过程</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ol className="list-decimal pl-4 space-y-2 text-xs text-muted-foreground">
             <li>医生会先给你的手臂局部麻醉（打一针麻药）。</li>
             <li>使用特殊的植入器，将小棒滑入皮下。你会有感觉，但不会痛。</li>
             <li>整个过程只需要几分钟。</li>
             <li>之后手臂可能会淤青几天，会有绷带包扎。</li>
           </ol>
        </div>

        <SectionTitle color="bg-blue-400">主要副作用</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
           <p className="text-sm text-muted-foreground mb-2">
             最常见的副作用是<strong>月经模式的改变</strong>：
           </p>
           <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
             <li>大约1/3的人会月经停止（这是安全的）。</li>
             <li>大约1/3的人会有不规则出血或点滴出血。</li>
             <li>少数人可能会有较长时间的出血。</li>
           </ul>
           <p className="text-xs text-blue-600 mt-3 font-medium">通常给身体3-6个月的时间去适应。</p>
        </div>
      </>
    )
  },
  "STDs_HIV_Safer_Sex": {
    title: "性健康与 STDs",
    subtitle: "了解风险，安全去爱",
    image: imgSTDs,
    color: "from-slate-400 to-gray-500",
    accentColor: "bg-slate-500",
    lightColor: "bg-slate-50 border-slate-100 text-slate-700",
    tags: ["淋病", "梅毒", "HIV", "HPV"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性传播疾病 (STDs) 非常普遍。任何有性生活的人都可能感染。好消息是，大多数 STDs 都是可以治愈或控制的。得病并不羞耻，重要的是及时治疗。
        </p>
        
        <SectionTitle color="bg-slate-400">常见 STDs 速览</SectionTitle>
        
        <div className="space-y-4">
           <InfoCard title="衣原体与淋病 (Chlamydia & Gonorrhea)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
             <p className="text-xs mb-1"><strong>症状：</strong> 很多人无症状。可能有排尿痛、异常分泌物。</p>
             <p className="text-xs"><strong>治疗：</strong> 抗生素可轻松治愈。如果不治疗，可能导致不孕。</p>
           </InfoCard>

           <InfoCard title="生殖器疱疹 (Herpes)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
             <p className="text-xs mb-1"><strong>症状：</strong> 生殖器部位的水泡或溃疡，伴有疼痛。</p>
             <p className="text-xs"><strong>治疗：</strong> 无法根治，但抗病毒药物可以控制症状爆发。</p>
           </InfoCard>

           <InfoCard title="HPV (人乳头瘤病毒)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
             <p className="text-xs mb-1"><strong>症状：</strong> 大多数无症状自行清除。某些类型导致尖锐湿疣或宫颈癌。</p>
             <p className="text-xs"><strong>预防：</strong> 疫苗非常有效！</p>
           </InfoCard>

           <InfoCard title="HIV (艾滋病毒)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
             <p className="text-xs mb-1"><strong>症状：</strong> 早期可能像流感。只有检测才能确认。</p>
             <p className="text-xs"><strong>治疗：</strong> 虽然无法根治，但在现代药物治疗下，感染者可以拥有正常寿命且不传染给他人 (U=U)。</p>
           </InfoCard>

           <InfoCard title="梅毒 (Syphilis)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
             <p className="text-xs mb-1"><strong>症状：</strong> 早期为无痛溃疡（硬下疳），之后可能出现皮疹。如果不治疗，会严重损害心脏和大脑。</p>
             <p className="text-xs"><strong>治疗：</strong> 早期使用青霉素可完全治愈。</p>
           </InfoCard>

           <InfoCard title="滴虫病 (Trichomoniasis)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
             <p className="text-xs mb-1"><strong>症状：</strong> 分泌物增多、异味、瘙痒。男性通常无症状。</p>
             <p className="text-xs"><strong>治疗：</strong> 抗生素可治愈。</p>
           </InfoCard>
        </div>

        <SectionTitle color="bg-slate-400">如何保护自己？</SectionTitle>
        <ListSection color="text-slate-600" items={[
          "全程使用避孕套：包括口交和肛交。",
          "定期检测：即使没有症状，每年也要体检一次。",
          "PrEP：如果你有高风险，可以服用 PrEP 药物预防 HIV。"
        ]} />
        <InfoCard title="检测方式 (Testing)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
           <img src={imgMicroTestKit} alt="Testing" className="w-16 h-16 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-slate-100" />
           <ul className="list-disc pl-4 space-y-1 text-xs">
             <li><strong>尿液检测：</strong> 查淋病、衣原体。</li>
             <li><strong>血液检测：</strong> 查HIV、梅毒、疱疹。</li>
             <li><strong>拭子取样：</strong> 从咽喉、直肠或生殖器取样。</li>
           </ul>
        </InfoCard>
      </>
    )
  },
  "Relationships": {
    title: "情感与亲密关系",
    subtitle: "健康的爱，从尊重开始",
    image: imgRelationships,
    color: "from-pink-400 to-rose-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["同意", "红旗警告", "沟通"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          一段健康的关系应该让你感到安全、被尊重和快乐。无论是友情还是爱情，建立健康的边界都是至关重要的。
        </p>
        
        <SectionTitle color="bg-pink-400">健康 vs 不健康</SectionTitle>
        
        <div className="grid grid-cols-1 gap-4">
           <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 relative overflow-hidden">
             <div className="absolute right-2 top-2 opacity-20"><img src={imgMicroChat} className="w-16 h-16" /></div>
             <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 size={16}/> 健康的标志</h4>
             <ul className="text-xs text-green-800 space-y-1 pl-5 list-disc relative z-10">
               <li>你们互相尊重对方的界限。</li>
               <li>你可以做真实的自己。</li>
               <li>即使吵架，也能公平沟通，不进行人身攻击。</li>
               <li>你们支持彼此的兴趣和梦想。</li>
             </ul>
           </div>

           <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
             <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2"><XCircle size={16}/> 危险信号 (Red Flags)</h4>
             <ul className="text-xs text-red-800 space-y-1 pl-5 list-disc">
               <li>试图控制你见谁、穿什么或怎么花钱。</li>
               <li>因为生气而羞辱、贬低或威胁你。</li>
               <li>强迫你进行你不想做的性行为。</li>
               <li>过度嫉妒，随时查岗。</li>
               <li><strong>煤气灯效应 (Gaslighting)：</strong> 让你怀疑自己的记忆或理智（例如：“你疯了，我从来没说过那个”，“你太敏感了”）。</li>
               <li><strong>爱情轰炸 (Love Bombing)：</strong> 刚开始过度热情、送礼，让你迅速产生依赖，随后开始控制。</li>
             </ul>
           </div>
        </div>

        <SectionTitle color="bg-pink-400">关于“知情同意” (Consent)</SectionTitle>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
          <p className="text-foreground/80 text-sm leading-relaxed mb-2">
            同意必须是<strong>FRIES</strong>：
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li><strong>F</strong>reely given (自由给予)：没有压力或威胁。</li>
            <li><strong>R</strong>eversible (可撤销)：你可以随时改变主意。</li>
            <li><strong>I</strong>nformed (知情)：知道要做什么，有没有避孕等。</li>
            <li><strong>E</strong>nthusiastic (热情)：应该是双方都想做的“Yes!”。</li>
            <li><strong>S</strong>pecific (具体)：同意接吻不代表同意性交。</li>
          </ul>
        </div>
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
        <div className="relative h-72 w-full overflow-hidden rounded-b-[3rem] shadow-lg z-10 transition-all duration-500">
           <div className={cn("absolute inset-0 bg-gradient-to-br opacity-95", article.color)} />
           <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
           
           <img src={article.image} alt={article.title} className="absolute -bottom-4 -right-4 w-56 h-56 object-contain drop-shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-700" />
           
           {/* Navbar */}
           <div className="absolute top-0 left-0 right-0 p-4 pt-safe flex justify-between items-center z-20">
             <Button 
               variant="ghost" 
               size="icon" 
               className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full h-10 w-10 border border-white/20"
               onClick={() => setLocation("/learn")}
             >
               <ChevronLeft size={24} />
             </Button>
             <Button 
               variant="ghost" 
               size="icon" 
               className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full h-10 w-10 border border-white/20"
             >
               <Share2 size={20} />
             </Button>
           </div>

           {/* Title Area */}
           <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
             <div className="flex gap-2 mb-3 flex-wrap">
               {article.tags.map((tag: string) => (
                 <Badge key={tag} variant="secondary" className="bg-white/20 text-white border border-white/10 backdrop-blur-md shadow-sm px-3 py-1 text-xs">
                   {tag}
                 </Badge>
               ))}
             </div>
             <h1 className="text-3xl font-bold text-white mb-2 shadow-sm tracking-tight leading-tight">{article.title}</h1>
             <p className="text-white/90 text-sm font-medium">{article.subtitle}</p>
           </div>
        </div>

        {/* Content Body */}
        <div className="px-6 py-10 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-150">
           {article.content}

           {/* Feedback Action */}
           <div className="mt-16 flex flex-col items-center gap-4 bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
             <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Feedback</p>
             <p className="text-sm font-semibold text-foreground">这篇文章有帮助吗？</p>
             <div className="flex gap-4">
               <Button variant="outline" className="rounded-full px-6 gap-2 border-primary/20 text-primary hover:bg-primary/5 h-12 shadow-sm hover:shadow-md transition-all">
                 <ThumbsUp size={18} /> 有帮助
               </Button>
               <Button variant="outline" className="rounded-full px-6 gap-2 border-primary/20 text-primary hover:bg-primary/5 h-12 shadow-sm hover:shadow-md transition-all">
                 <Heart size={18} /> 收藏
               </Button>
             </div>
           </div>
        </div>

      </div>
    </MobileLayout>
  );
}

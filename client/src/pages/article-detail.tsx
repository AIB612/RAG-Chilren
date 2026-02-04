import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Share2, ThumbsUp, BookOpen, AlertCircle, Info, HelpCircle, CheckCircle2, Heart, XCircle, Baby } from "lucide-react";
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

          <InfoCard title="内置/女用避孕套 (Internal Condom)" colorClass="border-purple-100 bg-purple-50/30 text-purple-800">
             <p>放入阴道内的柔软套管。由女性主导，防病防孕。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-purple-100 rounded text-purple-600">有效率: 79-95%</span>
              <span className="px-2 py-1 bg-green-100 rounded text-green-600">防 STDs: 是</span>
            </div>
             <div className="mt-4 pt-3 border-t border-purple-200/50">
               <a href="/learn/BC_InternalCondom_Detail" className="text-xs font-bold text-purple-600 flex items-center gap-1 hover:underline">
                 了解详细用法 <ChevronRight size={12}/>
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
            <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Shot_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 优缺点对比 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="避孕贴 (The Patch)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcPatch} alt="Patch" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>每周在皮肤上贴一片。释放激素通过皮肤进入血液。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 91-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每周</span>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Patch_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 掉了怎么办？ <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="阴道避孕环 (NuvaRing)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcRing} alt="Ring" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>柔软的透明环，自行放入阴道内。放置3周，取出1周（来月经）。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 93-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每月</span>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Ring_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 了解详细操作 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="体外射精 (Withdrawal)" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
            <p>在射精前将阴茎抽出。免费且无副作用，但失败率高，需极强的自控力。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-orange-100 rounded text-orange-600">有效率: 约 78%</span>
              <span className="px-2 py-1 bg-green-100 rounded text-green-600">成本: $0</span>
            </div>
            <div className="mt-4 pt-3 border-t border-orange-200/50">
               <a href="/learn/BC_Withdrawal_Detail" className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline">
                 为什么容易失败？ <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="绝育手术 (Sterilization)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
            <p>输卵管结扎或输精管结扎。永久性的避孕方式。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">有效率: &gt;99%</span>
              <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">时效: 永久</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/50">
               <a href="/learn/BC_TubalLigation_Detail" className="text-xs font-bold text-slate-600 flex items-center gap-1 hover:underline">
                 了解手术详情 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <SectionTitle color="bg-green-400">自然与行为避孕法</SectionTitle>
          
          <InfoCard title="自然避孕法 (FAM)" colorClass="border-green-100 bg-green-50/30 text-green-800">
             <p>通过体温、宫颈粘液等追踪排卵期。无副作用，但需要极高的自律性。</p>
             <div className="mt-4 pt-3 border-t border-green-200/50">
               <a href="/learn/BC_FAM_Detail" className="text-xs font-bold text-green-600 flex items-center gap-1 hover:underline">
                 三大指标详解 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="禁欲与边缘性行为" colorClass="border-purple-100 bg-purple-50/30 text-purple-800">
             <p>唯一 100% 有效的方法。边缘性行为（Outercourse）指不进行阴道插入的亲密行为。</p>
             <div className="mt-4 pt-3 border-t border-purple-200/50">
               <a href="/learn/BC_Abstinence_Detail" className="text-xs font-bold text-purple-600 flex items-center gap-1 hover:underline">
                 什么是边缘性行为？ <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

           <InfoCard title="哺乳期避孕 (LAM)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
             <p>仅适用于产后6个月内、纯母乳喂养且月经未恢复的妈妈。</p>
             <div className="mt-4 pt-3 border-t border-pink-200/50">
               <a href="/learn/BC_Breastfeeding_Detail" className="text-xs font-bold text-pink-600 flex items-center gap-1 hover:underline">
                 三个必须条件 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>
          
          <SectionTitle color="bg-blue-400">其他屏障方法</SectionTitle>
          <InfoCard title="膈膜、宫颈帽与海绵" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
             <p>放置在阴道内的屏障，阻止精子进入。必须配合杀精剂使用。</p>
             <div className="mt-4 pt-3 border-t border-blue-200/50">
               <a href="/learn/BC_Barrier_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 了解更多 <ChevronRight size={12}/>
               </a>
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

  "Abortion": {
    title: "堕胎 (Abortion)",
    subtitle: "安全、合法的医疗程序",
    image: imgAbortion,
    color: "from-red-400 to-pink-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["药物流产", "手术流产", "安全性", "法律"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          堕胎（Abortion）是一种终止妊娠的医疗手段。它是一项非常常见的医疗保健服务。在正规医疗机构进行的堕胎是非常安全的。每个人都有自己独特的理由选择堕胎，比如为了更好地照顾现有的孩子、尚未准备好成为父母、健康原因等。无论原因是什么，这都是你个人的决定。
        </p>

        <SectionTitle color="bg-pink-400">主要类型详解</SectionTitle>
        
        <div className="space-y-4">
          <InfoCard title="药物流产 (The Abortion Pill)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <img src={imgMicroAbortionPills} alt="Pills" className="w-16 h-16 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-pink-100" />
            <p className="mb-2">通常适用于怀孕早期（11周以内）。包含米非司酮和米索前列醇两种药物。</p>
            <div className="mt-3">
               <a href="/learn/Abortion_Pill_Detail" className="text-xs font-bold text-pink-600 flex items-center gap-1 hover:underline">
                 了解详细流程与副作用 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="手术流产 (In-Clinic Abortion)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <img src={imgMicroClinic} alt="Procedure" className="w-16 h-16 object-contain float-right ml-2 bg-white rounded-lg p-1 border border-pink-100" />
            <p className="mb-2">由医生在诊所进行。常见的有负压吸引术（Vacuum Aspiration）和扩张与清宫术（D&E）。</p>
             <div className="mt-3">
               <a href="/learn/In_Clinic_Abortion_Detail" className="text-xs font-bold text-pink-600 flex items-center gap-1 hover:underline">
                 了解手术过程与恢复 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>
          
          <InfoCard title="各州法律与例外 (State Laws)" colorClass="border-red-100 bg-red-50/30 text-red-800">
            <p className="mb-2">有些州禁止堕胎或有很多限制，但也有例外情况（如生命危险）。了解你所在州的法律。</p>
             <div className="mt-3">
               <a href="/learn/Abortion_State_Laws" className="text-xs font-bold text-red-600 flex items-center gap-1 hover:underline">
                 查看各州禁令例外情况 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>
        </div>

        <SectionTitle color="bg-pink-400">做决定前的考虑</SectionTitle>
        <ListSection color="text-pink-500" items={[
          "我准备好成为父母了吗？",
          "这对我的未来、家庭和职业意味着什么？",
          "我有强烈的个人或宗教信仰吗？",
          "有人强迫我做决定吗？（任何决定都应是你自己的）",
          "如果决定堕胎/生下孩子，我需要什么样的支持？"
        ]} />
        
        <p className="text-xs text-muted-foreground mt-4">
          如果你很难做出决定，可以寻找中立的咨询机构（如 All-Options）进行倾诉。避免那些试图恐吓或羞辱你的“危机怀孕中心”。
        </p>

        <SectionTitle color="bg-pink-400">常见问题</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <FaqItem 
            question="堕胎安全吗？" 
            answer="非常安全。堕胎是所有医疗程序中最安全的一种之一，并发症率极低。药流甚至比青霉素、泰诺等药物更安全。" 
          />
          <FaqItem 
            question="堕胎会影响未来的生育能力吗？" 
            answer="通常不会。安全、合法的堕胎不会导致不孕，也不会增加患乳腺癌的风险。" 
          />
           <FaqItem 
            question="我会有什么感觉？" 
            answer="大多数人在堕胎后感到如释重负，但也可能感到悲伤、内疚或遗憾。所有这些情绪都是正常的。" 
          />
        </div>
      </>
    )
  },

  "Abortion_Pill_Detail": {
    title: "药物流产详解",
    subtitle: "The Abortion Pill",
    image: imgMicroAbortionPills,
    color: "from-pink-400 to-rose-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["米非司酮", "米索前列醇", "家庭流产"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          “堕胎药”通常指使用两种药物：米非司酮 (Mifepristone) 和米索前列醇 (Misoprostol)。这种方法通常在怀孕11周以内有效。
        </p>

        <SectionTitle color="bg-pink-400">它是如何工作的？</SectionTitle>
        <div className="space-y-4">
           <div className="bg-white p-4 rounded-xl border border-pink-100">
             <h4 className="font-bold text-pink-700 mb-1">第1步：米非司酮</h4>
             <p className="text-sm text-muted-foreground">这种药会阻断孕酮（一种维持妊娠的激素）。没有孕酮，妊娠就无法继续生长。</p>
           </div>
           <div className="bg-white p-4 rounded-xl border border-pink-100">
             <h4 className="font-bold text-pink-700 mb-1">第2步：米索前列醇</h4>
             <p className="text-sm text-muted-foreground">通常在第一步后48小时内服用。它会导致子宫收缩和出血，将妊娠组织排出。这通常就像一次严重的痛经或早期流产。</p>
           </div>
        </div>

        <SectionTitle color="bg-pink-400">如何服用？</SectionTitle>
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-5 mb-6">
           <p className="text-sm font-bold text-pink-800 mb-2">米索前列醇的服用方式（根据医生指导）：</p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-pink-700">
             <li><strong>含服 (Buccal)：</strong> 放在脸颊和牙龈之间30分钟。</li>
             <li><strong>舌下 (Sublingual)：</strong> 放在舌头下30分钟。</li>
             <li><strong>阴道 (Vaginal)：</strong> 放入阴道深处。</li>
           </ul>
           <p className="text-xs text-pink-600 mt-3 font-bold">不要直接吞服米索前列醇！这会降低药效并增加恶心的副作用。</p>
        </div>

        <SectionTitle color="bg-pink-400">之后会发生什么？</SectionTitle>
        <ListSection color="text-pink-500" items={[
          "出血和痉挛：这是正常的，通常比月经量大，可能有柠檬大小的血块。",
          "持续时间：大部分组织会在服药后4-5小时内排出，但出血可能会持续几周。",
          "副作用：可能伴有恶心、腹泻、发冷或低烧（服药当天）。",
          "复查：使用特殊的验孕棒或进行超声波检查，确保流产完全。"
        ]} />

        <SectionTitle color="bg-pink-400">何时需要就医？</SectionTitle>
        <div className="bg-red-50 rounded-xl p-5 border border-red-100">
          <ul className="list-disc pl-4 space-y-2 text-xs text-red-700">
             <li><strong>出血过多：</strong> 连续2小时，每小时湿透2片大号卫生巾。</li>
             <li><strong>持续发烧：</strong> 服药24小时后仍发烧超过38°C (100.4°F)。</li>
             <li><strong>剧烈疼痛：</strong> 服用止痛药后仍无法缓解的剧烈腹痛。</li>
             <li><strong>无出血：</strong> 服用米索前列醇24小时后仍无出血。</li>
          </ul>
        </div>
      </>
    )
  },

  "In_Clinic_Abortion_Detail": {
    title: "手术流产详解",
    subtitle: "In-Clinic Procedures",
    image: imgMicroClinic,
    color: "from-pink-400 to-rose-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["负压吸引", "D&E", "诊所流程"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          诊所流产是由医生进行的医疗程序。它非常高效（成功率超过99%），且过程迅速。
        </p>

        <SectionTitle color="bg-pink-400">主要程序类型</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="负压吸引术 (Suction Abortion)" colorClass="border-pink-100 bg-white text-pink-800">
             <p className="text-sm">最常见的类型，通常用于怀孕14-16周以内。医生使用温和的吸力清空子宫。</p>
             <p className="text-xs mt-1 font-bold text-pink-600">时长：5-10分钟。</p>
           </InfoCard>
           
           <InfoCard title="扩张与清宫术 (D&E)" colorClass="border-pink-100 bg-white text-pink-800">
             <p className="text-sm">通常用于怀孕16周以后。结合了吸力和医疗器械。可能需要提前一天扩张宫颈。</p>
             <p className="text-xs mt-1 font-bold text-pink-600">时长：10-20分钟。</p>
           </InfoCard>
        </div>

        <SectionTitle color="bg-pink-400">手术过程</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ol className="list-decimal pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>准备：</strong> 你会接受检查，并服用止痛药或镇静剂。</li>
             <li><strong>扩张：</strong> 医生会使用窥阴器，并可能麻醉宫颈，然后轻轻扩张宫颈口。</li>
             <li><strong>吸引：</strong> 医生将一根细管插入子宫，使用吸力清除组织。</li>
             <li><strong>恢复：</strong> 术后你会在恢复室休息约一小时。</li>
           </ol>
        </div>

        <SectionTitle color="bg-pink-400">疼痛管理</SectionTitle>
        <p className="text-sm text-muted-foreground mb-4">
          感觉因人而异，可能像强烈的经期痉挛。医生会提供：
        </p>
        <ListSection color="text-pink-500" items={[
          "局部麻醉（麻醉宫颈）",
          "口服止痛药（如布洛芬）",
          "镇静剂（让你放松或昏昏欲睡）",
          "有些诊所提供深度镇静（你会睡着）"
        ]} />

        <SectionTitle color="bg-pink-400">术后恢复</SectionTitle>
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-5">
           <ul className="list-disc pl-4 space-y-2 text-xs text-pink-700">
             <li>大多数人第二天就能恢复正常活动。</li>
             <li>可能会有类似月经的出血和痉挛，持续几天到几周。</li>
             <li><strong>避免感染：</strong> 医生可能会开抗生素。按时服用。</li>
             <li><strong>避孕：</strong> 你的生育能力会立即恢复。如果你愿意，可以在手术时直接放置宫内节育器 (IUD)。</li>
           </ul>
        </div>
      </>
    )
  },

  "Abortion_State_Laws": {
    title: "各州堕胎禁令例外情况",
    subtitle: "State by State Exceptions",
    image: imgMicroClinic,
    color: "from-red-500 to-orange-500",
    accentColor: "bg-red-500",
    lightColor: "bg-red-50 border-red-100 text-red-700",
    tags: ["法律", "旅行堕胎", "生命危险例外"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          一些州禁止堕胎或设置了严格限制。但即使在禁止堕胎的州，通常也有“例外情况”（例如孕妇生命垂危）。堕胎在许多州仍然是合法的，并且<strong>跨州旅行去堕胎是合法的</strong>。
        </p>
        
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4 mb-6 flex gap-3">
          <AlertCircle className="text-yellow-600 shrink-0" size={20} />
          <p className="text-xs text-yellow-800">
            法律变化很快。请务必访问 <strong>AbortionFinder.org</strong> 获取最新信息。以下信息仅供参考。
          </p>
        </div>

        <SectionTitle color="bg-red-400">各州概览</SectionTitle>
        <div className="space-y-3 h-[500px] overflow-y-auto pr-2">
          {[
            { state: "Alabama", status: "Banned", detail: "禁止。例外：孕妇生命或健康受到严重威胁。" },
            { state: "Alaska", status: "Legal", detail: "合法。无限制。" },
            { state: "Arizona", status: "Restricted", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Arkansas", status: "Banned", detail: "禁止。例外：生命危险。" },
            { state: "California", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Colorado", status: "Legal", detail: "合法。无限制。" },
            { state: "Connecticut", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Delaware", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险、胎儿无法存活。" },
            { state: "District of Columbia", status: "Legal", detail: "合法。无限制。" },
            { state: "Florida", status: "Restricted", detail: "允许至6周。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "Georgia", status: "Restricted", detail: "允许至6周。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "Hawaii", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Idaho", status: "Banned", detail: "禁止。例外：生命危险、强奸/乱伦/贩运。" },
            { state: "Illinois", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Indiana", status: "Banned", detail: "禁止。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "Iowa", status: "Restricted", detail: "允许至6周。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "Kansas", status: "Legal", detail: "允许至21周6天。例外：生命/健康危险。" },
            { state: "Kentucky", status: "Banned", detail: "禁止。例外：生命/健康危险。" },
            { state: "Louisiana", status: "Banned", detail: "禁止。例外：生命/健康危险、胎儿无法存活。" },
            { state: "Maine", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Maryland", status: "Legal", detail: "合法。无限制。" },
            { state: "Massachusetts", status: "Legal", detail: "允许至26周6天。例外：生命/健康危险、胎儿无法存活。" },
            { state: "Michigan", status: "Legal", detail: "合法。无限制。" },
            { state: "Minnesota", status: "Legal", detail: "合法。无限制。" },
            { state: "Mississippi", status: "Banned", detail: "禁止。例外：生命危险、强奸/乱伦/贩运。" },
            { state: "Missouri", status: "Restricted", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Montana", status: "Legal", detail: "允许至24周左右。例外：生命危险。" },
            { state: "Nebraska", status: "Restricted", detail: "允许至11周6天。例外：生命/健康危险、强奸/乱伦/贩运。" },
            { state: "Nevada", status: "Legal", detail: "允许至25周6天。例外：生命/健康危险。" },
            { state: "New Hampshire", status: "Legal", detail: "允许至23周6天。例外：生命/健康危险、胎儿无法存活。" },
            { state: "New Jersey", status: "Legal", detail: "合法。无限制。" },
            { state: "New Mexico", status: "Legal", detail: "合法。无限制。" },
            { state: "New York", status: "Legal", detail: "允许至26周6天。例外：生命/健康危险、胎儿无法存活。" },
            { state: "North Carolina", status: "Restricted", detail: "允许至12周6天。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "North Dakota", status: "Banned", detail: "禁止。例外：生命/健康危险、强奸/乱伦/贩运。" },
            { state: "Ohio", status: "Restricted", detail: "允许至21周6天。例外：生命危险。" },
            { state: "Oklahoma", status: "Banned", detail: "禁止。例外：生命危险。" },
            { state: "Oregon", status: "Legal", detail: "合法。无限制。" },
            { state: "Pennsylvania", status: "Restricted", detail: "允许至23周6天。例外：生命/健康危险。" },
            { state: "Rhode Island", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "South Carolina", status: "Restricted", detail: "允许至6周。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "South Dakota", status: "Banned", detail: "禁止。例外：生命危险。" },
            { state: "Tennessee", status: "Banned", detail: "禁止。例外：生命/健康危险。" },
            { state: "Texas", status: "Banned", detail: "禁止。例外：生命/健康危险。" },
            { state: "Utah", status: "Restricted", detail: "允许至17周6天。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "Vermont", status: "Legal", detail: "合法。无限制。" },
            { state: "Virginia", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "Washington", status: "Legal", detail: "允许至24周左右。例外：生命/健康危险。" },
            { state: "West Virginia", status: "Banned", detail: "禁止。例外：生命/健康危险、胎儿无法存活、强奸/乱伦/贩运。" },
            { state: "Wisconsin", status: "Restricted", detail: "允许至21周6天。例外：生命/健康危险。" },
            { state: "Wyoming", status: "Legal", detail: "合法。无限制。" },
          ].map((item) => (
            <div key={item.state} className="bg-white p-3 rounded-xl border border-border/50">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-sm">{item.state}</span>
                <Badge variant={item.status === "Legal" ? "default" : item.status === "Banned" ? "destructive" : "secondary"} className={item.status === "Legal" ? "bg-green-500 hover:bg-green-600" : item.status === "Banned" ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}>
                  {item.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
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
    title: "短效避孕药 (The Pill)",
    subtitle: "每日一片，科学避孕",
    image: imgBcPill,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["漏服指南", "副作用", "禁忌症"],
    content: (
      <>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
           <h4 className="font-bold text-blue-800 mb-2">💊 它是如何工作的？</h4>
           <p className="text-sm text-blue-700/80 leading-relaxed">
             短效避孕药含有激素（通常是雌激素和孕激素），阻止卵巢排卵，并使宫颈粘液变稠阻止精子。
           </p>
        </div>

        <SectionTitle color="bg-blue-400">漏服了怎么办？(重要)</SectionTitle>
        <div className="space-y-4 mb-6">
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

        <SectionTitle color="bg-blue-400">谁不适合吃药？(禁忌症)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-xs text-muted-foreground mb-2">如果你有以下情况，请咨询医生选择其他方法（如不含雌激素的药或IUD）：</p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>吸烟且超过35岁：</strong> 极大增加血栓风险。</li>
             <li><strong>高血压：</strong> 未控制的高血压。</li>
             <li><strong>偏头痛：</strong> 带有先兆（Aura）的偏头痛。</li>
             <li><strong>血栓病史：</strong> 曾经有过深静脉血栓或肺栓塞。</li>
           </ul>
        </div>

        <SectionTitle color="bg-blue-400">常见副作用</SectionTitle>
        <ListSection items={[
          "不规则出血（点滴出血）：通常在前3个月最常见。",
          "恶心：建议在睡前或饭后服用。",
          "乳房胀痛：通常几周后会消失。",
          "情绪变化：如果你觉得情绪受到严重影响，可以咨询医生换一种品牌的药。"
        ]} />
      </>
    )
  },

  "BC_Condom_Detail": {
    title: "避孕套 (Condoms)",
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

        <SectionTitle color="bg-blue-400">正确使用 5 步曲</SectionTitle>
        <div className="space-y-3 mb-6">
           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">1</div>
             <div>
               <p className="text-sm font-bold text-foreground">检查与拆包</p>
               <p className="text-xs text-muted-foreground">检查有效期。确保包装有气囊感（未破损）。小心撕开，别用牙咬或剪刀，以免划破套套。</p>
             </div>
           </div>
           
           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">2</div>
             <div>
               <p className="text-sm font-bold text-foreground">分清正反</p>
               <p className="text-xs text-muted-foreground">像个卷边小帽子。卷边在外才对。<strong>戴反了？扔掉换新的！</strong>不要翻过来用，上面可能已有精液。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">3</div>
             <div>
               <p className="text-sm font-bold text-foreground">捏住储精囊</p>
               <p className="text-xs text-muted-foreground">戴上前，捏住顶端小囊排出空气。这给精液留出空间，防止压力过大撑破。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">4</div>
             <div>
               <p className="text-sm font-bold text-foreground">戴到底</p>
               <p className="text-xs text-muted-foreground">勃起时戴上，一直展开到根部。</p>
             </div>
           </div>

           <div className="flex gap-4 items-start bg-white p-4 rounded-xl border border-border/50">
             <div className="bg-blue-100 text-blue-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">5</div>
             <div>
               <p className="text-sm font-bold text-foreground">及时撤出</p>
               <p className="text-xs text-muted-foreground">射精后，趁阴茎还硬时，<strong>按住根部</strong>一起撤出。防止精液溢出。</p>
             </div>
           </div>
        </div>

        <SectionTitle color="bg-blue-400">致命错误 (千万别做)</SectionTitle>
        <ListSection items={[
          "戴两层：摩擦会导致破裂！一层就够了。",
          "使用油性润滑剂：凡士林、婴儿油、按摩油会溶解乳胶！必须使用水性或硅基润滑剂。",
          "重复使用：绝对不行。"
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
          宫内节育器 (IUD) 是一个T形小装置，由医生放入子宫内。它是最有效的可逆避孕方法之一 (&gt;99%)。
        </p>

        <SectionTitle color="bg-blue-400">两种类型的区别</SectionTitle>
        <div className="grid grid-cols-1 gap-4 mb-6">
           <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
             <h4 className="font-bold text-orange-800 mb-2">含铜 IUD (ParaGard)</h4>
             <ul className="list-disc pl-4 space-y-1 text-xs text-orange-700">
               <li><strong>无激素：</strong> 适合不想用激素的人。</li>
               <li><strong>有效期：</strong> 最长 10-12 年。</li>
               <li><strong>副作用：</strong> 可能导致月经量变多、痛经加重。</li>
               <li><strong>紧急避孕：</strong> 可以在无保护性行为后5天内放入，作为最有效的紧急避孕药。</li>
             </ul>
           </div>

           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
             <h4 className="font-bold text-blue-800 mb-2">含激素 IUD (Mirena/Kyleena)</h4>
             <ul className="list-disc pl-4 space-y-1 text-xs text-blue-700">
               <li><strong>少激素：</strong> 只有孕激素，且主要在局部作用。</li>
               <li><strong>有效期：</strong> 3-8 年。</li>
               <li><strong>副作用：</strong> 可能导致不规则出血。</li>
               <li><strong>福利：</strong> 通常会让月经变少，甚至消失，缓解痛经。</li>
             </ul>
           </div>
        </div>

        <SectionTitle color="bg-blue-400">放置过程与风险</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <p className="text-sm font-bold text-foreground mb-2">关于疼痛：</p>
          <p className="text-xs text-muted-foreground mb-3">
            放置时会有痉挛痛（像严重痛经）。建议提前服用止痛药。
          </p>
          <p className="text-sm font-bold text-foreground mb-2">关于脱落：</p>
          <p className="text-xs text-muted-foreground">
            极少数情况 IUD 会滑出。建议每月经期后检查一下阴道内是否有 IUD 的尾丝（不要拉它！只是摸摸它还在不在）。
          </p>
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
          皮下埋植剂（如 Nexplanon）是一根火柴棍大小的柔韧塑料棒，植入上臂皮下。它释放孕激素。
        </p>

        <SectionTitle color="bg-blue-400">为什么选择它？</SectionTitle>
        <ListSection items={[
          "极其有效：失败率只有 0.05%，比结扎手术还可靠。",
          "省心：一旦植入，3-5年不用管它。",
          "隐形：别人看不出来，只有你自己能摸到它。",
          "可逆：取出后，受孕能力立即恢复。"
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
  "BC_Patch_Detail": {
    title: "避孕贴 (The Patch)",
    subtitle: "每周一贴，简单方便",
    image: imgBcPatch,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["使用方法", "副作用", "补救措施"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕贴（如 Xulane）是一种贴在皮肤上的米色小方块。每周换一次，连续3周，第4周休息。
        </p>

        <SectionTitle color="bg-blue-400">使用贴士</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>位置：</strong> 腹部、臀部、背部或上臂外侧。不要贴在胸部。</li>
             <li><strong>轮换：</strong> 每次换新贴片时，换个位置贴，以防皮肤过敏。</li>
             <li><strong>洗澡：</strong> 它是防水的，游泳洗澡都没问题。</li>
           </ul>
        </div>

        <SectionTitle color="bg-blue-400">风险提示</SectionTitle>
        <InfoCard title="血栓风险" colorClass="border-red-100 bg-red-50/50 text-red-800">
           <p className="text-xs">避孕贴释放的雌激素水平比口服药略高，因此血栓风险可能略高（虽然绝对风险仍然很低）。吸烟者、35岁以上女性慎用。</p>
        </InfoCard>
      </>
    )
  },

  "BC_Ring_Detail": {
    title: "阴道避孕环 (The Ring)",
    subtitle: "每月一次，私密无感",
    image: imgBcRing,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["NuvaRing", "放置方法", "储存"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕环（如 NuvaRing）是一个柔软透明的弹性圆环。放入阴道3周，取出休息1周。
        </p>

        <SectionTitle color="bg-blue-400">储存与使用</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>储存：</strong> 购买后如果是 NuvaRing，建议在药房拿回家后放入<strong>冰箱</strong>冷藏（如果在室温下，有效期只有4个月）。Annovera 不需要冷藏。</li>
             <li><strong>性爱时：</strong> 不需要取出。如果取出，不能超过 3 小时，否则避孕失效。</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_Shot_Detail": {
    title: "避孕针 (The Shot)",
    subtitle: "三个月一针，隐私性强",
    image: imgBcShot,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Depo-Provera", "副作用", "恢复生育"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕针（Depo-Provera）每3个月注射一次。
        </p>

        <SectionTitle color="bg-blue-400">重要缺点 (须知)</SectionTitle>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mb-6">
           <ul className="list-disc pl-4 space-y-2 text-xs text-amber-800">
             <li><strong>恢复排卵慢：</strong> 停针后，平均需要 10 个月才能怀孕。不适合短期避孕或近期打算怀孕的人。</li>
             <li><strong>骨密度流失：</strong> 长期使用（超过2年）可能导致骨密度下降。建议多补钙和维生素D。</li>
             <li><strong>体重增加：</strong> 部分使用者会有明显的食欲增加和体重增长。</li>
           </ul>
        </div>

        <SectionTitle color="bg-blue-400">优点</SectionTitle>
        <InfoCard title="极高的隐私性" colorClass="border-green-100 bg-green-50/50 text-green-800">
          <p className="text-xs">没人知道你在避孕。没有药瓶，没有包装。</p>
        </InfoCard>
      </>
    )
  },

  "BC_Barrier_Detail": {
    title: "屏障避孕法 (Barrier Methods)",
    subtitle: "膈膜、宫颈帽与海绵",
    image: imgBcCondom, 
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["杀精剂", "非激素", "使用方法"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          除了避孕套，还有其他屏障方法：阴道隔膜 (Diaphragm)、宫颈帽 (Cervical Cap) 和避孕海绵 (Sponge)。它们都必须配合<strong>杀精剂</strong>使用。
        </p>

        <SectionTitle color="bg-blue-400">种类介绍</SectionTitle>
        <div className="space-y-4">
          <InfoCard title="阴道隔膜 (Diaphragm)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <p className="text-xs mb-2">一个浅的硅胶杯。放入阴道覆盖宫颈。</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
               <li>有效率：约 88% (配合杀精剂)。</li>
               <li>需要医生处方和测量尺寸。</li>
               <li>性爱前放入，性爱后必须保留至少6小时。</li>
            </ul>
             <div className="mt-2 pt-2 border-t border-blue-200/50">
               <a href="/learn/BC_Diaphragm_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 详细指南 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

          <InfoCard title="宫颈帽 (Cervical Cap)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <p className="text-xs mb-2">比隔膜小，像个小水手帽，紧扣在宫颈上。</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
               <li>有效率：未生育过约 86%，生育过约 71%。</li>
               <li>可以留置体内长达48小时。</li>
            </ul>
             <div className="mt-2 pt-2 border-t border-blue-200/50">
               <a href="/learn/BC_CervicalCap_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 详细指南 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>

           <InfoCard title="避孕海绵 (The Sponge)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <p className="text-xs mb-2">含有杀精剂的小泡沫海绵。</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
               <li>无需处方，药店可买。</li>
               <li>使用前要用水浸湿以激活杀精剂。</li>
               <li>一次性使用，取出后丢弃。</li>
            </ul>
             <div className="mt-2 pt-2 border-t border-blue-200/50">
               <a href="/learn/BC_Sponge_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                 详细指南 <ChevronRight size={12}/>
               </a>
            </div>
          </InfoCard>
        </div>
      </>
    )
  },

  "BC_FAM_Detail": {
    title: "自然避孕法 (Fertility Awareness)",
    subtitle: "了解身体，计算排卵期",
    image: imgBirthControl, 
    color: "from-green-400 to-emerald-500",
    accentColor: "bg-green-500",
    lightColor: "bg-green-50 border-green-100 text-green-700",
    tags: ["安全期", "体温法", "宫颈粘液"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          自然避孕法（FAMs）是指通过追踪月经周期和身体信号（如体温、粘液）来判断排卵期，并在“危险期”避免性生活或使用避孕套。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
           <h4 className="font-bold text-yellow-800 text-sm mb-1">⚠️ 警告</h4>
           <p className="text-xs text-yellow-700">
             这种方法失败率较高（约24%的人会在一年内意外怀孕）。它需要极高的自律性，并且你的月经周期必须非常规律。
           </p>
        </div>

        <SectionTitle color="bg-green-400">三大指标</SectionTitle>
        <ListSection color="text-green-500" items={[
          "基础体温 (Temperature)：每天早上醒来第一件事量体温。排卵后体温会轻微升高。",
          "宫颈粘液 (Cervical Mucus)：排卵期时，分泌物会变得像生鸡蛋清一样透明、拉丝。",
          "日历记录 (Calendar)：记录月经周期，推算排卵日。"
        ]} />
      </>
    )
  },

  "BC_Abstinence_Detail": {
    title: "禁欲与边缘性行为",
    subtitle: "Abstinence & Outercourse",
    image: imgRelationships, 
    color: "from-purple-400 to-violet-500",
    accentColor: "bg-purple-500",
    lightColor: "bg-purple-50 border-purple-100 text-purple-700",
    tags: ["100%有效", "无副作用", "情感亲密"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          禁欲（Abstinence）是不进行阴道性交。它是唯一 100% 有效防止怀孕的方法。
        </p>

        <SectionTitle color="bg-purple-400">什么是边缘性行为 (Outercourse)？</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
           <p className="text-sm text-muted-foreground mb-3">
             指除了阴道性交以外的其他亲密行为。既能享受快感，又不会怀孕。
           </p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>包括：</strong> 接吻、爱抚、手淫、互相摩擦（隔着衣服）、口交（需防范STDs）。</li>
             <li><strong>原则：</strong> 只要精液不进入阴道或外阴区域，就不会怀孕。</li>
           </ul>
        </div>
      </>
    )
  },

   "BC_Breastfeeding_Detail": {
    title: "哺乳期避孕 (LAM)",
    subtitle: "自然闭经法",
    image: imgPregnancy, 
    color: "from-pink-400 to-rose-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["产后", "激素抑制", "有时限"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          哺乳闭经法 (LAM) 是利用纯母乳喂养来自然抑制排卵。
        </p>

        <SectionTitle color="bg-pink-400">生效的三个必须条件</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-xs text-muted-foreground mb-3">只有同时满足以下3点，才有效（有效率约98%）：</p>
           <ListSection color="text-pink-500" items={[
             "1. 宝宝小于 6 个月大。",
             "2. 你完全没有来月经（产后出血不算）。",
             "3. 纯母乳喂养：不加配方奶，白天至少每4小时喂一次，晚上每6小时一次。"
           ]} />
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
           <p className="text-xs text-blue-700">
             一旦任何一个条件不满足（比如宝宝开始吃辅食，或者你来例假了），这种方法的避孕效果就会立刻消失！你需要立即采用其他避孕措施。
           </p>
        </div>
      </>
    )
  },

  "BC_Sponge_Detail": {
    title: "避孕海绵 (The Sponge)",
    subtitle: "随用随弃，含杀精剂",
    image: imgBcCondom, // Generic
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["无需处方", "含杀精剂", "一次性"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          避孕海绵是一个充满杀精剂的小圆海绵。使用前用水浸湿，然后放入阴道深处覆盖宫颈。它能阻挡精子并释放杀精剂。
        </p>

        <SectionTitle color="bg-blue-400">有效率</SectionTitle>
        <div className="space-y-4 mb-6">
           <InfoCard title="未生育过" colorClass="border-blue-100 bg-blue-50/50 text-blue-800">
             <p className="text-sm font-bold">约 86% - 91%</p>
             <p className="text-xs">如果你从未生过孩子，海绵的效果更好。</p>
           </InfoCard>
           <InfoCard title="已生育过" colorClass="border-orange-100 bg-orange-50/50 text-orange-800">
             <p className="text-sm font-bold">约 78% - 80%</p>
             <p className="text-xs">生过孩子后，宫颈口形状改变，可能导致海绵贴合不严，效果下降。</p>
           </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">使用方法</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ol className="list-decimal pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>激活：</strong> 必须先用水弄湿，轻轻挤压直到起泡（这很重要！）。</li>
             <li><strong>放入：</strong> 折叠海绵，推入阴道深处，凹面盖住宫颈。</li>
             <li><strong>时效：</strong> 可在性爱前24小时内放入。放入后24小时内可进行多次性爱，无需更换。</li>
             <li><strong>取出：</strong> 最后一次射精后，必须让海绵留在体内至少 6 小时。但总共不要超过 30 小时（预防中毒性休克综合征 TSS）。</li>
             <li><strong>丢弃：</strong> 取出后丢进垃圾桶，不要冲进马桶。不可重复使用。</li>
           </ol>
        </div>
        
        <SectionTitle color="bg-blue-400">安全性警告 (TSS)</SectionTitle>
        <InfoCard title="中毒性休克综合征 (TSS)" colorClass="border-red-100 bg-red-50 text-red-800">
           <p className="text-xs">这是一种罕见但严重的疾病。症状包括突然发高烧、晒伤样皮疹、腹泻、呕吐。如果你出现这些症状，立即取出海绵并就医。</p>
           <p className="text-xs mt-2 font-bold">为了安全：不要在经期使用海绵。不要留置超过 30 小时。</p>
        </InfoCard>
      </>
    )
  },

  "BC_Diaphragm_Detail": {
    title: "阴道隔膜 (Diaphragm)",
    subtitle: "可重复使用的屏障",
    image: imgBcCondom,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["需配合杀精剂", "需处方", "非激素"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          阴道隔膜是一个浅的硅胶杯，放入阴道覆盖宫颈。它必须配合杀精剂使用。
        </p>

        <SectionTitle color="bg-blue-400">有效率</SectionTitle>
        <InfoCard title="约 88% - 94%" colorClass="border-blue-100 bg-blue-50/50 text-blue-800">
          <p className="text-xs">完美使用下有效率很高，但实际使用中约为83%。配合杀精剂是必须的。</p>
        </InfoCard>

        <SectionTitle color="bg-blue-400">使用要点与安全</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>配合杀精剂：</strong> 每次性爱前，在杯内和边缘涂抹杀精剂。</li>
             <li><strong>再次性爱：</strong> 如果要在取出前再次性爱，必须再注入更多杀精剂。</li>
             <li><strong>取出时间：</strong> 性爱后必须保留至少 6 小时。总共不要超过 24 小时。</li>
             <li><strong>保养：</strong> 取出后用温和肥皂清洗，晾干。定期检查有无破损。</li>
             <li><strong>风险：</strong> 可能增加尿路感染 (UTI) 风险。如出现排尿痛，请咨询医生。</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_CervicalCap_Detail": {
    title: "宫颈帽 (Cervical Cap)",
    subtitle: "小巧的屏障",
    image: imgBcCondom,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["需处方", "长效留置", "杀精剂"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          宫颈帽（如 FemCap）比隔膜更小，像个小帽子紧扣在宫颈上。同样必须配合杀精剂。
        </p>

        <SectionTitle color="bg-blue-400">有效率</SectionTitle>
        <div className="space-y-4 mb-6">
           <InfoCard title="未生育过" colorClass="border-blue-100 bg-blue-50/50 text-blue-800">
             <p className="text-sm font-bold">约 86%</p>
           </InfoCard>
           <InfoCard title="已生育过" colorClass="border-orange-100 bg-orange-50/50 text-orange-800">
             <p className="text-sm font-bold">约 71%</p>
             <p className="text-xs">生育后宫颈变化显著影响效果。</p>
           </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">使用要点</SectionTitle>
        <ListSection items={[
          "放入前涂抹杀精剂。",
          "可以提前放入，最长可在体内留置 48 小时（比隔膜久）。",
          "性爱后必须保留至少 6 小时。",
          "不防性病 (STDs)。",
          "注意：如出现阴道刺激或异味，可能是对材质或杀精剂过敏。"
        ]} />
      </>
    )
  },

  "BC_InternalCondom_Detail": {
    title: "内置/女用避孕套 (Internal Condom)",
    subtitle: "自主掌控，防病防孕",
    image: imgBcCondom,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["防STDs", "无乳胶", "可提前放入"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          内置避孕套（Internal Condom，曾称女用避孕套）是一个放入阴道或肛门的柔软塑料套管。它由两端的环支撑，内环用于固定在阴道深处，外环留在体外。
        </p>

        <SectionTitle color="bg-blue-400">有效率</SectionTitle>
        <InfoCard title="约 79% - 95%" colorClass="border-blue-100 bg-blue-50/50 text-blue-800">
          <p className="text-xs">实际使用有效率约79%。如果每次都完美使用可达95%。</p>
        </InfoCard>

        <SectionTitle color="bg-blue-400">优点与使用</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>防 STDs：</strong> 覆盖外阴面积比男用避孕套大，提供额外保护。</li>
             <li><strong>材质优势：</strong> 通常是聚氨酯或丁腈，不含乳胶，导热性好，感觉更自然。</li>
             <li><strong>提前准备：</strong> 可以在性爱前数小时放入，不必在激情时刻打断。</li>
             <li><strong>禁忌：</strong> 绝对不要和男用避孕套同时使用！摩擦会导致破裂。</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_Spermicide_Detail": {
    title: "杀精剂 (Spermicide)",
    subtitle: "辅助避孕手段",
    image: imgBcCondom, // Generic
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["凝胶/泡沫", "需等待", "不防病"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          杀精剂通过化学物质（通常是壬苯醇醚-9）杀死精子或使其失去活力。它有凝胶、泡沫、膜等形式。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
           <h4 className="font-bold text-yellow-800 text-sm mb-1">单独使用效果不佳</h4>
           <p className="text-xs text-yellow-700">
             单独使用失败率较高（约21%）。强烈建议搭配避孕套、隔膜等屏障方法使用。
           </p>
        </div>

        <SectionTitle color="bg-blue-400">使用须知与风险</SectionTitle>
        <ListSection items={[
          "等待时间：放入后通常需要等待 10-15 分钟让其溶解或起效（看说明书）。",
          "时效性：通常只有 1 小时有效。如果超过时间需补放。",
          "副作用：频繁使用可能刺激阴道或阴茎皮肤。",
          "HIV风险：如果皮肤因刺激而破损，反而会增加感染 HIV 或其他 STDs 的风险。",
          "不可食用：只供外用。"
        ]} />
      </>
    )
  },

  "BC_Withdrawal_Detail": {
    title: "体外射精 (Withdrawal)",
    subtitle: "Pulling Out",
    image: imgBirthControl,
    color: "from-orange-400 to-amber-500",
    accentColor: "bg-orange-500",
    lightColor: "bg-orange-50 border-orange-100 text-orange-700",
    tags: ["高风险", "免费", "需要技巧"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          体外射精指在射精前将阴茎完全从阴道抽出，并射在远离外阴的地方。虽然免费且无副作用，但失败率极高。
        </p>

        <SectionTitle color="bg-orange-400">为什么容易失败？(有效率约 78%)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>前列腺液（Pre-cum）：</strong> 在射精前流出的液体中可能含有少量精子。</li>
             <li><strong>时机难控：</strong> 在高潮来临前很难精确控制抽出时间。需要极强的自我控制力。</li>
             <li><strong>位置错误：</strong> 即使射在体外，如果精液流到外阴口，精子仍可能游进去。</li>
           </ul>
        </div>

        <SectionTitle color="bg-orange-400">正确做法</SectionTitle>
        <ListSection color="text-orange-500" items={[
          "必须在任何精液（包括前列腺液）流出前抽出。",
          "射在远离阴道的地方（如大腿、肚子）。",
          "如果不小心射在里面或门口，立即使用紧急避孕药。",
          "结合避孕套使用效果更好。"
        ]} />
      </>
    )
  },

  "BC_TubalLigation_Detail": {
    title: "绝育手术 (Sterilization)",
    subtitle: "一劳永逸的终极方案",
    image: imgBcIud,
    color: "from-slate-400 to-gray-500",
    accentColor: "bg-slate-500",
    lightColor: "bg-slate-50 border-slate-100 text-slate-700",
    tags: ["永久性", "手术", "输卵管/输精管"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          绝育是一种永久性的避孕方式。对女性是输卵管结扎，对男性是输精管结扎。有效率均超过 99%。
        </p>

        <SectionTitle color="bg-slate-400">男性输精管结扎 (Vasectomy)</SectionTitle>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
           <h4 className="font-bold text-blue-800 mb-2">更加简单安全的选择</h4>
           <p className="text-sm text-blue-800/80 mb-3">
             相比女性结扎，男性结扎手术更简单、风险更小、恢复更快、费用更低。
           </p>
           <InfoCard title="手术过程" colorClass="border-blue-100 bg-white text-blue-800">
             <p className="text-xs">医生切断或封闭输精管，使精子无法进入精液。手术通常在门诊进行，仅需局麻。</p>
           </InfoCard>
           <InfoCard title="起效时间 (重要!)" colorClass="border-yellow-100 bg-yellow-50 text-yellow-800">
             <p className="text-xs"><strong>不是立即生效！</strong> 手术后输精管中仍有残留精子。需要等待至少 2 个月或射精 20 次以上，并经精液检测确认无精子后，才算成功。在此期间必须使用其他避孕措施。</p>
           </InfoCard>
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="bg-white p-2 rounded border border-blue-100">
                <span className="font-bold block text-blue-600">费用</span>
                $0 - $1,000 (通常保险覆盖)
              </div>
              <div className="bg-white p-2 rounded border border-blue-100">
                <span className="font-bold block text-blue-600">安全性</span>
                极高。风险包括轻微感染、血肿 (Hematoma)。
              </div>
            </div>
        </div>

        <SectionTitle color="bg-slate-400">女性输卵管结扎 (Tubal Ligation)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-sm text-muted-foreground mb-2">
             通过手术切断、结扎或封闭输卵管。
           </p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>费用：</strong> $0 - $6,000 (视保险而定)。</li>
             <li><strong>安全性：</strong> 非常安全，但作为腹部手术，风险略高于男性结扎（如麻醉反应、出血）。</li>
             <li><strong>异位妊娠风险：</strong> 虽然极罕见，但如果结扎后怀孕，发生宫外孕的风险较高，需立即就医。</li>
             <li><strong>永久性：</strong> 虽然有复通手术，但昂贵且成功率不保。请将其视为永久性决定。</li>
           </ul>
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
  },

  "BC_IUD_Disadvantages": {
    title: "Disadvantages of IUDs",
    subtitle: "Side Effects & Risks",
    image: imgBcIud,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Pain", "Side Effects", "Risks"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          Some people have side effects that bother them after getting an IUD, but these usually go away after a few months. Rarely, the side effects can be serious.
        </p>
        <SectionTitle color="bg-blue-400">Side Effects</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-sm text-muted-foreground mb-3">
             Hormonal IUDs and copper (non-hormonal) IUDs have different side effects. Your side effects will probably ease up after about 3–6 months.
           </p>
           <ListSection items={[
             "Pain when the IUD is put in (cramping)",
             "Spotting between periods",
             "Irregular periods",
             "Heavier periods and worse cramps (Copper IUD)",
             "Lighter periods or no periods at all (Hormonal IUD)"
           ]} />
        </div>

        <SectionTitle color="bg-blue-400">Risks (Rare)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <InfoCard title="Slipping Out" colorClass="border-red-100 bg-red-50/30 text-red-800">
             <p className="text-xs">There's a small chance your IUD could slip out of place. It can happen any time, but it's more common during the first 3 months.</p>
           </InfoCard>
           <InfoCard title="Infection" colorClass="border-red-100 bg-red-50/30 text-red-800">
             <p className="text-xs">Bacteria can get into your uterus when the IUD is put in and cause an infection.</p>
           </InfoCard>
        </div>
      </>
    )
  },

  "BC_Shot_Disadvantages": {
    title: "Disadvantages of the Shot",
    subtitle: "Depo-Provera Side Effects",
    image: imgBcShot,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Side Effects", "Bone Density", "Return to Fertility"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          The birth control shot is safe and convenient, but there are some disadvantages and side effects to consider.
        </p>
        
        <SectionTitle color="bg-blue-400">Key Disadvantages</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="Need for Regular Injections" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
             <p className="text-xs">You have to get an injection every 3 months. If you’re late, you could get pregnant.</p>
           </InfoCard>
           
           <InfoCard title="Return to Fertility" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
             <p className="text-xs">It may take up to 10 months after stopping the shot to get pregnant. If you want to get pregnant soon after stopping birth control, this might not be the method for you.</p>
           </InfoCard>
           
           <InfoCard title="Bone Density" colorClass="border-red-100 bg-red-50/30 text-red-800">
             <p className="text-xs">Using the shot for a long time may cause temporary bone thinning. It usually goes back to normal after you stop using it.</p>
           </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">Common Side Effects</SectionTitle>
        <ListSection items={[
             "Changes in your period (bleeding more, spotting, or no period)",
             "Nausea",
             "Weight gain",
             "Headaches",
             "Sore breasts",
             "Depression"
        ]} />
      </>
    )
  },

  "BC_Pill_Disadvantages": {
    title: "Disadvantages of the Pill",
    subtitle: "Side Effects & Routine",
    image: imgBcPill,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Daily Routine", "Side Effects", "Risks"],
    content: (
      <>
         <SectionTitle color="bg-blue-400">The Daily Routine</SectionTitle>
         <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
            <p className="text-sm text-muted-foreground">
              You have to take the pill every day. Remembering to take a pill every day can be hard. If you have a busy life, you might miss a pill, which increases the risk of pregnancy.
            </p>
         </div>

         <SectionTitle color="bg-blue-400">Side Effects</SectionTitle>
         <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
            <ListSection items={[
              "Spotting or bleeding between periods",
              "Sore breasts",
              "Nausea",
              "Headaches",
              "Changes in sex drive"
            ]} />
            <p className="text-xs text-muted-foreground mt-2">These usually go away after 2-3 months.</p>
         </div>
      </>
    )
  },

  "BC_Pill_Missed_Detail": {
    title: "Missed a Pill?",
    subtitle: "What to do next",
    image: imgBcPill,
    color: "from-red-400 to-orange-500",
    accentColor: "bg-red-500",
    lightColor: "bg-red-50 border-red-100 text-red-700",
    tags: ["Emergency", "Mistake", "Instructions"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           Knowing what to do when you miss a birth control pill is important. It depends on how many you missed.
         </p>
         
         <InfoCard title="Missed 1 Pill?" colorClass="border-yellow-100 bg-yellow-50/30 text-yellow-800">
            <p className="text-sm font-bold mb-1">Take it as soon as possible.</p>
            <p className="text-xs">Take your next pill when you normally would. This might mean taking 2 pills in 1 day. You don't need backup birth control.</p>
         </InfoCard>

         <InfoCard title="Missed 2 or more Pills?" colorClass="border-red-100 bg-red-50/30 text-red-800">
            <p className="text-sm font-bold mb-1">Take the most recent missed pill ASAP.</p>
            <p className="text-xs mb-2">Continue taking remaining pills daily. <strong className="text-red-600">Use condoms for the next 7 days.</strong></p>
            <p className="text-xs">If you missed pills in the first week of the pack and had sex, you might need emergency contraception.</p>
         </InfoCard>
      </>
    )
  },

  "BC_Ring_Mistakes": {
    title: "Ring Mistakes",
    subtitle: "NuvaRing & Annovera",
    image: imgBcRing,
    color: "from-purple-400 to-pink-500",
    accentColor: "bg-purple-500",
    lightColor: "bg-purple-50 border-purple-100 text-purple-700",
    tags: ["Mistake", "Out too long", "Forgot to change"],
    content: (
      <>
        <SectionTitle color="bg-purple-400">Ring Out Too Long?</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <h5 className="font-bold text-sm mb-2">NuvaRing / Annovera</h5>
           <p className="text-sm text-muted-foreground mb-2">
             If the ring has been out of the vagina for <strong className="text-foreground">more than 2 hours</strong> (Annovera) or <strong className="text-foreground">more than 3 hours</strong> (NuvaRing):
           </p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li>Wash the ring and put it back in ASAP.</li>
             <li>Use backup birth control (condoms) for 7 days.</li>
             <li>If you had sex in the last 5 days, consider emergency contraception.</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_Patch_Mistakes": {
    title: "Patch Mistakes",
    subtitle: "Loose or Fell Off?",
    image: imgBcPatch,
    color: "from-blue-400 to-indigo-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Mistake", "Fell Off", "Loose"],
    content: (
      <>
        <SectionTitle color="bg-blue-400">Patch Fell Off?</SectionTitle>
        
        <InfoCard title="Less than 24 hours" colorClass="border-yellow-100 bg-yellow-50/30 text-yellow-800">
           <p className="text-xs">Try to stick it back on. If it doesn't stick, put on a new one. No backup needed.</p>
        </InfoCard>
        
        <InfoCard title="More than 24 hours" colorClass="border-red-100 bg-red-50/30 text-red-800">
           <p className="text-xs">Put on a new patch ASAP. This is your new "Patch Change Day". <strong className="text-red-600">Use condoms for 7 days.</strong></p>
        </InfoCard>
      </>
    )
  },

  "BC_InternalCondom_Disadvantages": {
    title: "Internal Condom Disadvantages",
    subtitle: "Pros and Cons",
    image: imgBcCondom,
    color: "from-purple-400 to-pink-500",
    accentColor: "bg-purple-500",
    lightColor: "bg-purple-50 border-purple-100 text-purple-700",
    tags: ["Usage", "Disadvantages"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          Internal condoms may take a bit of practice to get used to.
        </p>
        <ListSection items={[
          "You have to use one every time you have sex.",
          "It can take some getting used to (insertion process).",
          "It might slip into the vagina or anus during sex.",
          "The outer ring might hang out and be visible."
        ]} />
      </>
    )
  },


  "BC_TubalLigation_Expectations": {
    title: "Tubal Ligation Expectations",
    subtitle: "What to expect",
    image: imgBirthControl,
    color: "from-slate-400 to-gray-500",
    accentColor: "bg-slate-500",
    lightColor: "bg-slate-50 border-slate-100 text-slate-700",
    tags: ["Surgery", "Recovery", "Permanent"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          Tubal ligation is a surgical procedure to block fallopian tubes.
        </p>
        <SectionTitle color="bg-slate-400">The Procedure</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-sm text-muted-foreground mb-2">
             You'll get general anesthesia. The doctor makes small cuts in your belly and closes off the tubes.
           </p>
        </div>
        
        <SectionTitle color="bg-slate-400">Recovery</SectionTitle>
        <ListSection items={[
          "Most people recover within a couple of days.",
          "Avoid lifting heavy things for a week.",
          "You may have some pain, cramps, or shoulder pain (from gas) after surgery."
        ]} />
      </>
    )
  },

  "BC_Vasectomy_Expectations": {
    title: "Vasectomy Expectations",
    subtitle: "Surgery & Recovery",
    image: imgBirthControl,
    color: "from-slate-400 to-gray-500",
    accentColor: "bg-slate-500",
    lightColor: "bg-slate-50 border-slate-100 text-slate-700",
    tags: ["Simple Surgery", "Quick Recovery"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          A vasectomy is a quick, easy surgical procedure. You can go home right after.
        </p>
        
        <SectionTitle color="bg-slate-400">Does it hurt?</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-sm text-muted-foreground">
             Probably not much. You get local anesthesia. You might feel some discomfort, but not terrible pain.
           </p>
        </div>

        <SectionTitle color="bg-slate-400">After the procedure</SectionTitle>
        <ListSection items={[
          "Rest for a couple of days.",
          "Ice your genitals to help with swelling.",
          "Wear snug underwear for support.",
          "Wait 1 week before sex or exercise."
        ]} />

        <InfoCard title="Important" colorClass="border-yellow-100 bg-yellow-50/30 text-yellow-800">
           <p className="text-xs">You are NOT sterile immediately. You must wait about 2 months and get a semen test to confirm the sperm are gone.</p>
        </InfoCard>
      </>
    )
  },
  
  "BC_Implant_Insertion": {
    title: "Implant Insertion",
    subtitle: "What happens?",
    image: imgBcImplant,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Procedure", "Quick", "Numbing"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          Putting the implant in only takes a few minutes.
        </p>
        <ListSection items={[
          "Doctor gives you a numbing shot (might feel a pinch).",
          "They use a special tool to slide the implant under skin.",
          "You shouldn't feel pain during insertion.",
          "Your arm might be sore or bruised for a few days."
        ]} />
      </>
    )
  },

  "BC_Implant_Removal": {
    title: "Implant Removal",
    subtitle: "Taking it out",
    image: imgBcImplant,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Removal", "Replacement"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           Nexplanon removal is usually fast and easy.
        </p>
        <ListSection items={[
           "Numbing shot is given.",
           "Small cut is made to reach the implant.",
           "Implant is pulled out.",
           "You can get a new one put in at the same time if you want."
        ]} />
        <p className="text-xs text-muted-foreground mt-4">
           You can get pregnant right away after removal.
        </p>
      </>
    )
  },

  "BC_IUD_Insertion": {
    title: "IUD Insertion",
    subtitle: "What to expect",
    image: imgBcIud,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["Procedure", "Cramps"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           The process usually takes less than five minutes.
        </p>
        <SectionTitle color="bg-blue-400">The Process</SectionTitle>
        <ListSection items={[
           "Doctor puts a speculum in vagina.",
           "Uses an inserter to put IUD through cervix into uterus.",
           "You may feel cramping or pain (like strong period cramps).",
           "It's over quickly."
        ]} />
        
        <InfoCard title="Afterwards" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
           <p className="text-xs">You might have cramping and spotting for a while. Plan to rest after your appointment.</p>
        </InfoCard>
      </>
    )
  },

  "BC_Breastfeeding_Options": {
    title: "Breastfeeding & Birth Control",
    subtitle: "Safe options",
    image: imgPregnancy,
    color: "from-pink-400 to-rose-500",
    accentColor: "bg-pink-500",
    lightColor: "bg-pink-50 border-pink-100 text-pink-700",
    tags: ["Postpartum", "Safe", "Milk Supply"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           You have many safe options while breastfeeding. Hormonal methods usually won't hurt you or your baby.
        </p>
        <SectionTitle color="bg-pink-400">Safe Methods</SectionTitle>
        <ListSection items={[
           "Copper IUD (Non-hormonal)",
           "Hormonal IUDs (Mirena, Kyleena, etc.)",
           "Implant (Nexplanon)",
           "The Shot (Depo-Provera)",
           "Mini-pills (Progestin-only pills)"
        ]} />
        <InfoCard title="Wait 3 weeks" colorClass="border-yellow-100 bg-yellow-50/30 text-yellow-800">
           <p className="text-xs">Avoid methods with estrogen (pill, patch, ring) for the first 3 weeks after birth.</p>
        </InfoCard>
      </>
    )
  },
  
  "BC_FAM_Calendar": {
    title: "Calendar Method (FAM)",
    subtitle: "Tracking your cycle",
    image: imgWellness,
    color: "from-green-400 to-emerald-500",
    accentColor: "bg-green-500",
    lightColor: "bg-green-50 border-green-100 text-green-700",
    tags: ["Natural", "Tracking", "Math"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           Predict fertile days by tracking the length of your menstrual cycles.
        </p>
        <ListSection items={[
           "Track cycle length for at least 6 months first.",
           "Find shortest cycle: Subtract 18 = First fertile day.",
           "Find longest cycle: Subtract 11 = Last fertile day.",
           "Avoid sex during the fertile window."
        ]} />
        <p className="text-xs text-muted-foreground">Not accurate if your cycles are shorter than 27 days.</p>
      </>
    )
  },

  "BC_FAM_CervicalMucus": {
    title: "Cervical Mucus Method",
    subtitle: "Checking discharge",
    image: imgWellness,
    color: "from-green-400 to-emerald-500",
    accentColor: "bg-green-500",
    lightColor: "bg-green-50 border-green-100 text-green-700",
    tags: ["Body Signs", "Daily Check"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           Your cervical mucus changes throughout your cycle.
        </p>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ul className="space-y-3 text-sm">
              <li>🔴 <strong>Period:</strong> Unsafe.</li>
              <li>☁️ <strong>Dry Days (after period):</strong> Safe.</li>
              <li>💧 <strong>Sticky/White:</strong> Less safe (ovulation coming).</li>
              <li>🥚 <strong>Slippery/Clear (Egg white):</strong> <span className="text-red-500 font-bold">Unsafe (Most Fertile!)</span>.</li>
              <li>☁️ <strong>Cloudy/Dry (after ovulation):</strong> Safe again.</li>
           </ul>
        </div>
      </>
    )
  },

  "BC_FAM_Temperature": {
    title: "Temperature Method",
    subtitle: "Basal Body Temperature",
    image: imgWellness,
    color: "from-green-400 to-emerald-500",
    accentColor: "bg-green-500",
    lightColor: "bg-green-50 border-green-100 text-green-700",
    tags: ["Thermometer", "Daily"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           Your body temperature rises slightly after ovulation.
        </p>
        <ListSection items={[
           "Take temp every morning BEFORE getting out of bed.",
           "Use a special basal thermometer.",
           "Safe days begin after temp rise lasts 3 days.",
        ]} />
      </>
    )
  },

  "BC_FAM_StandardDays": {
    title: "Standard Days Method",
    subtitle: "CycleBeads",
    image: imgWellness,
    color: "from-green-400 to-emerald-500",
    accentColor: "bg-green-500",
    lightColor: "bg-green-50 border-green-100 text-green-700",
    tags: ["Simple", "CycleBeads"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
           Only works if your cycle is always between 26 and 32 days.
         </p>
         <InfoCard title="Rule" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <p className="text-sm">Don't have vaginal sex (or use condoms) from <strong>Day 8 to Day 19</strong> of your cycle.</p>
         </InfoCard>
      </>
    )
  },

  "Emergency_Contraception": {
    title: "紧急避孕 (Emergency Contraception)",
    subtitle: "事后补救措施",
    image: imgEmergencyPill,
    color: "from-purple-400 to-indigo-500",
    accentColor: "bg-indigo-500",
    lightColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
    tags: ["后悔药", "事后避孕", "72小时"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          紧急避孕（Emergency Contraception, EC）是在无保护性行为后防止怀孕的一种安全有效的方法。通常被称为“事后避孕药”（Morning-after Pill）。
        </p>

        <SectionTitle color="bg-indigo-400">什么时候需要用？</SectionTitle>
        <ListSection items={[
          "没有任何避孕措施的性行为。",
          "避孕套破裂或滑落。",
          "漏服避孕药（连续漏服2天以上）。",
          "算错了安全期。",
          "被迫发生的性行为。"
        ]} />

        <SectionTitle color="bg-indigo-400">主要类型</SectionTitle>
        <div className="space-y-4 mb-6">
           <InfoCard title="紧急避孕药 (Pills)" colorClass="border-indigo-100 bg-indigo-50/30 text-indigo-800">
             <p className="mb-2 text-sm">最常见的方法。分两种：</p>
             <ul className="list-disc pl-4 space-y-1 text-xs mb-3">
               <li><strong>Ella (ulipristal acetate):</strong> 最有效，需处方。5天内有效。</li>
               <li><strong>Plan B (Levonorgestrel):</strong> 非处方药。3天内效果最好。</li>
             </ul>
             <div className="grid grid-cols-2 gap-3 mt-3">
               <a href="/learn/EC_Ella_Detail" className="text-xs font-bold text-indigo-600 bg-white p-2 rounded-lg text-center border border-indigo-100 shadow-sm hover:bg-indigo-50">
                 了解 Ella
               </a>
               <a href="/learn/EC_PlanB_Detail" className="text-xs font-bold text-indigo-600 bg-white p-2 rounded-lg text-center border border-indigo-100 shadow-sm hover:bg-indigo-50">
                 了解 Plan B
               </a>
             </div>
           </InfoCard>

           <InfoCard title="宫内节育器 (IUD)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
             <p className="mb-2 text-sm">最有效的紧急避孕方式（有效率 &gt;99.9%）。</p>
             <p className="text-xs text-muted-foreground mb-3">需要在事后5天内由医生放入。放入后可持续避孕8-12年。</p>
             <a href="/learn/EC_IUD_Detail" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
               了解 IUD 紧急避孕 <ChevronRight size={12}/>
             </a>
           </InfoCard>
        </div>

        <SectionTitle color="bg-indigo-400">关键原则</SectionTitle>
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5 mb-6">
           <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
             <AlertCircle size={16} /> 越早越好！
           </h4>
           <p className="text-sm text-yellow-800/80 leading-relaxed">
             虽然有些方法在5天内有效，但时间越早，效果越好。精子可以在体内存活5天等待排卵，紧急避孕药的作用通常是推迟排卵。如果已经排卵，药可能就没用了。
           </p>
        </div>
      </>
    )
  },

  "EC_Ella_Detail": {
    title: "Ella (Ulipristal)",
    subtitle: "最有效的紧急避孕药",
    image: imgEmergencyPill,
    color: "from-purple-400 to-indigo-500",
    accentColor: "bg-indigo-500",
    lightColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
    tags: ["处方药", "5天内", "高效"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          Ella (ulipristal acetate) 是目前最有效的口服紧急避孕药。它需要在无保护性行为后 <strong>5天 (120小时)</strong> 内服用。
        </p>

        <SectionTitle color="bg-indigo-400">特点与优势</SectionTitle>
        <ListSection items={[
          "比 Plan B 更有效：尤其是在接近排卵期时。",
          "时效性强：第1天和第5天服用效果一样好（但仍建议尽快）。",
          "体重限制宽松：对体重超过165磅（75kg）的人依然有效（直到195磅/88kg）。"
        ]} />

        <SectionTitle color="bg-indigo-400">注意事项 (重要)</SectionTitle>
        <div className="space-y-4 mb-6">
           <InfoCard title="需要处方" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
             <p className="text-sm">在美国通常需要医生处方。可以通过 Planned Parenthood Direct 等 App 在线开方。</p>
           </InfoCard>
           
           <InfoCard title="哺乳期注意" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
             <p className="text-sm">服用 Ella 后，建议 <strong>24小时内</strong> 把母乳泵出并倒掉（Pump and Dump）。</p>
           </InfoCard>

           <InfoCard title="避孕药相互作用" colorClass="border-red-100 bg-red-50/30 text-red-800">
             <p className="text-sm">服用 Ella 后，如果想继续吃短效避孕药，需 <strong>等待6天</strong>。如果立刻吃避孕药，可能会让 Ella 失效！这期间请用避孕套。</p>
           </InfoCard>
        </div>
      </>
    )
  },

  "EC_PlanB_Detail": {
    title: "Plan B (Levonorgestrel)",
    subtitle: "非处方紧急避孕药",
    image: imgEmergencyPill,
    color: "from-purple-400 to-indigo-500",
    accentColor: "bg-indigo-500",
    lightColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
    tags: ["OTC", "72小时", "药店可买"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          Plan B (及其仿制药如 Take Action, My Way) 是含有左炔诺孕酮 (Levonorgestrel) 的紧急避孕药。无需处方，在药店可以直接买到。
        </p>

        <SectionTitle color="bg-indigo-400">使用指南</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <ul className="space-y-3 text-sm text-muted-foreground">
             <li>🕒 <strong>黄金时间：</strong> 3天 (72小时) 内服用效果最好。虽然5天内也能吃，但效果随时间递减。</li>
             <li>⚖️ <strong>体重影响：</strong> 如果你的体重超过 165磅 (约75kg)，Plan B 的效果可能会显著降低。建议使用 Ella 或 IUD。</li>
             <li>💊 <strong>服用方法：</strong> 通常只有一片，直接吞服。</li>
           </ul>
        </div>

        <SectionTitle color="bg-indigo-400">副作用</SectionTitle>
        <p className="text-sm text-muted-foreground mb-4">通常很安全，副作用轻微且短暂。</p>
        <ListSection items={[
          "月经变化：下次月经可能会提前或推迟，量可能变多或变少。",
          "恶心/呕吐：如果在服药后2小时内呕吐，需要补服一片。",
          "头痛、乳房胀痛、疲劳。"
        ]} />
      </>
    )
  },

  "EC_IUD_Detail": {
    title: "IUD 紧急避孕",
    subtitle: "最有效的补救措施",
    image: imgBcIud,
    color: "from-blue-400 to-cyan-500",
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50 border-blue-100 text-blue-700",
    tags: ["99.9%有效", "长期避孕", "需医生"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          在无保护性行为后 <strong>5天 (120小时)</strong> 内放入宫内节育器 (IUD)，是目前世界上最有效的紧急避孕方法，有效率超过 99.9%。
        </p>

        <SectionTitle color="bg-blue-400">它是如何工作的？</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 mb-6">
           <p className="text-sm text-muted-foreground mb-3">
             铜 IUD (Paragard) 或 激素 IUD (Mirena, Liletta) 都可以用作紧急避孕。
           </p>
           <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
             <li><strong>主要原理：</strong> 铜离子或激素对精子有毒性，阻止精子使卵子受精。同时改变子宫环境，防止受精卵着床。</li>
             <li><strong>不受体重影响：</strong> 无论体重多少，效果都一样好。</li>
           </ul>
        </div>

        <SectionTitle color="bg-blue-400">一举两得</SectionTitle>
        <InfoCard title="超级福利" colorClass="border-green-100 bg-green-50/30 text-green-800">
           <p className="text-sm font-bold mb-1">解决当下的危机 + 未来的保障</p>
           <p className="text-sm">一旦放入 IUD，你不仅完成了这次的紧急避孕，还直接获得了长达 8-12 年的高效避孕保护！不用再担心下次意外了。</p>
        </InfoCard>

        <p className="text-xs text-muted-foreground mt-4">
          <strong>注意：</strong> 需要预约医生进行放置手术。因为有5天的时间限制，请尽快联系诊所 (如 Planned Parenthood)。
        </p>
      </>
    )
  },
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

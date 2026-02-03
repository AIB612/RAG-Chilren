import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, Share2, ThumbsUp, BookOpen, AlertCircle, Info, HelpCircle, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

// Assets
import imgBirthControl from "@/assets/article-birth-control.png";
import imgSTDs from "@/assets/article-stds.png";
import imgRelationships from "@/assets/article-relationships.png";
import imgAbortion from "@/assets/article-abortion.png";
import imgEmergencyPill from "@/assets/article-emergency-pill.png";
import imgGenderIdentity from "@/assets/article-gender-identity.png";
import imgWellness from "@/assets/article-wellness.png";
import imgPregnancy from "@/assets/article-pregnancy.png";
import imgPleasure from "@/assets/article-pleasure.png";
import imgOrientation from "@/assets/article-orientation.png";

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
        
        <SectionTitle color="bg-blue-400">常见的避孕方式</SectionTitle>
        
        <div className="space-y-4">
          <InfoCard title="避孕套 (Condoms)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <p>最常见的方式，也是唯一能同时预防怀孕和性传播疾病 (STDs) 的方法。</p>
            <div className="mt-2 flex gap-2 text-xs font-semibold">
              <span className="px-2 py-0.5 bg-blue-100 rounded text-blue-600">有效率: ~85-98%</span>
              <span className="px-2 py-0.5 bg-green-100 rounded text-green-600">防 STDs: 是</span>
            </div>
          </InfoCard>

          <InfoCard title="短效避孕药 (The Pill)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <p>通过激素调节排卵。需要每天按时服用。如果在同一时间服用，效果非常好。</p>
            <div className="mt-2 flex gap-2 text-xs font-semibold">
              <span className="px-2 py-0.5 bg-blue-100 rounded text-blue-600">有效率: ~91-99%</span>
              <span className="px-2 py-0.5 bg-red-100 rounded text-red-600">防 STDs: 否</span>
            </div>
          </InfoCard>

           <InfoCard title="宫内节育器 (IUD)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <p>一种放置在子宫内的小型装置（T形），有效期可达 3-10 年。它是最有效的长效可逆避孕方法之一。</p>
            <div className="mt-2 flex gap-2 text-xs font-semibold">
              <span className="px-2 py-0.5 bg-blue-100 rounded text-blue-600">有效率: >99%</span>
              <span className="px-2 py-0.5 bg-red-100 rounded text-red-600">防 STDs: 否</span>
            </div>
          </InfoCard>
        </div>

        <SectionTitle color="bg-blue-400">常见误区 (FAQ)</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <FaqItem 
            question="第一次性行为不会怀孕吗？" 
            answer="这是一个巨大的误区！只要有精子进入阴道，就有可能怀孕，无论是不是第一次。" 
          />
          <FaqItem 
            question="体外射精能避孕吗？" 
            answer="非常不可靠。在射精前流出的前列腺液中可能含有精子。它的失败率很高（约22%）。" 
          />
          <FaqItem 
            question="避孕药会让人发胖吗？" 
            answer="大多数人不会。少数人可能会有暂时的水肿或食欲改变，但这通常是暂时的。不同品牌的药物反应也不同。" 
          />
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-3">
          <AlertCircle className="text-blue-500 shrink-0" />
          <p className="text-xs text-blue-700/80 leading-relaxed">
            <strong>小贴士：</strong> 没有任何一种避孕方式是 100% 有效的。结合使用（例如：避孕药 + 避孕套）可以提供双重保护。如有疑问，请咨询医生。
          </p>
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
          堕胎（Abortion）是一种终止妊娠的医疗手段。它是一项非常常见的医疗保健服务。在正规医疗机构进行的堕胎是非常安全的。了解不同类型的堕胎方式可以帮助你做出适合自己的决定。
        </p>

        <SectionTitle color="bg-pink-400">主要类型</SectionTitle>
        
        <div className="space-y-4">
          <InfoCard title="药物流产 (The Abortion Pill)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <p>通常适用于怀孕早期（一般为10周以内）。通过服用两种药物（米非司酮和米索前列醇）来终止妊娠。过程类似于一次严重的自然流产。</p>
          </InfoCard>

          <InfoCard title="手术流产 (In-Clinic Abortion)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <p>在诊所或医院由医生进行。手术过程通常很短（5-10分钟）。适用于怀孕的不同阶段（具体取决于当地法律和医疗条件）。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-pink-400">常见问题</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
          <FaqItem 
            question="堕胎会影响我以后的生育能力吗？" 
            answer="通常不会。安全、正规的堕胎不会影响你未来的怀孕能力。除非发生极其罕见的严重并发症（如未经治疗的感染）。" 
          />
          <FaqItem 
            question="堕胎疼吗？" 
            answer="每个人的感受不同。药物流产可能会有强烈的痉挛痛（像严重的痛经）。手术流产通常会使用麻醉或止痛药来减轻疼痛。" 
          />
        </div>
        
        <div className="mt-6 bg-pink-50 p-4 rounded-2xl border border-pink-100 flex gap-3">
          <Heart className="text-pink-500 shrink-0" />
          <p className="text-xs text-pink-700/80 leading-relaxed">
            <strong>你并不孤单：</strong> 这是一个个人的决定，无论你做什么选择，都是有效的。如果你感到困惑或压力，寻求专业咨询是非常重要的。
          </p>
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
          紧急避孕（Emergency Contraception）是在无保护性行为或避孕失败（如避孕套破裂）后，用于防止怀孕的方法。它不能终止已经发生的妊娠（不是堕胎药）。
        </p>
        
        <SectionTitle color="bg-orange-400">黄金时间</SectionTitle>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center mb-6">
          <h4 className="text-2xl font-bold text-orange-600 mb-1">越早越好</h4>
          <p className="text-sm text-orange-800">通常在性行为后 <span className="font-bold">72小时 (3天)</span> 或 <span className="font-bold">120小时 (5天)</span> 内有效，取决于药物种类。</p>
        </div>

        <SectionTitle color="bg-orange-400">种类选择</SectionTitle>
         <div className="space-y-4">
          <InfoCard title="紧急避孕药 (Morning-After Pill)" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
            <p>含有左炔诺孕酮或醋酸乌利司他。主要通过抑制或推迟排卵来起作用。非处方药（如毓婷）在药店可买到。</p>
          </InfoCard>

          <InfoCard title="铜宫内节育器 (Copper IUD)" colorClass="border-orange-100 bg-orange-50/30 text-orange-800">
            <p>如果在性行为后5天内放入，它是最有效的紧急避孕方式（有效率>99%），并且可以作为长效避孕措施继续使用。</p>
          </InfoCard>
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
          性别认同（Gender Identity）是你内心深处对自己的性别感知——你是男性、女性、两者都是、两者都不是，还是其他。这与你的生理性别（出生时医生根据生殖器指定的性别）不一定相同。
        </p>

        <SectionTitle color="bg-teal-400">核心概念</SectionTitle>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white border border-teal-100 rounded-xl p-4 shadow-sm">
            <h5 className="font-bold text-teal-700 mb-1">顺性别 (Cisgender)</h5>
            <p className="text-xs text-muted-foreground">你的性别认同与出生时被指派的性别一致。</p>
          </div>
          <div className="bg-white border-teal-100 border rounded-xl p-4 shadow-sm">
             <h5 className="font-bold text-teal-700 mb-1">跨性别 (Transgender)</h5>
            <p className="text-xs text-muted-foreground">你的性别认同与出生时被指派的性别不同。</p>
          </div>
          <div className="bg-white border-teal-100 border rounded-xl p-4 shadow-sm">
             <h5 className="font-bold text-teal-700 mb-1">非二元性别 (Non-binary)</h5>
            <p className="text-xs text-muted-foreground">你的性别认同不完全属于“男”或“女”的传统二元框架。</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-teal-50 rounded-2xl border border-teal-100">
           <p className="text-sm text-teal-800 leading-relaxed">
             <strong>记住：</strong> 探索性别认同是一个旅程，没有“正确”或“错误”的方式。你的感受是真实有效的。
           </p>
        </div>
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
    tags: ["体检", "HPV疫苗", "乳腺健康"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          生殖健康是整体健康的重要组成部分。定期检查可以帮助你在早期发现问题并保持健康。这不仅仅关乎“生病”，更关乎“预防”和“保健”。
        </p>

        <SectionTitle color="bg-green-400">重要的健康检查</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="宫颈癌筛查 (Pap Smear / HPV Test)" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <p>建议从21岁开始（或根据医生建议）。通过检测宫颈细胞变化或HPV病毒，可以有效预防宫颈癌。</p>
          </InfoCard>
           <InfoCard title="乳腺健康" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <p>了解你的乳房外观和触感。如果发现肿块、皮肤变化或分泌物，请咨询医生。定期的乳房X光检查通常建议在40岁以后进行。</p>
          </InfoCard>
        </div>
      </>
    )
  },
  "Pregnancy_Full": {
    title: "怀孕全程",
    subtitle: "生命的奇妙旅程",
    image: imgPregnancy,
    color: "from-rose-400 to-red-500",
    accentColor: "bg-rose-500",
    lightColor: "bg-rose-50 border-rose-100 text-rose-700",
    tags: ["早孕症状", "产前检查", "分娩"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          怀孕是一个复杂的生理过程。无论你是在备孕、已经怀孕，还是仅仅想了解相关知识，知道身体会发生什么变化都是有帮助的。
        </p>
        <SectionTitle color="bg-rose-400">怀孕的早期迹象</SectionTitle>
        <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-6">
          <li className="bg-white p-2 rounded-lg border flex items-center gap-2"><CheckCircle2 size={14} className="text-rose-400"/> 月经推迟</li>
          <li className="bg-white p-2 rounded-lg border flex items-center gap-2"><CheckCircle2 size={14} className="text-rose-400"/> 乳房胀痛</li>
          <li className="bg-white p-2 rounded-lg border flex items-center gap-2"><CheckCircle2 size={14} className="text-rose-400"/> 恶心/呕吐</li>
          <li className="bg-white p-2 rounded-lg border flex items-center gap-2"><CheckCircle2 size={14} className="text-rose-400"/> 疲劳</li>
        </ul>
        <InfoCard title="这正常吗？" colorClass="border-rose-100 bg-rose-50/30 text-rose-800">
          <p>每个人的怀孕症状都不一样。如果你怀疑自己怀孕了，验孕棒（Home Pregnancy Test）是确认的第一步。如果结果是阳性，请预约医生进行确认和产前护理。</p>
        </InfoCard>
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
    tags: ["自慰", "性高潮", "沟通"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性不仅仅是为了生殖。由于文化原因，我们很少谈论“愉悦”。事实上，性愉悦是健康性生活的重要部分。了解什么让你感觉良好是完全正常的。
        </p>
        <SectionTitle color="bg-violet-400">关键话题</SectionTitle>
        <div className="space-y-4">
          <InfoCard title="自慰 (Masturbation)" colorClass="border-violet-100 bg-violet-50/30 text-violet-800">
            <p>这是一种完全正常、健康且安全的性探索方式。它可以帮助你了解自己的身体，缓解压力，改善睡眠。</p>
          </InfoCard>
           <InfoCard title="沟通" colorClass="border-violet-100 bg-violet-50/30 text-violet-800">
            <p>好的性生活始于好的沟通。告诉伴侣你喜欢什么、不喜欢什么，可以让体验变得更好。</p>
          </InfoCard>
        </div>
      </>
    )
  },
  "Sexual_Orientation": {
    title: "性取向",
    subtitle: "爱与吸引",
    image: imgOrientation,
    color: "from-indigo-400 to-blue-500",
    accentColor: "bg-indigo-500",
    lightColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
    tags: ["LGBTQ+", "吸引力", "自我探索"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性取向（Sexual Orientation）是指你在情感、浪漫或性方面被谁吸引。这与性别认同不同。就像你的眼睛颜色一样，它是你的一部分。
        </p>
        <SectionTitle color="bg-indigo-400">常见术语</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 space-y-3">
          <p className="text-sm"><strong className="text-indigo-600">异性恋 (Heterosexual/Straight):</strong> 被不同性别的人吸引。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">同性恋 (Gay/Lesbian):</strong> 被相同性别的人吸引。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">双性恋 (Bisexual):</strong> 被两种或多种性别的人吸引。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">无性恋 (Asexual):</strong> 很少或没有感受到性吸引力。</p>
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
    tags: ["STD", "HIV", "检测"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性传播疾病 (STDs) 是通过性接触传播的感染。许多 STDs 在早期没有症状，因此定期检测是保持性健康的关键。STDs 非常普遍，得病并不意味着你不洁或不道德，它只是需要治疗的健康问题。
        </p>
        
        <SectionTitle color="bg-slate-400">安全性行为 (Safer Sex)</SectionTitle>
        
        <ul className="space-y-3 mb-6">
           <li className="flex gap-3 bg-white p-3 rounded-xl border border-slate-100">
             <div className="bg-slate-100 p-2 rounded-full h-fit"><CheckCircle2 size={16} className="text-slate-600"/></div>
             <div className="text-sm"><strong>全程使用避孕套：</strong> 这是预防 STDs 最有效的方法。</div>
           </li>
           <li className="flex gap-3 bg-white p-3 rounded-xl border border-slate-100">
             <div className="bg-slate-100 p-2 rounded-full h-fit"><CheckCircle2 size={16} className="text-slate-600"/></div>
             <div className="text-sm"><strong>定期检测：</strong> 建议每年至少进行一次检测，或者在更换伴侣前后。</div>
           </li>
        </ul>

         <InfoCard title="关于 HIV (艾滋病毒)" colorClass="border-slate-100 bg-slate-50/30 text-slate-800">
            <p>HIV 是一种破坏免疫系统的病毒。它是可以通过药物控制的慢性病（U=U: 检测不到 = 无法传播）。PrEP（暴露前预防）是一种可以有效预防 HIV 感染的药物。</p>
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
    tags: ["同意", "界限", "沟通"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          一段健康的关系应该让你感到安全、被尊重和快乐。无论是友情还是爱情，建立健康的边界都是至关重要的。
        </p>
        
        <SectionTitle color="bg-pink-400">健康关系的标志</SectionTitle>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
           <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100">
             <span className="block text-2xl mb-2">🤝</span>
             <span className="text-xs font-bold text-pink-700 block">相互尊重</span>
           </div>
           <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100">
             <span className="block text-2xl mb-2">🗣️</span>
             <span className="text-xs font-bold text-pink-700 block">开放沟通</span>
           </div>
           <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100">
             <span className="block text-2xl mb-2">🛑</span>
             <span className="text-xs font-bold text-pink-700 block">尊重界限</span>
           </div>
           <div className="bg-pink-50 p-4 rounded-2xl text-center border border-pink-100">
             <span className="block text-2xl mb-2">🥰</span>
             <span className="text-xs font-bold text-pink-700 block">支持彼此</span>
           </div>
        </div>

        <SectionTitle color="bg-pink-400">什么是“知情同意” (Consent)?</SectionTitle>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
          <p className="text-foreground/80 text-sm leading-relaxed">
            同意必须是<strong>自愿的、明确的、热情的</strong>。仅仅没有说“不”并不代表“是”。任何时候，你都有权改变主意。同意是性互动的核心。
          </p>
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
                 <BookOpen size={18} /> 收藏
               </Button>
             </div>
           </div>
        </div>

      </div>
    </MobileLayout>
  );
}

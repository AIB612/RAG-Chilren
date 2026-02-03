import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, Share2, ThumbsUp, BookOpen, AlertCircle, Info, HelpCircle, CheckCircle2, Heart, XCircle } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

// Assets
import imgBirthControl from "@/assets/article-birth-control.png";
import imgBcPill from "@/assets/article-bc-pill.png";
import imgBcIud from "@/assets/article-bc-iud.png";
import imgBcImplant from "@/assets/article-bc-implant.png";
import imgBcCondom from "@/assets/article-bc-condom.png";
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
          </InfoCard>

          <InfoCard title="宫内节育器 (IUD)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
             <img src={imgBcIud} alt="IUD" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
             <p>放置在子宫内的T形装置。分含铜（无激素）和含激素两种。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: &gt;99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效期: 3-12年</span>
            </div>
          </InfoCard>

          <InfoCard title="短效避孕药 (The Pill)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcPill} alt="Pill" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>每天口服一片。如果不漏服，效果极佳。有调节月经、改善痤疮等额外益处。</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 91-99%</span>
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">频率: 每日</span>
            </div>
          </InfoCard>

          <InfoCard title="避孕套 (Condoms)" colorClass="border-blue-100 bg-blue-50/30 text-blue-800">
            <img src={imgBcCondom} alt="Condom" className="w-full h-32 object-contain bg-white rounded-xl mb-3 border border-blue-100/50 p-2" />
            <p>唯一能同时预防 STDs 的方法。无副作用，随买随用。</p>
             <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <span className="px-2 py-1 bg-blue-100 rounded text-blue-600">有效率: 85-98%</span>
              <span className="px-2 py-1 bg-green-100 rounded text-green-600">防 STDs: 是</span>
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
    tags: ["药物流产", "手术流产", "安全性"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          堕胎（Abortion）是一种终止妊娠的医疗手段。它是一项非常常见的医疗保健服务。在正规医疗机构进行的堕胎是非常安全的，比拔牙还要安全。了解不同类型的堕胎方式可以帮助你做出适合自己的决定。
        </p>

        <SectionTitle color="bg-pink-400">主要类型详解</SectionTitle>
        
        <div className="space-y-4">
          <InfoCard title="药物流产 (The Abortion Pill)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
            <p className="mb-2">通常适用于怀孕早期（10-11周以内）。包含两步：</p>
            <ul className="list-disc pl-4 space-y-1 text-xs mb-2">
              <li><strong>米非司酮：</strong> 阻断孕酮，使妊娠停止发展。</li>
              <li><strong>米索前列醇：</strong> 引起子宫收缩，排出妊娠组织（通常在家中发生）。</li>
            </ul>
            <p className="text-xs text-muted-foreground">感受：类似严重的痛经和大量出血，过程持续几小时。</p>
          </InfoCard>

          <InfoCard title="手术流产 (In-Clinic Abortion)" colorClass="border-pink-100 bg-pink-50/30 text-pink-800">
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
        
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center mb-6">
          <h4 className="text-xl font-bold text-orange-600 mb-2">⏰ 越早越好</h4>
          <p className="text-sm text-orange-800">虽然有些方法在5天内有效，但<span className="font-bold">24小时内</span>服用效果最好。</p>
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
    tags: ["体检", "HPV疫苗", "常见感染"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          生殖健康是整体健康的重要组成部分。即使没有性生活，关注生殖系统的健康也是必要的。
        </p>

        <SectionTitle color="bg-green-400">常见健康问题</SectionTitle>
        <div className="space-y-4">
           <InfoCard title="尿路感染 (UTI)" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <p><strong>症状：</strong> 尿频、尿急、尿痛（烧灼感）。<br/><strong>原因：</strong> 细菌进入尿道（女性更常见）。<br/><strong>处理：</strong> 多喝水，及时就医使用抗生素。</p>
          </InfoCard>
           <InfoCard title="阴道酵母菌感染 (Yeast Infection)" colorClass="border-green-100 bg-green-50/30 text-green-800">
            <p><strong>症状：</strong> 阴道极度瘙痒、豆腐渣样分泌物。<br/><strong>原因：</strong> 阴道内菌群失调。<br/><strong>处理：</strong> 使用抗真菌药物（非处方药或处方药）。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-green-400">预防性保健</SectionTitle>
        <ListSection color="text-green-500" items={[
          "HPV 疫苗：可以预防导致宫颈癌和尖锐湿疣的病毒。建议在开始性行为前接种，但之后接种也有益。",
          "宫颈癌筛查 (Pap Smear)：建议从21岁开始，定期检测宫颈细胞变化。",
          "经期健康：记录月经周期。如果经痛严重影响生活，或者经量过大，请看医生，这可能是子宫内膜异位症等问题的迹象。"
        ]} />
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
    tags: ["早孕", "三个阶段", "产检"],
    content: (
      <>
        <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          正常妊娠通常持续约 40 周。了解每个阶段的变化，可以帮助你更好地应对。
        </p>
        
        <SectionTitle color="bg-rose-400">怀孕的三个阶段 (Trimesters)</SectionTitle>
        
        <div className="space-y-4">
           <InfoCard title="第一孕期 (1-12周)" colorClass="border-rose-100 bg-rose-50/30 text-rose-800">
            <p>这是宝宝器官形成的关键期。你可能会感到晨吐、极度疲劳和乳房胀痛。必须开始服用叶酸，并避免酒精和烟草。</p>
          </InfoCard>

          <InfoCard title="第二孕期 (13-26周)" colorClass="border-rose-100 bg-rose-50/30 text-rose-800">
            <p>通常被称为“蜜月期”，早孕反应消失，精力恢复。你会开始感觉到胎动。此时可以通过B超看到宝宝的性别。</p>
          </InfoCard>

          <InfoCard title="第三孕期 (27-40周)" colorClass="border-rose-100 bg-rose-50/30 text-rose-800">
            <p>宝宝迅速长大。你可能会感到身体沉重、背痛、尿频。这是为分娩做准备的时期，需要定期进行产检。</p>
          </InfoCard>
        </div>

        <SectionTitle color="bg-rose-400">产前护理</SectionTitle>
        <ListSection color="text-rose-500" items={[
          "定期产检：监测宝宝的生长和你的健康（血压、血糖）。",
          "健康饮食：均衡营养，摄入足够的钙和铁。",
          "心理准备：参加分娩课程，了解分娩过程和止痛选择。"
        ]} />
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
    title: "性取向",
    subtitle: "爱与吸引",
    image: imgOrientation,
    color: "from-indigo-400 to-blue-500",
    accentColor: "bg-indigo-500",
    lightColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
    tags: ["LGBTQ+", "吸引力", "出柜"],
    content: (
      <>
         <p className="mb-6 text-foreground/80 leading-relaxed text-sm">
          性取向（Sexual Orientation）是指你在情感、浪漫或性方面被谁吸引。它不是一种选择，也不是一种可以“治愈”的疾病。就像你的眼睛颜色一样，它是你的一部分。
        </p>
        
        <SectionTitle color="bg-indigo-400">常见类别</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50 space-y-3">
          <p className="text-sm"><strong className="text-indigo-600">异性恋 (Straight):</strong> 被不同性别的人吸引。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">同性恋 (Gay/Lesbian):</strong> 被相同性别的人吸引。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">双性恋 (Bisexual):</strong> 被多种性别的人吸引。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">泛性恋 (Pansexual):</strong> 吸引力不受性别限制，爱的是“人”。</p>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm"><strong className="text-indigo-600">无性恋 (Asexual):</strong> 很少或没有感受到性吸引力，但这不代表没有感情需求。</p>
        </div>

        <SectionTitle color="bg-indigo-400">关于“出柜” (Coming Out)</SectionTitle>
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
           <p className="text-sm text-indigo-800 leading-relaxed mb-2">
             出柜是指告诉别人你的性取向。这是一个非常个人的过程。
           </p>
           <ul className="list-disc pl-4 space-y-1 text-xs text-indigo-700/80">
             <li>你不需要一次性告诉所有人。</li>
             <li>确保自己在安全的环境下进行。</li>
             <li>如果没有准备好，不出柜也是完全可以的。</li>
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
        </div>

        <SectionTitle color="bg-slate-400">如何保护自己？</SectionTitle>
        <ListSection color="text-slate-600" items={[
          "全程使用避孕套：包括口交和肛交。",
          "定期检测：即使没有症状，每年也要体检一次。",
          "PrEP：如果你有高风险，可以服用 PrEP 药物预防 HIV。"
        ]} />
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
           <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
             <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 size={16}/> 健康的标志</h4>
             <ul className="text-xs text-green-800 space-y-1 pl-5 list-disc">
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

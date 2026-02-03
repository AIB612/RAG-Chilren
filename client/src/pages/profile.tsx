import { MobileLayout } from "@/components/mobile-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Settings, Heart, Shield, Bell, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Assets
import iconProfile from "@/assets/icon-profile-3d.png";

export default function Profile() {
  return (
    <MobileLayout>
      <div className="bg-[#F8F5FC] min-h-screen relative">
        
        {/* Top Background Gradient */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-100/80 to-transparent pointer-events-none" />

        <div className="px-6 pt-20 pb-24 relative z-10">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 relative mb-4 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-purple-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="w-full h-full rounded-full bg-white p-1 shadow-3d relative z-10 overflow-hidden">
                <img src={iconProfile} alt="Profile" className="w-full h-full object-cover p-2 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full" />
              </div>
              <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md z-20">
                <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-foreground">小卫士 007</h1>
            <p className="text-sm text-muted-foreground font-medium mb-4">加入小白社区第 3 天</p>
            
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-white/60 backdrop-blur-sm border-white/50 text-purple-600 px-3 py-1 shadow-sm">
                🌱 成长中
              </Badge>
              <Badge variant="secondary" className="bg-white/60 backdrop-blur-sm border-white/50 text-pink-600 px-3 py-1 shadow-sm">
                ✨ 0 积分
              </Badge>
            </div>
          </div>

          {/* Settings List */}
          <div className="space-y-4">
            <Section title="我的账户">
              <MenuItem icon={User} label="个人资料" />
              <MenuItem icon={Heart} label="收藏的内容" badge="2" />
              <MenuItem icon={Bell} label="消息通知" />
            </Section>

            <Section title="关于与支持">
              <MenuItem icon={Shield} label="隐私政策" />
              <MenuItem icon={Settings} label="设置" />
            </Section>
            
            <Button variant="ghost" className="w-full text-destructive hover:bg-destructive/10 mt-6 h-12 rounded-2xl font-medium">
              <LogOut size={18} className="mr-2" />
              退出登录
            </Button>
          </div>

        </div>
      </div>
    </MobileLayout>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider ml-4 mb-2">{title}</h3>
      <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm overflow-hidden divide-y divide-purple-50/50">
        {children}
      </div>
    </div>
  );
}

function MenuItem({ icon: Icon, label, badge }: { icon: any, label: string, badge?: string }) {
  return (
    <div className="flex items-center p-4 hover:bg-white/80 transition-colors cursor-pointer group">
      <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Icon size={16} />
      </div>
      <span className="flex-1 ml-3 text-sm font-semibold text-foreground/80">{label}</span>
      {badge && (
        <span className="bg-pink-100 text-pink-600 text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">
          {badge}
        </span>
      )}
      <ChevronRight size={16} className="text-muted-foreground/50" />
    </div>
  );
}

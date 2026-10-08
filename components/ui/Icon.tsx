import {
  Award, Briefcase, ChartColumn, Cpu, FileText, Handshake, Lightbulb, Megaphone, Search,
  Settings, ShieldCheck, Target, TrendingUp, Users, Clock3, type LucideProps,
} from "lucide-react";
import type { IconName } from "@/data/data";

const icons = {
  target: Target,
  chart: ChartColumn,
  lightbulb: Lightbulb,
  users: Users,
  handshake: Handshake,
  briefcase: Briefcase,
  award: Award,
  shield: ShieldCheck,
  clock: Clock3,
  file: FileText,
  settings: Settings,
  megaphone: Megaphone,
  cpu: Cpu,
  search: Search,
  trending: TrendingUp,
};

export default function Icon({ name, ...props }: { name: IconName | string } & LucideProps) {
  const Cmp = icons[name as IconName];
  return <Cmp {...props} />;
}

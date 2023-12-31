import { GetFormStats } from "@/actions";

export interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

export interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  helperText: string;
  loading: boolean;
  className: string;
}

import { ReactNode } from "react";

export enum KpiIconType {
  Customers,
  Orders,
  Revenue,
}
export interface DailyAndMonthlyCount {
  dailyCount: number;
  monthlyCount: number;
}
export interface IKpiCardProps {
  className?: string;
  header: string;
  totalCount: number;
  icon: KpiIconType;
  dailyAndMonthlyCount?: DailyAndMonthlyCount;
}
export interface IconText {
  icon: ReactNode;
  text: string;
}

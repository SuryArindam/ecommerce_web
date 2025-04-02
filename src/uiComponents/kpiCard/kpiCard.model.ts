export enum KpiIconType {
  Customers,
  Orders,
  Revenue,
}

export interface IKpiCard {
  className?: string;
  header: string;
  totalCount: number;
  icon: KpiIconType;
  dailyAndMonthlyCount?: { dailyCount: number; monthlyCount: number };
}

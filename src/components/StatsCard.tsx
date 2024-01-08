import { useTranslations } from "next-intl";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

import { GetFormStats } from "@/actions";
import { StatsCardProps, StatsCardsProps } from "@/models";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export async function CardStatsWrapper() {
  const stats = await GetFormStats();

  return <StatsCards loading={false} data={stats} />;
}

export function StatsCards({ data, loading }: StatsCardsProps) {
  const t = useTranslations("stats-cards");

  return (
    <div className="grid w-full grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title={t("total-visits.title")}
        icon={<LuView className="text-blue-600" />}
        helperText={t("total-visits.subtitle")}
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title={t("total-submissions.title")}
        icon={<FaWpforms className="text-yellow-600" />}
        helperText={t("total-submissions.title")}
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        title={t("submission-rate.title")}
        icon={<HiCursorClick className="text-green-600" />}
        helperText={t("submission-rate.title")}
        value={`${data?.submissionRate.toLocaleString()}%` || ""}
        loading={loading}
        className="shadow-md shadow-green-600"
      />
      <StatsCard
        title={t("bounce-rate.title")}
        icon={<TbArrowBounce className="text-red-600" />}
        helperText={t("bounce-rate.title")}
        value={`${data?.bounceRate.toLocaleString()}%` || ""}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}

export function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading ? (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          ) : (
            value
          )}
          <p className="pt-1 text-xs text-muted-foreground">{helperText}</p>
        </div>
      </CardContent>
    </Card>
  );
}

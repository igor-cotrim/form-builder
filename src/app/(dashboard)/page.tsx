import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import { CardStatsWrapper, StatsCards } from "@/components";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="col-span-2 text-4xl font-bold">Your forms</h2>
      <Separator className="my-6" />
    </div>
  );
}

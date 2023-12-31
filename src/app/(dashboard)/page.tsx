import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import {
  CardStatsWrapper,
  CreateFormBtn,
  FormCardSkeleton,
  FormCards,
  StatsCards,
} from "@/components";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="col-span-2 text-4xl font-bold">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4, 5].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}

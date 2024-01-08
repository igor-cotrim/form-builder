import { Suspense } from "react";
import { useTranslations } from "next-intl";

import { Separator } from "@/components/ui/separator";
import {
  CardStatsWrapper,
  CreateFormBtn,
  FormCardSkeleton,
  FormCards,
  StatsCards,
} from "@/components";

export default function Home() {
  const t = useTranslations();

  const createFormBtnTexts = {
    btnTitle: t("create-form.btn-title"),
    title: t("create-form.title"),
    subtitle: t("create-form.subtitle"),
    nameInput: t("create-form.name-input"),
    descriptionInput: t("create-form.description-input"),
    submit: t("create-form.submit"),
  };

  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="col-span-2 text-4xl font-bold">{t("dashboard.title")}</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateFormBtn texts={createFormBtnTexts} />
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

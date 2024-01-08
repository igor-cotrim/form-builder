import { Form } from "@prisma/client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { formatDistance } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaWpforms, FaEdit } from "react-icons/fa";
import { LuView } from "react-icons/lu";

import { GetForms } from "@/actions";
import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function FormCardSkeleton() {
  return <Skeleton className="w-full border-2 border-primary/20 h-[190px]" />;
}

export async function FormCards() {
  const forms = await GetForms();

  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

export function FormCard({ form }: { form: Form }) {
  const t = useTranslations("forms-cards");
  const locale = useLocale();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span className="font-bold truncate">{form.name}</span>
          {form.published ? (
            <Badge>{t("published")}</Badge>
          ) : (
            <Badge variant={"destructive"}>{t("draft")}</Badge>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-sm text-muted-foreground">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
            locale: locale === "en" ? enUS : ptBR,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || t("no-description")}
      </CardContent>
      <CardFooter>
        {form.published ? (
          <Button asChild className="w-full gap-4 mt-2 text-md">
            <Link href={`/forms/${form.id}`}>
              {t("btn-view-submissings")} <BiRightArrowAlt />
            </Link>
          </Button>
        ) : (
          <Button
            asChild
            variant={"secondary"}
            className="w-full gap-4 mt-2 text-md"
          >
            <Link href={`/builder/${form.id}`}>
              {t("btn-edit-form")} <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

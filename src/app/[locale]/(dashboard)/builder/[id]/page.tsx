import React from "react";
import { useTranslations } from "next-intl";

import { GetFormById } from "@/actions";
import { FormBuilder } from "@/components";

async function BuilderPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const t = useTranslations();

  const form = await GetFormById(Number(id));

  if (!form) throw new Error("Form not found");

  return <FormBuilder form={form} />;
}

export default BuilderPage;

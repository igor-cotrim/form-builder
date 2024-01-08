import React from "react";

import { GetFormContentByUrl } from "@/actions";
import { FormElementInstance } from "@/models";
import { FormSubmitComponent } from "@/components";

async function SubmitPage({ params }: { params: { formUrl: string } }) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) throw new Error("Form not found");

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
}

export default SubmitPage;

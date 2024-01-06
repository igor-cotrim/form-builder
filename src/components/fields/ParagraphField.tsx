"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useDesigner } from "@/hooks";
import { ElementsType, FormElementInstance, FormElementProps } from "@/models";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { BsTextParagraph } from "react-icons/bs";

const type: ElementsType = "ParagraphField";

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

const propertiesSchema = z.object({
  text: z.string().min(2).max(500),
});

const extraAttributes = {
  text: "text here",
};

export const ParagraphFieldFormElement: FormElementProps = {
  type,
  constructor: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: BsTextParagraph,
    label: "Paragraph Field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { text } = element.extraAttributes;

  return (
    <div className="flex flex-col w-full gap-2">
      <Label className="flex">Paragraph field</Label>
      <p>{text}</p>
    </div>
  );
}

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { updateElement } = useDesigner();

  const element = elementInstance as CustomInstance;
  const { text } = element.extraAttributes;
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: { text },
  });

  const applyChanges = (values: propertiesFormSchemaType) => {
    updateElement(element.id, {
      ...element,
      extraAttributes: { ...values },
    });
  };

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Paragraph</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

function FormComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { text } = element.extraAttributes;

  return <p>{text}</p>;
}

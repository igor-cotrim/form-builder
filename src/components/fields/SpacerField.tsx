"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuHeading1, LuSeparatorHorizontal } from "react-icons/lu";

import { useDesigner } from "@/hooks";
import { ElementsType, FormElementInstance, FormElementProps } from "@/models";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Slider } from "../ui/slider";

const type: ElementsType = "SpacerField";

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

const propertiesSchema = z.object({
  height: z.number().min(5).max(200),
});

const extraAttributes = {
  height: 20,
};

export const SpacerFieldFormElement: FormElementProps = {
  type,
  constructor: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: LuSeparatorHorizontal,
    label: "Spacer Field",
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
  const { height } = element.extraAttributes;

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <Label className="flex">Spacer field: {height}px</Label>
      <LuSeparatorHorizontal className="w-8 h-8" />
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
  const { height } = element.extraAttributes;
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: { height },
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
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (px): {form.watch("height")}</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  min={5}
                  max={200}
                  step={1}
                  onValueChange={(value) => field.onChange(value[0])}
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
  const { height } = element.extraAttributes;

  return <div style={{ height, width: "100%" }}></div>;
}

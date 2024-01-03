"use client";

import { MdTextFields } from "react-icons/md";

import { ElementsType, FormElementInstance, FormElementProps } from "@/models";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  label: "Text Field",
  helperText: "Helper text",
  required: false,
  placeholder: "Enter text here",
};

export const TextFieldFormElement: FormElementProps = {
  type,
  constructor: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, required, helperText, placeholder } = element.extraAttributes;

  return (
    <div className="flex flex-col w-full gap-2">
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input readOnly disabled placeholder={placeholder} />
      {helperText && (
        <p className="text-[0.8rem] text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}

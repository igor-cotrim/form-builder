"use client";

import { RiSeparator } from "react-icons/ri";

import { ElementsType, FormElementProps } from "@/models";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElementProps = {
  type,
  constructor: (id: string) => ({
    id,
    type,
  }),
  designerBtnElement: {
    icon: RiSeparator,
    label: "Separator Field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

function DesignerComponent() {
  return (
    <div className="flex flex-col w-full gap-2">
      <Label className="flex">Separator field</Label>
      <Separator />
    </div>
  );
}

function PropertiesComponent() {
  return <p>No properties for this element</p>;
}

function FormComponent() {
  return <Separator />;
}

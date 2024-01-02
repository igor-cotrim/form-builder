import React from "react";
import { TextFieldFormElement } from "./fields";

// export type ElementsType = "TextField" | "NumberField";
export type ElementsType = "TextField";

export type FormElement = {
  type: ElementsType;

  constructor: (id: string) => FormElementIstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementIstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};

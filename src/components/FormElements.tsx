import { FormElementsType } from "@/models";
import {
  NumberFieldFormElement,
  ParagraphFieldFormElement,
  SeparatorFieldFormElement,
  SpacerFieldFormElement,
  SubTitleFieldFormElement,
  TextFieldFormElement,
  TitleFieldFormElement,
} from "./fields";

export const FormElements: FormElementsType = {
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,

  NumberField: NumberFieldFormElement,
  TextField: TextFieldFormElement,
};

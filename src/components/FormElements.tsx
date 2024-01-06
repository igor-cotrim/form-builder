import { FormElementsType } from "@/models";
import {
  DateFieldFormElement,
  NumberFieldFormElement,
  ParagraphFieldFormElement,
  SeparatorFieldFormElement,
  SpacerFieldFormElement,
  SubTitleFieldFormElement,
  TextAreaFieldFormElement,
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
  TextAreaField: TextAreaFieldFormElement,
  DateField: DateFieldFormElement,
};

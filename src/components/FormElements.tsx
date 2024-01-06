import { FormElementsType } from "@/models";
import {
  ParagraphFieldFormElement,
  SeparatorFieldFormElement,
  SpacerFieldFormElement,
  SubTitleFieldFormElement,
  TextFieldFormElement,
  TitleFieldFormElement,
} from "./fields";

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
};

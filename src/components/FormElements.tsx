import { FormElementsType } from "@/models";
import {
  ParagraphFieldFormElement,
  SubTitleFieldFormElement,
  TextFieldFormElement,
  TitleFieldFormElement,
} from "./fields";

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
};

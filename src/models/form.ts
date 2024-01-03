import { z } from "zod";

export type ElementsType = "TextField";

export type FormElementProps = {
  type: ElementsType;
  constructor: (id: string) => FormElementInstance;
  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  formComponent: React.FC;
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

export type FormElementsType = {
  [key in ElementsType]: FormElementProps;
};

export const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

export type formSchemaType = z.infer<typeof formSchema>;

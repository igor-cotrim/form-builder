import React from "react";

import { FormElements, SidebarBtnElement } from ".";
import { Separator } from "./ui/separator";

function FormElementsSidebar() {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 place-items-center">
        <p className="col-span-1 my-2 text-sm text-muted-foreground md:col-span-2 place-self-start">
          Layout elements
        </p>
        <SidebarBtnElement formElement={FormElements.TitleField} />
        <SidebarBtnElement formElement={FormElements.SubTitleField} />
        <p className="col-span-1 my-2 text-sm text-muted-foreground md:col-span-2 place-self-start">
          Form elements
        </p>
        <SidebarBtnElement formElement={FormElements.TextField} />
      </div>
    </div>
  );
}

export default FormElementsSidebar;

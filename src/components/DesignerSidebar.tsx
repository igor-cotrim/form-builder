import React from "react";

import { useDesigner } from "@/hooks";
import { FormElementsSidebar, PropertiesFormSidebar } from ".";

function DesignerSidebar() {
  const { selectedElement } = useDesigner();

  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {selectedElement ? <PropertiesFormSidebar /> : <FormElementsSidebar />}
    </aside>
  );
}

export default DesignerSidebar;

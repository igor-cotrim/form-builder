import React from "react";

import { FormElements, SidebarBtnElement } from ".";

function FormElementsSidebar() {
  return (
    <div>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
}

export default FormElementsSidebar;

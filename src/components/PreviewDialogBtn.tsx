import React from "react";
import { MdPreview } from "react-icons/md";

import { Button } from "./ui/button";

function PreviewDialogBtn() {
  return (
    <Button variant={"outline"} className="gap-2">
      <MdPreview className="w-6 h-6" /> Preview
    </Button>
  );
}

export default PreviewDialogBtn;

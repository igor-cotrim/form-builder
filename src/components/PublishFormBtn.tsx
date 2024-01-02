import React from "react";
import { MdOutlinePublish } from "react-icons/md";

import { Button } from "./ui/button";

function PublishFormBtn() {
  return (
    <Button variant={"outline"} className="gap-2">
      <MdOutlinePublish className="w-6 h-6" /> Save
    </Button>
  );
}

export default PublishFormBtn;

import React from "react";
import { HiSaveAs } from "react-icons/hi";

import { Button } from "./ui/button";

function SaveFormBtn() {
  return (
    <Button variant={"outline"} className="gap-2">
      <HiSaveAs className="w-6 h-6" /> Save
    </Button>
  );
}

export default SaveFormBtn;

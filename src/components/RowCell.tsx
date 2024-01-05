import React from "react";

import { ElementsType } from "@/models";
import { TableCell } from "./ui/table";

function RowCell({ type, value }: { type: ElementsType; value: string }) {
  let node: React.ReactNode = value;

  return <TableCell>{node}</TableCell>;
}

export default RowCell;

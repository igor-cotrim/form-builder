"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";

import { cn } from "@/lib/utils";
import { DesignerSidebar } from ".";

function Designer() {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <div className="flex w-full h-full ">
      <div className="w-full p-4">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] w-full h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {droppable.isOver ? (
            <div className="w-full p-4 ">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          ) : (
            <p className="flex items-center flex-grow text-3xl font-bold text-muted-foreground">
              Drop here
            </p>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}

export default Designer;

"use client";

import React from "react";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";

import { cn, idGenerator } from "@/lib";
import { useDesigner } from "@/hooks";
import { ElementsType } from "@/models";
import { DesignerElementWrapper, DesignerSidebar, FormElements } from ".";

function Designer() {
  const {
    elements,
    addElement,
    selectedElement,
    setSelectedElement,
    removeElement,
  } = useDesigner();

  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;

      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      const isDroppingOverDesignerDropArea =
        over.data?.current?.isDesignerDropArea;

      const droppingSidebarBtnOverDesignerDropArea =
        isDesignerBtnElement && isDroppingOverDesignerDropArea;

      if (droppingSidebarBtnOverDesignerDropArea) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].constructor(
          idGenerator()
        );

        addElement(elements.length, newElement);

        return;
      }

      const isDroppingOverDesignerElementTopHalf =
        over.data?.current?.isTopHalfDesignerElement;
      const isDroppingOverDesignerElementBottomHalf =
        over.data?.current?.isBottomHalfDesignerElement;
      const isDroppingOverDesignerElement =
        isDroppingOverDesignerElementTopHalf ||
        isDroppingOverDesignerElementBottomHalf;
      const droppingSidebarBtnOverDeisgnerElement =
        isDesignerBtnElement && isDroppingOverDesignerElement;

      if (droppingSidebarBtnOverDeisgnerElement) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].constructor(
          idGenerator()
        );
        const overId = over.data?.current?.elementId;
        const overElementIndex = elements.findIndex(
          (element) => element.id === overId
        );

        if (overElementIndex === -1) throw new Error("Element not found");

        let indexForNewElement = overElementIndex;

        if (isDroppingOverDesignerElementBottomHalf) indexForNewElement++;

        addElement(indexForNewElement, newElement);

        return;
      }

      const isDraggingDesignerElement = active.data?.current?.isDesignerElement;
      const draggingDesignerElementOverAnotherDesignerElement =
        isDroppingOverDesignerElement && isDraggingDesignerElement;

      if (draggingDesignerElementOverAnotherDesignerElement) {
        const activeId = active.data?.current?.elementId;
        const overId = over.data?.current?.elementId;

        const activeElementIndex = elements.findIndex(
          (element) => element.id === activeId
        );
        const overElementIndex = elements.findIndex(
          (element) => element.id === overId
        );

        if (activeElementIndex === -1 || overElementIndex === -1) {
          throw new Error("Element not found");
        }

        const activeElement = { ...elements[activeElementIndex] };

        removeElement(activeId);

        let indexForNewElement = overElementIndex;

        if (isDroppingOverDesignerElementBottomHalf) indexForNewElement++;

        addElement(indexForNewElement, activeElement);
      }
    },
  });

  return (
    <div className="flex w-full h-full ">
      <div
        className="w-full p-4"
        onClick={() => {
          if (selectedElement) setSelectedElement(null);
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] w-full h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-4 ring-primary ring-inset"
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="flex items-center flex-grow text-3xl font-bold text-muted-foreground">
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="w-full p-4 ">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col w-full gap-2 p-4">
              {elements.map((element) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}

export default Designer;

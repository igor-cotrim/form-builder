"use client";

import React from "react";

import { FormElementInstance } from "@/models";
import { FormElements } from ".";
import { Button } from "./ui/button";
import { HiCursorClick } from "react-icons/hi";

function FormSubmitComponent({
  formUrl,
  content,
}: {
  formUrl: string;
  content: FormElementInstance[];
}) {
  return (
    <div className="flex items-center justify-center w-full h-full p-8">
      <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-xl shadow-blue-700 rounded-md">
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;

          return <FormElement key={element.id} elementInstance={element} />;
        })}
        <Button className="mt-8">
          <HiCursorClick className="mr-2" />
          Submit
        </Button>
      </div>
    </div>
  );
}

export default FormSubmitComponent;

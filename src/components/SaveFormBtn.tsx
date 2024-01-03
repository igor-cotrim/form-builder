"use client";

import React, { useTransition } from "react";
import { HiSaveAs } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";

import { UpdateFormContent } from "@/actions";
import { useDesigner } from "@/hooks";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const JsonElements = JSON.stringify(elements);

      await UpdateFormContent(id, JsonElements);

      toast({
        title: "Success",
        description: "Your form has been saved.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => startTransition(updateFormContent)}
    >
      <HiSaveAs className="w-6 h-6" /> Save
      {loading && <FaSpinner className="animate-spin">...</FaSpinner>}
    </Button>
  );
}

export default SaveFormBtn;

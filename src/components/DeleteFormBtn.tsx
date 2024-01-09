"use client";

import React, { useTransition } from "react";
import { BiTrash } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";

import { DeleteForm } from "@/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

function DeleteFormBtn({ formId }: { formId: number }) {
  const [loading, startTransition] = useTransition();

  async function deleteForm() {
    try {
      await DeleteForm(formId);

      toast({
        title: "Success",
        description: "Form deleted successfully.",
        variant: "default",
      });

      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <BiTrash className="p-1.5 mt-2 text-white bg-red-500 rounded-sm w-9 h-9 text-md cursor-pointer hover:bg-red-700" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you want to delete?</DialogTitle>
          <DialogDescription>
            By doing this you will delete your form and will no longer be able
            to return.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();

              startTransition(deleteForm);
            }}
            className="w-full mt-4"
          >
            {!loading ? (
              <span>Deletar</span>
            ) : (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteFormBtn;

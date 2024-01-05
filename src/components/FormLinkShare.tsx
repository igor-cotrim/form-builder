"use client";

import React, { useEffect, useState } from "react";
import { ImShare } from "react-icons/im";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

function FormLinkShare({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;

  useEffect(() => {
    if (mounted) return;

    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="flex items-center flex-grow gap-4">
      <Input value={shareLink} readOnly />
      <Button
        className="max-w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: "Copied!",
            description: "Link copied to clipboard.",
          });
        }}
      >
        <ImShare className="w-4 h-4 mr-2" />
        Share link
      </Button>
    </div>
  );
}

export default FormLinkShare;

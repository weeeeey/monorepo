"use client";

import { useToast } from "@repo/shared-core/hooks";
import { useEffect } from "react";

export default function Home() {
  const { toast } = useToast();

  return (
    <div className="h-[200vh] space-y-4">
      <button
        onClick={() => {
          toast({
            title: "Hello",
            description: "This is a toast",
            duration: 5000,
          });
        }}
      >
        aa
      </button>
      <div className="bg-black text-white">/apps/web page.tsx의 내용</div>
    </div>
  );
}

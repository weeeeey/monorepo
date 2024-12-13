"use client";
import { useIsMobile } from "@repo/shared-core/hooks";

export default function Home() {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return <div className="space-y-4"></div>;
}

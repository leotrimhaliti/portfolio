"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SwipeCardsProps {
  className?: string;
}

const SwipeCards = ({ className }: SwipeCardsProps) => {
  return (
    <div
      className={cn(
        "relative grid h-[233px] w-[175px] place-items-center",
        className
      )}
    >
      <Image
        src="/avatar1.png" // put your static file here
        alt="Static card"
        width={175}
        height={233}
        className="rounded-lg object-cover shadow-lg"
      />
    </div>
  );
};

export default SwipeCards;

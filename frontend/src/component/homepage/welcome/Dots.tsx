"use client";

import React, {JSX} from "react";

type Props = {
  length: number;
  active: number;
  onClickAction: (i: number) => void;
};

export default function Dots({ length, active, onClickAction }: Props): JSX.Element {
  const dots: number[] = Array.from({ length }).map((_: unknown, i: number): number => i);

  return (
    <div className="flex items-center gap-2">
      {dots.map((d: number): JSX.Element => (
        <button
          key={d}
          onClick={(): void => onClickAction(d)}
          aria-label={`Go to slide ${d + 1}`}
          className={`w-3 h-3 rounded-full transition-all duration-200 shadow-sm ${
            active === d
              ? "bg-[#3f0d3f] w-4 h-4"
              : "bg-gray-300 hover:bg-gray-400 transform hover:scale-110"
          }`}
        />
      ))}
    </div>
  );
}

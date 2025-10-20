"use client";

import React, {JSX, useMemo, useState} from "react";
import Dots from "./Dots";
import WelcomeSlide from "./WelcomeSlide";

interface Slide {
  id: string;
  type: string;
  img?: string;
  text: string;
}

export default function WelcomeModal(): JSX.Element | null {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  const slides: Slide[] = useMemo(
    (): Slide[] => [
      { id: "s0", type: "image", img: "/homepage/welcome/welcome.png", text: "" },
      { id: "s1", type: "page", text: "This is an intro page with some placeholder content." },
      { id: "s2", type: "image", img: "/homepage/welcome/welcome.png", text: "Connect with others and follow creators you love." },
      { id: "s3", type: "page", text: "A sample page — more content will come later." },
    ],
    []
  );

  if (!isOpen) return null;

  function onNext(): void {
    if (index < slides.length - 1) {
      setIndex((i: number): number => i + 1);
    } else {
      setIsOpen(false);
    }
  }

  function onDotClick(i: number): void {
    setIndex(i);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[720px] max-w-[92%] bg-white rounded-2xl p-8 relative shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-[#3f0d3f]">Welcome to IlluminateX</h2>
        <p className="text-center text-gray-500 mt-2">A new experience designed to help you succeed.</p>

        <div className="mt-6">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-index * 100}%)` }}
            >
              {slides.map((s: Slide): JSX.Element => (
                <div key={s.id} className="w-full flex-shrink-0 px-6 py-8">
                  <WelcomeSlide imgSrc={s.img} text={s.text} type={s.type as any} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Dots length={slides.length} active={index} onClickAction={onDotClick} />
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={onNext}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#3f0d3f] text-white hover:scale-105 transition-transform duration-200 shadow-md"
              aria-label="Next"
            >
              Next
            </button>
          </div>
        </div>

        <button
          onClick={(): void => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

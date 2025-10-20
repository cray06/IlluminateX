"use client"
import React, {JSX, ReactNode} from "react";

type HeroProps = {
  mainTitle: string;
  subtitle?: string;
};

export default function Hero({ mainTitle, subtitle }: HeroProps): JSX.Element {
    const renderMultiline: (text?: string) => ReactNode = (text?: string): ReactNode =>
        text ? (
            text.split('\n').map((line: string, idx: number): ReactNode => (
                <span key={idx}>{line}</span>
            ))
        ) : null;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-36 sm:pt-40 md:pt-48 pb-8 text-center">
      <h1 className="text-white font-extrabold text-[64px] leading-tight tracking-tight">
        {renderMultiline(mainTitle)}
      </h1>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          className="px-8 py-3 rounded-full bg-[#36013F] hover:bg-[#4b0c5f] text-white font-medium shadow-lg transition-transform duration-200 ease-out transform motion-reduce:transform-none hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6b2a7d]"
          aria-label="Sign Up"
        >
          Sign Up
        </button>
        <button
          className="px-6 py-3 rounded-full bg-white text-black font-medium shadow-sm transition-transform duration-200 ease-out transform motion-reduce:transform-none hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Explore as guest"
        >
          Explore as guest
        </button>
      </div>

      {subtitle && (
        <h2 className="mt-16 sm:mt-20 text-white font-extrabold text-[48px] leading-tight tracking-tight">
          {renderMultiline(subtitle)}
        </h2>
      )}
    </section>
  );
}

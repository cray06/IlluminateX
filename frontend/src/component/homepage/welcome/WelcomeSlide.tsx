"use client";

import React, {useMemo, useState, useEffect, JSX} from "react";

type Props = {
  imgSrc?: string;
  text?: string;
  type?: "image" | "page";
};

export default function WelcomeSlide({ imgSrc, text, type = "image" }: Props): JSX.Element {
  const randomPhrases: string[] = useMemo(
    (): string[] => [
      "Get started in seconds",
      "Personalized for you",
      "Explore, learn, repeat",
      "Join the community",
      "Tips that actually help",
      "Fast, simple, reliable",
      "Designed for you",
    ],
    []
  );
  const [picked, setPicked] = useState<string | null>(null);

  useEffect((): void => {
    const choice: string = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
    setPicked(choice);
  }, [randomPhrases]);

  if (type === "page") {
    return (
      <div className="w-full h-72 flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-md shadow-inner transform transition-all duration-500">
        <div className="text-center px-6">
          <h3 className="text-xl font-semibold text-[#3f0d3f] mb-2">{picked ?? randomPhrases[0]}</h3>
          <p className="text-gray-600">{text || "This is a placeholder page with some random text."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-full flex items-center justify-center">
        <img
          src={imgSrc}
          alt="welcome"
          className="w-64 h-64 object-contain transition-transform duration-400 ease-out transform hover:scale-105 hover:-translate-y-1"
        />
      </div>

      <div className="text-center">
        {text ? (
          <p className="text-gray-600">{text}</p>
        ) : (
          <p className="text-gray-400 italic opacity-90">{picked ?? randomPhrases[0]}</p>
        )}
      </div>
    </div>
  );
}

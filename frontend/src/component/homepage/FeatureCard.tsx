"use client"
import React, { JSX } from "react";

export type FeatureCardProps = {
  imgSrc: string;
  imgAlt?: string;
  title?: string;
  description: string;
};

export default function FeatureCard({ imgSrc, imgAlt = "", title, description }: FeatureCardProps): JSX.Element {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center text-white shadow-md">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
        <img src={imgSrc} alt={imgAlt} className="w-8 h-8 object-contain" />
      </div>
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  );
}

"use client";
import React, {JSX, ReactElement} from "react";
import FeatureCard from "./FeatureCard";

export type Feature = {
  id: string;
  imgSrc: string;
  imgAlt?: string;
  title?: string;
  description: string;
};

type FeaturesGridProps = {
  features: Feature[];
};

export default function FeaturesGrid({ features }: FeaturesGridProps): ReactElement {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8 mt-8 sm:mt-12 lg:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-6">
        {features.map((f: Feature): JSX.Element => (
          <FeatureCard
            key={f.id}
            imgSrc={f.imgSrc}
            imgAlt={f.imgAlt}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </section>
  );
}

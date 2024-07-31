import { BugPlay, Building2, CakeSlice, FlameKindling, Framer, Ghost, LandPlot, Snowflake, TentTree, TreePalm, TrendingUp, UtensilsCrossed } from 'lucide-react';
import React from 'react'

const category = [
  {
    title: "Island",
    icon: <TreePalm />,
  },
  {
    title: "Trending",
    icon: <TrendingUp />,
  },
  {
    title: "Amazing",
    icon: <CakeSlice />,
  },
  {
    title: "Tropical",
    icon: <FlameKindling />,
  },
  {
    title: "Frame",
    icon: <Framer />,
  },
  {
    title: "Ghost",
    icon: <Ghost />,
  },
  {
    title: "Top Cities",
    icon: <Building2 />,
  },
  {
    title: "BreakFast",
    icon: <UtensilsCrossed />,
  },
  {
    title: "Land plot",
    icon: <LandPlot />,
  },
  {
    title: "Lake",
    icon: <Snowflake />,
  },
  {
    title: "Play",
    icon: <BugPlay />,
  },
  {
    title: "Tree House",
    icon: <TentTree />,
  },
];

export default function Category() {
  return (
    <div className="flex w-full mx-auto py-5 gap-5 justify-center">
      {category.map((cat, i) => (
        <div
          className="p-2 border rounded border-black-300 flex flex-col items-center w-24 h-20 justify-center hover:bg-slate-100 gap-2 cursor-pointer"
          key={i}
        >
          {cat.icon}
          <span className="text-sm">{cat.title}</span>
        </div>
      ))}
    </div>
  );
}

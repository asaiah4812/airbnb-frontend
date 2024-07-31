"use client"
import { BugPlay, Building2, CakeSlice, FlameKindling, Framer, Ghost, LandPlot, Snowflake, TentTree, TreePalm, TrendingUp, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
// import { title } from "process";
// import { useState } from "react";

interface cart {
    title:string;
    icon:any;
}

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

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category:any) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory
}) => {
  const [activeCategory, setActiveCategory] = useState('')
  return (
    <>
      <div className="flex w-full flex-wrap py-5 gap-5 justify-center">
        {category.map((cat:cart, i) => (
          <div
            onClick={() => setActiveCategory(cat.title)}
            className={`py-2 border rounded border-black-300 ${
              activeCategory === cat.title ? 'bg-slate-200' : 'border-black-300'
            } flex flex-col items-center w-24 h-20 justify-center hover:bg-slate-100 gap-2 cursor-pointer`}
            key={i}
          >
            {cat.icon}
            <span className="text-sm">{cat.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;

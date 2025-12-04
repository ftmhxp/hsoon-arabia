"use client";

import React, { useState } from "react";

interface AccordionItemType {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemType;
  isActive: boolean;
  onActivate: () => void;
}

const accordionItems: AccordionItemType[] = [
    { id: 1, title: "أنظمة الكهرباء", imageUrl: "/accordion/electric.jpeg" },
    { id: 2, title: "أنظمة مكافحة الحريق", imageUrl: "/accordion/fire.avif" },
    { id: 3, title: "أنظمة السباكة", imageUrl: "/accordion/plumbing.avif" },
    { id: 4, title: "أنظمة الأمان والحماية", imageUrl: "/accordion/security.avif" },
    { id: 5, title: "أنظمة التكييف والتهوية", imageUrl: "/accordion/hvac.avif" },
    { id: 6, title: "أنظمة الطاقة المتجددة", imageUrl: "/accordion/solar.avif" },
  ];

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onActivate }) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out
        /* HEIGHT: vertical on mobile, fixed on desktop */
        h-[80px] sm:h-[280px] md:h-[380px]
        
        /* WIDTH: vertical full-width on mobile, horizontal accordion on desktop */
        w-full sm:w-auto

        /* Vertical accordion logic (height expands on mobile) */
        ${isActive ? "h-[220px] sm:flex-[3]" : "h-[80px] sm:flex-1"}

        flex-shrink-0 sm:snap-start
      `}
      onClick={onActivate}
      onMouseEnter={onActivate}
    >
      {/* Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <span
        className={`
          absolute text-white transition-all font-semibold
          left-4 sm:left-1/2 sm:-translate-x-1/2
          text-base sm:text-lg

          /* Desktop: rotate when collapsed */
          ${isActive ? "bottom-4 sm:rotate-0" : "bottom-4 sm:rotate-90 sm:bottom-20"}

          /* Mobile: NEVER rotate */
          sm:block
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="
        flex flex-col sm:flex-row 
        gap-3 sm:gap-4 
        p-4 
        overflow-y-auto sm:overflow-x-auto 
        sm:snap-x sm:snap-mandatory
      "
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}

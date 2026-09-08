"use client";

import { useEffect, useState } from "react";

export function CapabilityRailProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rail = document.getElementById("capability-rail");
    if (!rail) return undefined;
    let frame;
    const updateActiveCard = () => {
      frame = requestAnimationFrame(() => {
        const cards = Array.from(rail.querySelectorAll(".capability"));
        const railLeft = rail.getBoundingClientRect().left;
        let nearest = 0;
        let distance = Number.POSITIVE_INFINITY;
        cards.forEach((card, index) => {
          const nextDistance = Math.abs(card.getBoundingClientRect().left - railLeft);
          if (nextDistance < distance) { distance = nextDistance; nearest = index; }
        });
        setActiveIndex(nearest);
      });
    };
    updateActiveCard();
    rail.addEventListener("scroll", updateActiveCard, { passive: true });
    return () => { rail.removeEventListener("scroll", updateActiveCard); cancelAnimationFrame(frame); };
  }, []);

  return <div className="capability-rail-progress" aria-hidden="true">{Array.from({ length: 4 }, (_, index) => <span className={activeIndex === index ? "is-active" : ""} key={index} />)}</div>;
}

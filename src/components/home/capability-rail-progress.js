"use client";

import { useEffect, useState } from "react";

export function CapabilityRailProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rail = document.getElementById("capability-rail");
    if (!rail) return undefined;
    const cards = Array.from(rail.querySelectorAll(".capability"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
          const nextIndex = cards.indexOf(entry.target);
          setActiveIndex(nextIndex);
          cards.forEach((card, index) => { card.dataset.active = index === nextIndex ? "true" : "false"; });
        }
      });
    }, { root: rail, threshold: [0.65] });
    cards.forEach((card) => observer.observe(card));
    cards[0]?.setAttribute("data-active", "true");
    return () => observer.disconnect();
  }, []);

  return <div className="capability-rail-progress" aria-hidden="true">{Array.from({ length: 4 }, (_, index) => <span className={activeIndex === index ? "is-active" : ""} key={index} />)}</div>;
}

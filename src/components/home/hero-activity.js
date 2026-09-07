"use client";

import { ChevronDown } from "@untitledui/icons";
import { useId, useState } from "react";

export function HeroActivity() {
  const [isOpen, setIsOpen] = useState(false);
  const activityId = useId();

  return <div className={`activity-strip${isOpen ? " is-open" : ""}`}>
    <button className="activity-toggle" type="button" aria-expanded={isOpen} aria-controls={activityId} onClick={() => setIsOpen((open) => !open)}>
      <span>Activity</span>
      <ChevronDown aria-hidden="true" />
    </button>
    <p className="activity-hint">Click to view activity</p>
    <div className="activity-events" id={activityId} hidden={!isOpen}>
      <p><time>08:27</time> Request received</p>
      <p><time>08:29</time> Driver assigned</p>
      <p><time>08:30</time> Payment verified</p>
    </div>
  </div>;
}

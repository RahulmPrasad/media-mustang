"use client";

import { useState } from "react";

// "View all feedbacks" button: removes the fade-out overlay so every card is visible.
export default function FeedbackToggle() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`button-area-box-shadow ${expanded ? "" : " overlay-bottom-section"}`}>
      <a
        href="#"
        className="rts-btn btn-primary btn-bottom-center"
        style={expanded ? { margin: "0px auto 0 auto" } : undefined}
        onClick={(e) => {
          e.preventDefault();
          setExpanded(!expanded);
        }}
      >
        {expanded ? "View less feedbacks" : "View all feedbacks"}
      </a>
    </div>
  );
}

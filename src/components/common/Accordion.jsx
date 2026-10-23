"use client";

import { useRef, useState } from "react";
import useCollapse from "./useCollapse";

const collapseClasses = { base: "collapse", show: "show", collapsing: "collapsing" };

function Panel({ id, labelledBy, parentId, open, children }) {
  const ref = useCollapse(open, collapseClasses);
  const initialClass = useRef(`accordion-collapse collapse${open ? " show" : ""}`);

  return (
    <div id={id} className={initialClass.current} aria-labelledby={labelledBy} data-bs-parent={`#${parentId}`} ref={ref}>
      <div className="accordion-body">{children}</div>
    </div>
  );
}

// Bootstrap accordion markup with React state instead of bootstrap.js.
// items: [{ key: "One", title, body }]
// markItemShow: also toggles `show` on the `.accordion-item` (used by the working-process accordion).
export default function Accordion({ id, items, markItemShow = false, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion" id={id}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`accordion-item${markItemShow && isOpen ? " show" : ""}`} key={item.key}>
            <h2 className="accordion-header" id={`heading${item.key}`}>
              <button
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`collapse${item.key}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.title}
              </button>
            </h2>
            <Panel id={`collapse${item.key}`} labelledBy={`heading${item.key}`} parentId={id} open={isOpen}>
              {item.body}
            </Panel>
          </div>
        );
      })}
    </div>
  );
}

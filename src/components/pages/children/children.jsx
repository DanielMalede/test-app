import "./children.css";
import React from "react";

function Children() {
  return (
    <div className="children">
      <section>
        <span data-testid="MySpan">Hello Children</span>
      </section>
    </div>
  );
}

export default Children;

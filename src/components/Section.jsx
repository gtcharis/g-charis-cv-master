import React from "react";
export default function Section({ title, children }) {
  return (
    <section className="section">
      <div className="section-title-row">
        <h2>{title}</h2>
        <div className="section-rule" />
      </div>
      {children}
    </section>
  );
}

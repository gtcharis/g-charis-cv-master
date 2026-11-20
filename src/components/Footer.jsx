import React from "react";
export default function Footer({ page }) {
  return (
    <footer>
      <div className="footer-line" />
      <div>
        <span>SOFTWARE ENGINEERING · DATA · EDUCATION</span>
        <span>{String(page).padStart(2, "0")}</span>
      </div>
    </footer>
  );
}

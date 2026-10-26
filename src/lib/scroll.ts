import React from "react";

/**
 * Smoothly scrolls to a section on the page without modifying the browser's URL hash.
 */
export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) {
  e.preventDefault();
  const id = targetId.replace(/^#/, "");

  if (id === "inicio" || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

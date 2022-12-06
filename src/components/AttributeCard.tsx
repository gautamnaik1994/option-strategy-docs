import React, { Fragment } from "react";

interface Props { 
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  color? :string;
  icon: string;
}

export default function AttributeCard({ children, title, icon, color = "info" }:Props) {
  return (
    <div
      className="attribute-card"
      style={{
        "--bg-color": `var(--ifm-color-${color}-lightest)`,
        // "--fg-color": `var(--ifm-color-${color}-contrast-foreground)`
      } as React.CSSProperties}>
      <span className="material-symbols-outlined icon">
        {icon}
      </span>
      <h4 className="title">{title}</h4>
      <h3 className="content">{children}</h3>
    </div>
  );
}

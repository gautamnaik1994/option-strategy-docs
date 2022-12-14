import React, { Fragment } from "react";

interface Props { 
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  color? :string;
  icon: string;
}

export default function Attribute({ children, title, icon, color = "info" }:Props) {
  return (
    <div
      className="attribute"
      style={{
        "--bg-color": `var(--ifm-color-${color}-lightest)`,
        // "--fg-color": `var(--ifm-color-${color}-contrast-foreground)`
      } as React.CSSProperties}>
      <span className="material-symbols-outlined icon">
        {icon}
      </span>
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
}

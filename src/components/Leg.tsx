import React, { Fragment } from "react";

interface Props {
  children: React.ReactNode;
  side: string;
  transaction: string;
  moneyNess: string;
  lotSize: number;
  moreInfo?: string;
}

export default function Leg({
  side,
  children,
  transaction,
  moneyNess,
  lotSize,
  moreInfo = "",
}: Props) {
  return (
    <div className="leg">
      <div className="top-section">
        <div className={`transaction  transaction-${transaction}`}>
          {transaction}
        </div>
        <div className={`money-ness money-ness-${moneyNess}`}>{moneyNess}</div>
        <div className={`side side-${side}`}>{side}</div>
        <div className={`lot-size`}>{lotSize}</div>
        <div className="spacer"></div>
        <div className="more-info">{moreInfo}</div>
      </div>
      {children && <div className="bottom-section">{children}</div>}
    </div>
  );
}

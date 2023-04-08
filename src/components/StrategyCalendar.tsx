import React, { useRef, useState } from "react";

interface StrategyData {
  strategy: string;
  view: string;
  volatility: string;
}

const data_start: Array<StrategyData> = [
  {
    strategy: "Bull Call Spread",
    view: "Bullish",
    volatility: "Any",
  },
  {
    strategy: "Bear Put Spread",
    view: "Bearish",
    volatility: "Any",
  },
  {
    strategy: "Bull Put Spread",
    view: "Bullish",
    volatility: "Any",
  },
  {
    strategy: "Bear Call Spread",
    view: "Bearish",
    volatility: "Any",
  },
  {
    strategy: "Long Straddle",
    view: "Before News",
    volatility: "High",
  },
  {
    strategy: "Long Strangle",
    view: "Before News",
    volatility: "High",
  },
  {
    strategy: "Strip",
    view: "Before +ve News",
    volatility: "High",
  },
  {
    strategy: "Strap",
    view: "Before -ve News",
    volatility: "High",
  },
  {
    strategy: "Batman",
    view: "Neutral",
    volatility: "Less",
  },
  {
    strategy: "Long Butterfly",
    view: "Volatile",
    volatility: "High",
  },
  {
    strategy: "Long Condor",
    view: "Volatile",
    volatility: "High",
  },
];
const data_middle: Array<StrategyData> = [
  {
    strategy: "Long Straddle",
    view: "Before News",
    volatility: "High",
  },
  {
    strategy: "Long Strangle",
    view: "Before News",
    volatility: "High",
  },
  {
    strategy: "Strip",
    view: "Before +ve News",
    volatility: "High",
  },
  {
    strategy: "Strap",
    view: "Before -ve News",
    volatility: "High",
  },
  {
    strategy: "Long Call Condor",
    view: "Volatile",
    volatility: "High",
  },
  {
    strategy: "Long Put Condor",
    view: "Volatile",
    volatility: "High",
  },
  {
    strategy: "Lizard",
    view: "Bullish",
    volatility: "High",
  },
  {
    strategy: "Reverse Lizard",
    view: "Bearish",
    volatility: "High",
  },
];
const data_end: Array<StrategyData> = [
  {
    strategy: "Short Straddle",
    view: "Neutral",
    volatility: "Less",
  },
  {
    strategy: "Short Strangle",
    view: "Neutral",
    volatility: "Less",
  },
  {
    strategy: "Iron Butterfly",
    view: "Neutral",
    volatility: "Less",
  },
  {
    strategy: "Iron Condor",
    view: "Neutral",
    volatility: "Less",
  },
  {
    strategy: "Call Ratio Spread",
    view: "Bullish",
    volatility: "Less",
  },
  {
    strategy: "Put Ratio Spread",
    view: "Bearish",
    volatility: "Less",
  },
  {
    strategy: "Long Call Condor",
    view: "Bullish",
    volatility: "Less",
  },
  {
    strategy: "Long Call Butterfly",
    view: "Bullish",
    volatility: "Less",
  },
  {
    strategy: "Long Put Butterfly",
    view: "Bearish",
    volatility: "Less",
  },
  {
    strategy: "Long Put Condor",
    view: "Bearish",
    volatility: "Less",
  },
  {
    strategy: "Lizard",
    view: "Bullish",
    volatility: "Less",
  },
  {
    strategy: "Broken Wing Butterfly",
    view: "Any",
    volatility: "Less",
  },
];

interface TableProps {
  data: Array<StrategyData>;
}

const Table = ({ data }: TableProps) => {
  return (
    <table className="table">
      <thead>
        <th>Strategy</th>
        <th>View</th>
        <th>Volatility</th>
      </thead>
      <tbody>
        {data.map((item: StrategyData) => {
          return (
            <tr>
              <td>{item.strategy}</td>
              <td>{item.view}</td>
              <td className={`volatilty-${item.volatility}`}>{item.volatility}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default () => {
  const [date, setDate] = useState(1);

  return (
    <div className="strategy-calendar">
      <h3 className="text-center margin-bottom--md"> Strategy Calender </h3>
      <div className="button-holder text-center">
        <button className={`button sc-${date}`} onClick={() => setDate(1)}>
          <span className="material-symbols-outlined icon">today</span>
          Start
        </button>
        <button className={`button mc-${date}`} onClick={() => setDate(2)}>
          <span className="material-symbols-outlined icon">today</span>
          Middle
        </button>
        <button className={`button ec-${date}`} onClick={() => setDate(3)}>
          <span className="material-symbols-outlined icon">today</span>
          End
        </button>
      </div>
      <div className="table-holder margin-top--sm">
        <div className={`tab-content sc-${date} `}>
          <div className="table-title">Month Start</div>
          <Table data={data_start} />
        </div>
        <div className={`tab-content mc-${date}`}>
        <div className="table-title">Month Middle</div>
          <Table data={data_middle} />
        </div>
        <div className={`tab-content ec-${date}`}>
        <div className="table-title">Month End</div>
          <Table data={data_end} />
        </div>
      </div>
    </div>
  );
};

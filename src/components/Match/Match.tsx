import React from "react";
import "./style.css";
import MatchesData from "../../helpers/Match.json";
import { Card } from "./Card";

interface MatchProps {}

export const Matches: React.FC<MatchProps> = ({}) => {
  return (
    <div>
      <h1 className="header">Matches</h1>
      <div className="matches-container"></div>

      {MatchesData.map((data, idx) => {
        return <Card key={idx} data={data} />;
      })}
    </div>
  );
};

import React from "react";
import TrainerData from "../../helpers/Trainer.json";
import { Trainer } from "./Trainer";
import "./style.css";

interface TrainerProps {}

export const Participants: React.FC<TrainerProps> = ({}) => {
  return (
    <div>
      <h1 className="header">Participants</h1>

      <div className="trainer-content">
        {TrainerData.map((trainer, idx) => {
          return <Trainer key={idx} trainer={trainer} />;
        })}
      </div>
    </div>
  );
};

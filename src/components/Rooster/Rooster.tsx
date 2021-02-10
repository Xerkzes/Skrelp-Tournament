import React, { useEffect, useState } from "react";
import "./style.css";
import TrainerData from "../../helpers/Trainer.json";

function sortByValue(prop: any) {
  return function (a: any, b: any) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

interface RoosterProps {}

interface Trainer {
  name: string;
  imgUrl: string;
  team: number;
  division: string;
  wins: number;
  loses: number;
  pokemons: {
    type: string;
    name: string;
    zMove?: boolean | undefined;
  }[];
}

export const Rooster: React.FC<RoosterProps> = ({}) => {
  const [red, setRed] = useState<Trainer[]>([]);
  const [green, setGreen] = useState<Trainer[]>([]);
  const [blue, setBlue] = useState<Trainer[]>([]);
  const [yellow, setYellow] = useState<Trainer[]>([]);

  useEffect(() => {
    const r: Trainer[] = [];
    const b: Trainer[] = [];
    const g: Trainer[] = [];
    const y: Trainer[] = [];
    // sort Array by ASC of the team-number
    TrainerData.sort(sortByValue("team"));

    // puts the trainer into the their rooster
    TrainerData.forEach((trainer) => {
      if (trainer.division == "red") {
        r.push(trainer);
      } else if (trainer.division == "blue") {
        b.push(trainer);
      } else if (trainer.division == "green") {
        g.push(trainer);
      } else if (trainer.division == "yellow") {
        y.push(trainer);
      }
    });

    setRed(r);
    setBlue(b);
    setGreen(g);
    setYellow(y);
  }, []);

  return (
    <div>
      <h1 className="header">Divisions</h1>

      <div className="rooster-divisions-container">
        <div className="rooster-division rooster-divison-red">
          <h2>Red Division</h2>
          <div className="rooster-teams">
            {red.map((trainer, idx) => {
              return (
                <div key={idx} className="rooster-team">
                  <p className="rooster-team-name">
                    {trainer.team}: {trainer.name}
                  </p>
                  <div className="rooster-team-scores">
                    <p className="rooster-team-games-won">{trainer.wins}</p>
                    <p className="rooster-team-games-lost">{trainer.loses}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rooster-division rooster-divison-blue">
          <h2>Blue Division</h2>
          <div className="rooster-teams">
            {blue.map((trainer, idx) => {
              return (
                <div key={idx} className="rooster-team">
                  <p className="rooster-team-name">
                    {trainer.team}: {trainer.name}
                  </p>
                  <div className="rooster-team-scores">
                    <p className="rooster-team-games-won">{trainer.wins}</p>
                    <p className="rooster-team-games-lost">{trainer.loses}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rooster-division rooster-divison-green">
          <h2>Green Division</h2>
          <div className="rooster-teams">
            {green.map((trainer, idx) => {
              return (
                <div key={idx} className="rooster-team">
                  <p className="rooster-team-name">
                    {trainer.team}: {trainer.name}
                  </p>
                  <div className="rooster-team-scores">
                    <p className="rooster-team-games-won">{trainer.wins}</p>
                    <p className="rooster-team-games-lost">{trainer.loses}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rooster-division rooster-divison-yellow">
          <h2>Yellow Division</h2>
          <div className="rooster-teams">
            {yellow.map((trainer, idx) => {
              return (
                <div key={idx} className="rooster-team">
                  <p className="rooster-team-name">
                    {trainer.team}: {trainer.name}
                  </p>
                  <div className="rooster-team-scores">
                    <p className="rooster-team-games-won">{trainer.wins}</p>
                    <p className="rooster-team-games-lost">{trainer.loses}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

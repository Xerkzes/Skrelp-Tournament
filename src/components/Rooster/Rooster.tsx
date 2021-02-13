import React, { useEffect, useState } from "react";
import "./style.css";
import TrainerData from "../../helpers/Trainer.json";
import { TrainerLoseWins } from "./TrainerLoseWins";

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
  pokemons: {
    type: string;
    name: string;
    zMove?: boolean | undefined;
  }[];
}

interface Division {
  array: Trainer[];
  name: string;
}

export const Rooster: React.FC<RoosterProps> = ({}) => {
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  const [red, setRed] = useState<Trainer[]>([]);
  const [blue, setBlue] = useState<Trainer[]>([]);
  const [green, setGreen] = useState<Trainer[]>([]);
  const [yellow, setYellow] = useState<Trainer[]>([]);

  const divisions: Array<Division> = [
    { array: red, name: "Red" },
    { array: blue, name: "Blue" },
    { array: green, name: "Green" },
    { array: yellow, name: "Yellow" },
  ];

  useEffect(() => {
    // sort Array by ASC of the team-number
    let data = JSON.parse(JSON.stringify(TrainerData));
    data.sort(sortByValue("team"));
    // TrainerData.sort(sortByValue("team"));

    // puts the trainer into the their rooster
    data.forEach((trainer: Trainer) => {
      divisions.filter((obj) => {
        if (obj.name.toLocaleLowerCase() === trainer.division)
          obj.array.push(trainer);
      });
    });

    forceUpdate();
  }, []);

  return (
    <div>
      <h1 className="header">Divisions</h1>
      <div className="rooster-divisions-container">
        {divisions.map((obj, idx) => {
          return (
            <div
              key={idx}
              className={
                "rooster-division rooster-divison-" + obj.name.toLowerCase()
              }
            >
              <h2>{obj.name} Division</h2>
              <div className="rooster-teams">
                {obj.array.map((trainer, idx) => {
                  return (
                    <TrainerLoseWins key={idx} trainer={trainer} index={idx} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

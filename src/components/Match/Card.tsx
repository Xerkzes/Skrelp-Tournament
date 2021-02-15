import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface CardProps {
  data: {
    header: string;
    matches: {
      name1: string;
      name2: string;
      winner: string;
    }[];
  };
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{data.header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div className="match-week">
            {data.matches.map((match, idx) => {
              return (
                <div className="match">
                  <p
                    className={
                      "team team-left " +
                      (match.winner === ""
                        ? ""
                        : match.winner === match.name1
                        ? "match-won"
                        : "match-lost")
                    }
                  >
                    {match.name1}
                  </p>
                  <p className="vs">-</p>
                  <p
                    className={
                      "team " +
                      (match.winner === ""
                        ? ""
                        : match.winner === match.name2
                        ? "match-won"
                        : "match-lost")
                    }
                  >
                    {match.name2}
                  </p>
                </div>
              );
            })}
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

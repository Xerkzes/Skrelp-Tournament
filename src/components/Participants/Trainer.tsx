import React, { useState } from "react";
import "./style.css";
import { Pokemon } from "..//Pokemon/Pokemon";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface TrainerProps {
  trainer: {
    name: string;
    imgUrl: string;
    pokemons: {
      type: string;
      name: string;
    }[];
  };
}

export const Trainer: React.FC<TrainerProps> = ({ trainer }) => {
  const [loadContent, setLoadContent] = useState(false);

  function headerWasClicked() {
    if (!loadContent) {
      setLoadContent(true);
    }
    console.log({ loadContent });
  }

  return (
    <Accordion>
      <AccordionSummary
        onClick={headerWasClicked}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{trainer.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {loadContent ? (
            <>
              {trainer.pokemons.map((pokemon, idx) => {
                return <Pokemon key={idx} pokemon={pokemon} />;
              })}
            </>
          ) : (
            <div></div>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

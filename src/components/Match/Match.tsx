import React from "react";
import "./style.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface MatchProps {}

export const Matches: React.FC<MatchProps> = ({}) => {
  return (
    <div>
      <h1 className="header">Matches</h1>
      <div className="matches-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Week1: (Feb 08-14)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="match-week">
                <div className="match">
                  <p className="team team-left">RhydonMyDeek</p>
                  <p className="vs">-</p>
                  <p className="team">martypyds</p>
                </div>
                <div className="match">
                  <p className="team team-left">X3rkzes</p>
                  <p className="vs">-</p>
                  <p className="team">vaugsy17</p>
                </div>
                <div className="match">
                  <p className="team team-left">r3z3n15</p>
                  <p className="vs">-</p>
                  <p className="team">mcguineeplasto</p>
                </div>
                <div className="match">
                  <p className="team team-left">bumper09</p>
                  <p className="vs">-</p>
                  <p className="team">QuestionableSpecimen</p>
                </div>
                <div className="match">
                  <p className="team team-left">FatherGung</p>
                  <p className="vs">-</p>
                  <p className="team">Mannat</p>
                </div>
                <div className="match">
                  <p className="team team-left">Drxx</p>
                  <p className="vs">-</p>
                  <p className="team">vinomatic101</p>
                </div>
                <div className="match">
                  <p className="team team-left">runanbun_</p>
                  <p className="vs">-</p>
                  <p className="team">daddybeefcakes</p>
                </div>
                <div className="match">
                  <p className="team team-left">alienx3</p>
                  <p className="vs">-</p>
                  <p className="team">PapierJoe</p>
                </div>
                <div className="match">
                  <p className="team team-left">lefty8511</p>
                  <p className="vs">-</p>
                  <p className="team">ElementalTem</p>
                </div>
                <div className="match">
                  <p className="team team-left">TheLoooon</p>
                  <p className="vs">-</p>
                  <p className="team">rossboss00</p>
                </div>
                <div className="match">
                  <p className="team team-left">TheTired</p>
                  <p className="vs">-</p>
                  <p className="team">ajstyles</p>
                </div>
                <div className="match">
                  <p className="team team-left">Professor_Mad_Lad</p>
                  <p className="vs">-</p>
                  <p className="team">Wufn1k</p>
                </div>
                <div className="match">
                  <p className="team team-left">xxsirsavagexx</p>
                  <p className="vs">-</p>
                  <p className="team">Liljaka</p>
                </div>
                <div className="match">
                  <p className="team team-left">099percentbeast</p>
                  <p className="vs">-</p>
                  <p className="team">jmurphy725</p>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

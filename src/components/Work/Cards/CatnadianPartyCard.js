import React from "react";
import { CatnadianParty } from "../../../assets/strings.en.js";
import { Card, Subtitle} from "../styled";

const CatnadianPartyCard = ({onClose}) => (
  <Card id="Profile">
    <Subtitle> <a href="work" target="_blank" rel="noreferrer">
    {CatnadianParty.Subtitle}
  </a></Subtitle>
  </Card>
);

export default CatnadianPartyCard;

import React from "react";
import { Card, Subtitle, Copy, SideBySide, Img, CloseButton, DemoContainer } from "../../Work/styled";
import { TanadianCire } from '../../../assets/strings.en.js';
import FullScreenImg from '../../../common/FullScreenImg';
import AutoplayVideo from '../../../common/AutoplayVideo';
import recreation from '../../../assets/ct_recreation.png';
import ct_structure from '../../../assets/ct_structure.png';
import ct_productgridcode from '../../../assets/ct_productgridcode.png';
import CodeSandbox_logo from '../../../assets/CodeSandbox_logo.png';
import sortingvideo from '../../../assets/sort_shop.mp4';

const TanadianCireCard = ({onClose}) => (
  <Card id="TanadianCire"> <Subtitle>
  <a href="https://316qhh.csb.app/ProductListPage" target="_blank" rel="noreferrer">
    {TanadianCire.Subtitle}
  </a>
</Subtitle>
  <Copy>{TanadianCire.Body}</Copy>
  <FullScreenImg
    src={recreation}
    alt="Recreation of the UI"
    description="UI recreation of the top bar"
  />
  <Copy>{TanadianCire.Body1}</Copy>
  <Copy>{TanadianCire.Body2}</Copy>
  <SideBySide>
    <FullScreenImg
      src={ct_structure}
      alt="Picture of the structure of TC code"
      description=""
    />
    <FullScreenImg
      src={ct_productgridcode}
      alt="Picture of the product grid code"
      description=" The product grid component populates the page with each product in a card."
    />
  </SideBySide>
  <Copy>{TanadianCire.Body3}</Copy>
  <AutoplayVideo videoSource={sortingvideo} />
  <Copy>{TanadianCire.Body4}</Copy>
  <Copy>
    You can find the Product List Page Demo at
    <DemoContainer>
    <a href="https://316qhh.csb.app/ProductListPage" target="_blank" rel="noreferrer">
      <Img src={CodeSandbox_logo}/>
    </a></DemoContainer><CloseButton onClick={onClose}>Close</CloseButton>
  </Copy>
  
</Card>
)

export default TanadianCireCard;
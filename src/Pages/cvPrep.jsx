import React from "react";

import NavBar from "../Components/navBar";
import Hero from "../Components/CVComponents/Hero/Hero";
import Instrution from "../Components/CVComponents/InstructionComponent/Instruction";
import ProfilePic from "../Components/CVComponents/CVAssets/ProfilePic.webp";
import AboutImg from "../Components/CVComponents/CVAssets/AboutImg.png";
import ContactImg from "../Components/CVComponents/CVAssets/ContactImg.jpg"
import Feedback from "../Components/CVComponents/Feedback/Feedback";

const instructions = [
  {
    id: 1,
    imgae: ProfilePic,
    header: "Profile Picture",
    content: (
      <ul>
        <li>Professional dress</li>
        <li>Genuine smile</li>
        <li>Plain background</li>
        <li>Simple hairstyle</li>
        <li>Quality image</li>
        <li>Professional posture</li>
        <li>Look straight at the camera</li>
        <li>Proper frame</li>
        <li>Have someone else take the photo</li>
      </ul>
    ),
    imageAlignment: "right",
  },
  {
    id: 2,
    imgae: AboutImg,
    header: "About Section",
    content: (
      <ul>
        <li>
          Should not
          <ul>
            <li>be lengthy</li>
            <li>be arrogant</li>
          </ul>
        </li>
        <li>
          Should
          <ul>
            <li>give a good impression</li>
            <li>be short and sweet</li>
            <li>
              <b>be correctly focused</b>
            </li>
          </ul>
        </li>
      </ul>
    ),
    imageAlignment: "left",
  },
  {
    id: 3,
    imgae: ContactImg,
    header: "Contact Details",
    content: [
      <h5>Keep in mind</h5>,
      <ul>
        <li>URLs clickable links</li>
        <li>Think about sharing content</li>
        <li>Visibility</li>
        <li>Keep them updated</li>
        <li>"Not to show you have an account,but to show your skills"</li>
      </ul>,
    ],

    imageAlignment: "right",
  },
];

const CVPrep = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      {instructions.map((Instruction) => (
        <Instrution
          image={Instruction.imgae}
          header={Instruction.header}
          content={Instruction.content}
          imageAlignment={Instruction.imageAlignment}
        />
      ))}
      <Feedback/>
    </React.Fragment>
  );
};

export default CVPrep;

import React from "react";

import NavBar from "../Components/navBar";
import Hero from "../Components/CVComponents/Hero/Hero";
import Instrution from "../Components/CVComponents/InstructionComponent/Instruction";
import ProfilePic from "../Components/CVComponents/CVAssets/ProfilePic.webp";
import AboutImg from "../Components/CVComponents/CVAssets/AboutImg.png";
import ContactImg from "../Components/CVComponents/CVAssets/ContactImg.jpg";
import Feedback from "../Components/CVComponents/Feedback/Feedback";
import EducationImg from "../Components/CVComponents/CVAssets/EducationImg.jpg";
import AchivementImg from "../Components/CVComponents/CVAssets/AchievementImg.jpg";
import ActivitiesImg from "../Components/CVComponents/CVAssets/ActivitiesImg.jpg";
import ExperienceImg from "../Components/CVComponents/CVAssets/ExperienceImg.jpg";
import RefereesImg from "../Components/CVComponents/CVAssets/RefereeImg.jpg";
import ProjectsImg from "../Components/CVComponents/CVAssets/ProjectsImg.jpg";
import SkillsImg from "../Components/CVComponents/CVAssets/SkillsImg.jpg";

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
            <li>Be lengthy</li>
            <li>Be arrogant</li>
          </ul>
        </li>
        <li>
          Should
          <ul>
            <li>Give a good impression</li>
            <li>Be short and sweet</li>
            <li>
              <b>Be correctly focused</b>
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
  {
    id: 4,
    imgae: EducationImg,
    header: "Education",
    content: [
      <h5>How to list education</h5>,
      <ul>
        <li>Your degree,major or area of speciality</li>
        <li>
          Your minor (if it's relevant or useful to the position you are
          applying for)
        </li>
        <li>Name and location of your School/ University</li>
        <li>
          Dates that you attended (or expected graduation date if you still
          attend)
        </li>
        <li>Your GPA</li>
        <li>Academic honours, relevant coursework, accolades</li>
      </ul>,
    ],

    imageAlignment: "left",
  },
  {
    id: 5,
    imgae: ProjectsImg,
    header: "Projects",
    content: [
      <h5>How to list projects</h5>,
      <ul>
        <li>Decide where to list your projects on you CV</li>
        <li>Prioritize your projects</li>
        <li>Project name and duration</li>
        <li>Brief introduction about project</li>
        <li>Add your role</li>
        <li>Highlight technololgies</li>
      </ul>,
    ],

    imageAlignment: "right",
  },
  {
    id: 6,
    imgae: ActivitiesImg,
    header: "Extra Curricular & Co Curricular Activities ",
    content: [
      <h5>Extra Curricular Activities</h5>,
      <ul>
        <li>Clubs and societies</li>
        <li>Sports, Art or music groups</li>
        <li>Volunteering and community service</li>
      </ul>,
      <h5>Co Curricular Activities</h5>,
      <ul>
        <li>Competitions</li>
        <li>Courses and Certifications</li>
        <li>Workshops, Conferences, Researches</li>
      </ul>,
    ],

    imageAlignment: "left",
  },
  {
    id: 7,
    imgae: AchivementImg,
    header: "Achievements & Participations",
    content: [
      <ul>
        <li>Awards and Honors</li>
        <li>Certifications and Qualifications</li>
        <li>Competitions</li>
        <li>Hackathons and Coding Competitions</li>
        <li>Leadership Roles</li>
        <li>Presentations and Conferences</li>
        <li>Innovation or Inventions</li>
        <li>Open Source Contributions</li>
      </ul>,
    ],

    imageAlignment: "right",
  },
  {
    id: 8,
    imgae: SkillsImg,
    header: "Skills",
    content: [
      <h5>Technical Skills</h5>,
      <ul>
        <li>Programming Languages</li>
        <li>Web Development</li>
        <li>Machine Learning and AI</li>
      </ul>,
      <h5>Non Technical Skills</h5>,
      <ul>
        <li>Communication</li>
        <li>Leadership</li>
        <li>Presentation Skills</li>
      </ul>,
    ],

    imageAlignment: "left",
  },
  {
    id: 9,
    imgae: ExperienceImg,
    header: "Working Experience",
    content: [
      <h5>Job experience</h5>,
      <ul>
        <li>Job Title</li>
        <li>Company and Location</li>
        <li>Employment Dates</li>
        <li>Personal growth by part time/ full time employment</li>
      </ul>,
      <h5>Credentials (Optional)</h5>,
      <h6>
        Various credentials obtained from well known and established entities{" "}
      </h6>,
      <ul>
        <li>AWS Certified Solutions Architect</li>
        <li>Google Analytics Individual Qualification, Google</li>
      </ul>,
    ],

    imageAlignment: "right",
  },
  {
    id: 10,
    imgae: RefereesImg,
    header: "References",
    content: [
      <ul>
        <li>Shouldn't be related</li>
        <li>To establish trust in you</li>
        <li>Choose your references carefully</li>
        <li>Obtain permission from referees</li>
        <li>About two references enough</li>
        <li>Include a mix of professional and academic references</li>
        <li>Keep it updated</li>
        <li>
          Include name, company, position & contact information of referee
        </li>
        <li>Notify your referees</li>
      </ul>,
    ],

    imageAlignment: "left",
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
      <Feedback />
    </React.Fragment>
  );
};

export default CVPrep;

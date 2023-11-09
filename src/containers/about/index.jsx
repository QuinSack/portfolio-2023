import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid, DiReact, DiTrello, DiNodejs } from "react-icons/di";
import { FaDev, FaDatabase, FaCss3, FaGit, FaJs } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Divine Sackitey",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Accra, Ghana",
  },
  {
    label: "Email",
    value: "sackiteydivine24@gmail.com",
  },
  {
    label: "Contact No",
    value: "+233 550153624 / +233 505651110",
  },
  {
    label: "GitHub",
    value: "https://github.com/QuinSack",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/divine-sackitey-624ab0194",
  },
];

const jobSummary =
  "Seasoned and independent sofware developer with 2 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaCss3 size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaGit size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaJs size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;

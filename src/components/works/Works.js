/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/portfolio.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    
    { 
      id: 2,
      title: 'BuildPulse.io', 
      description: `
      The platform offers a comprehensive solution for identifying unreliable tests, furnishing productivity and stability metrics, and monitoring progress systematically. BuildPulse stands out as a leading end-to-end flaky test detection solution, aiding users in pinpointing such tests, delivering impact metrics, addressing issues through test quarantining, and assisting in root cause analysis.`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
    },
   
    { 
      id: 3,
      title: 'FairFax Egg Bank', 
      description: `The application functions as a digital platform that anonymously connects individuals seeking egg donors with potential recipients. It offers a range of features, allowing users to seamlessly register appointments with medical professionals, lodge complaints, offer feedback, and monitor the progress of their applications.






      `,
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
          <Fade left>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter } />
            </div>
            </Fade>
            <Fade right>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
            </Fade>
          </div>
        ))}
      </Container>
    </section>
  );
};

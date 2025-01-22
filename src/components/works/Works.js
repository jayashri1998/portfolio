/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import image from '../../assets/image.png';
import Techtalk from "../../assets/toptelk.png"
import shadbox from '../../assets/shadbox.png'

import './Works.css';
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
  const [projects] = useState([
    { 
      id: 1,
      title: 'Shadbox website', 
      description: `Designed and developed a Shadbox website using ReactJS, and there libraries
      with fancy animations using react particles for 
      the background element.`,
      alter: 'React Website',
      image: shadbox,
      link:'https://shadbox.com/'
    },
    
    { 
      id: 2,
      title: 'BuildPulse.io', 
      description: `
      The platform offers a comprehensive solution for identifying unreliable tests, furnishing productivity and stability metrics, and monitoring progress systematically. BuildPulse stands out as a leading end-to-end flaky test detection solution, aiding users in pinpointing such tests, delivering impact metrics, addressing issues through test quarantining, and assisting in root cause analysis.`,
      alter: 'LoFo Project',
      image: Lofo, 
    },
   
    { 
      id: 3,
      title: 'FairFax Egg Bank', 
      description: `The application functions as a digital platform that anonymously connects individuals seeking egg donors with potential recipients. It offers a range of features, allowing users to seamlessly register appointments with medical professionals, lodge complaints, offer feedback, and monitor the progress of their applications.`,
      alter: 'FairFax Egg Bank',
      image: Lacalle,
    },
    
    { 
      id: 4,
      title: 'Halal Certification', 
      description: 'The application focuses on food and Halal, a term from the Quran that means permitted or lawful. In the context of food, Halal refers to items that are permissible for consumption and use by Muslims, according to Islamic law, the Shariah. This project was completed as part of my freelance work, and you can view it here:',
      alter: 'Halal Certification',
      image: image,
      link:' https://meek-kelpie-4d5429.netlify.app/' 
    },
    { 
      id: 5,
      title: 'TechTalks', 
      description: 'TeckTalk is a Ruby-based conference video uploading platform. As a frontend developer, my role involved integrating their API and designing the user interface based on Figma designs and client requirements. Key features I implemented include video uploads, adding notes, and like/dislike functionality. ',
      alter: 'Toptechtalk',
      image: Techtalk,
      link:'https://toptechtalks.io/'
    
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
          <Fade left>
          <div className="__img_wrapper relative group cursor-pointer">
            {/* Image */}
            <img src={project.image} alt={project.alter} className="w-full h-auto" />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-lg font-semibold underline"
              >
                Visit Project
              </a>
            </div>
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

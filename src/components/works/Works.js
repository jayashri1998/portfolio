import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Works.css';
import { Fade } from "react-reveal";

import shadbox from '../../assets/shadbox.png';
import image from '../../assets/image.png';
import Techtalk from "../../assets/toptelk.png";
import Lofo from '../../assets/recentprojects/lofo.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import shadboxus from '../../assets/shadbox.us.png'
import zipurl from '../../assets/Zipurl.png'
import turf from '../../assets/turf.png'

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
}));

const ITEMS_PER_PAGE = 6;

export const Works = () => {
  const classes = useStyles();
  const [activeDesc, setActiveDesc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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
    
    },
        { 
      id: 6,
      title: 'Shadbox.Us', 
      description: 'Designed and developed a Shadbox website using ReactJS, and there libraries with fancy animations using react particles for the background element.',
      alter: 'shadbox.us',
      image: shadboxus,
      link:'https://shadbox.us/'
    
    },
        { 
     id: 7,
  title: 'Turf Booking',
  description: 'Turf Booking is a web-based platform built using JavaScript, Ruby on Rails, and Tailwind CSS. It allows users to seamlessly browse, book, and manage turf reservations for sports and recreational activities. The platform provides a smooth user experience, real-time availability checking, and a secure booking process.',
  alter: 'Turf Booking',
  image: turf,
  link: 'https://turfly.co/'

    },
        { 
      id: 8,
      title: 'ZipUrl', 
     description: 'ZipUrl is a URL shortening web application built using React and Ruby on Rails. It allows users to convert long URLs into short, shareable links. The platform is designed for speed, simplicity, and efficient link management.',
      alter: 'ZipUrl',
      image: zipurl,
      link:'https://zipurl.ai/'
    
    }
  ]);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const paginatedProjects = projects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

   return (
    <section id="works">
    <h2 className="text-title">Things I’ve Built</h2>
      <Container component="main" className={classes.main}>
        <div className="grid-container">
          {paginatedProjects.map((project) => (
            <Fade key={project.id} bottom>
              <div className="grid-item">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <div className="icon-group">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" title="Visit Project">🔍</a>
                    )}
                    <button title="Description" onClick={() => setActiveDesc(project.id)}>ℹ️</button>
                  </div>
                </div>
                {activeDesc === project.id && (
                  <div className="desc-overlay">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <button onClick={() => setActiveDesc(null)}>Close</button>
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
          <span>{currentPage} / {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
        </div>
      </Container>
    </section>
  );
};
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/my_pic.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  skills:{
    display:"flex",
    gap:"20px",

  }
}));

const skillsData = [
  {
    name: 'Skills',
    skills: 'React js, Next js, Javascript, TypeScript, Tailwind Css',
    exprience: '2.5 years as Frontend Developer'
  },
  {
    name: 'Education',
    skills: 'Bachelor’s Engineering in Civil',
    exprience: '1 year as Site Engineer'
  },
  {
    name: 'Certificate',
    skills: 'Python Training, Oracle Training'
  }
];
export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName},I am ${FirstName} ${LastName},Passionate React.js Developer | 2.5+ Years of Experience in Web Development
I am a dedicated and skilled React.js / Next.js developer with over 2.5 years of experience in building dynamic, scalable, and responsive web applications. Specializing in the MERN stack, I focus on crafting intuitive user interfaces and integrating robust backend systems for seamless full-stack performance.

Additionally, I work with tools like Cursor, GitHub Copilot, and WebSocket to accelerate development workflows, enable real-time communication features, and ensure a collaborative and high-performance coding environment.

Beyond JavaScript frameworks, I have a solid foundation in Python, Object-Oriented Programming (OOP), and data analysis using tools like NumPy, pandas, and Matplotlib. I am also familiar with development tools such as Jupyter Notebook and PyCharm, further expanding my technical versatility.

I thrive in fast-paced environments, embrace new challenges, and continuously seek opportunities to grow and contribute to the evolving field of web development. Let’s connect and collaborate on building cutting-edge digital experiences`;

const [selected, setSelected] = useState('Skills'); // default selected

  const selectedItem = skillsData.find(item => item.name === selected);
  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition:'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
              
            </p>
          <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      {/* Tab Header */}
      <div className="grid-container" >
        {skillsData.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelected(item.name)}
            style={{
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: selected === item.name ? '#007bff' : '#ddd',
              color: selected === item.name ? '#fff' : '#333',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {selectedItem.skills && (
            <li><strong>Skills:</strong> {selectedItem.skills}</li>
          )}
          {selectedItem.exprience && (
            <li><strong>Experience:</strong> {selectedItem.exprience}</li>
          )}
        </ul>
      </div>
    </div>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

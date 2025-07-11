import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import { Typewriter } from "react-simple-typewriter";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(30),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
     display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  flexWrap: 'wrap', 
  },
  jobs: {
  background: 'linear-gradient(135deg, #00c6ff, #3a00d7)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '4rem',
  "@media (max-width: 768px)": {
    fontSize: '3rem',
  },
},
  image: {
  maxWidth: '600px',
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  

},
text:{

}

}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        
        <div>
        <Typography variant="h5" component="h2">
        <h3>Hello I'm</h3>
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
              <Typewriter
          words={['Web Developer', 'Frontend Engineer', 'React Developer']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
        </Typography>
        </div>
           <img
      src="https://nextjs-portfolio-mu-swart.vercel.app/_next/image?url=%2Fimages%2Fhero-image.png&w=640&q=75"
      alt="jayashri"
      className={classes.image}
    />
      </div>
    </Container>
  );
};

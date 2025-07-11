import React, { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { toast } from 'sonner';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("access_key", "2f2b0cda-f77a-48e3-b0e3-caedc1656bc0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Thanks for connecting with me");
        console.log(toast)
        e.target.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                required
                className={classes.formfield}
              />
              <TextField
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                required
                className={classes.formfield}
              />
              <TextField
                label="Message"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                required
                className={classes.formfield}
              />
              <button type="submit" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component='span'> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings}/>
          </h1>
        </div>
      </Container>
    </section>
  );
};
import { makeStyles } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    width: "45vw",
  },
  divComp: {
    width: "55vw",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#bad4f7",
    padding: "5px",
  },
  txComp: {
    color: "#04168c",
  },
  buttonComp: {
    marginRight: 2,
    marginTop: 2,
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState("none");

  const handleSubmit = () => {
    alert("You submitted the form");
  };

  return (
    <div className={classes.divComp}>
      <h1 className={classes.txComp}>Sign Up Form</h1>
      {/* <Box
        sx={{
          backgroundColor: "#fcfeff",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 4,
          m: 2,
        }}
      > */}
        <form className="signup_form">
          <FormControl className={classes.textField}>
            <TextField
              label="First Name"
              required
              className={classes.textField}
              variant="outlined"
              defaultValue="Cezmi"
            />
            <TextField
              label="Last Name"
              required
              className={classes.textField}
              variant="filled"
            />
            <TextField
              label="Password"
              required
              className={classes.textField}
              variant="standard"
              type="password"
              helperText="At least 9 characters"
            />
            <TextField
              label="Age"
              required
              className={classes.textField}
              type="number"
            />
            <TextField
              label="Email"
              required
              className={classes.textField}
              type="email"
            />
            {/* <FormControl sx={{ marginTop: 2 }} className={classes.textField}> */}
            <FormLabel sx={{ textAlign: "left" }} className={classes.textField}>
              Contact Type
            </FormLabel>
            <RadioGroup row value={value} defaultValue="phone">
              <FormControlLabel
                control={<Radio />}
                label="Phone"
                value="phone"
              />
              <FormControlLabel
                control={<Radio />}
                label="Email"
                value="email"
              />
              <FormControlLabel control={<Radio />} label="Mail" value="mail" />
            </RadioGroup>
            {/* </FormControl> */}
            <Button
              variant="contained"
              sx={{ marginRight: 2, marginTop: 2 }}
              onClick={handleSubmit}
            >
              {" "}
              Submit{" "}
            </Button>
            <Button variant="contained" sx={{ marginRight: 2, marginTop: 2 }}>
              {" "}
              Clear{" "}
            </Button>
          </FormControl>
        </form>
      {/* </Box> */}
    </div>
  );
};

export default ContactForm;

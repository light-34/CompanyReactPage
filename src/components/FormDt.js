import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
// import {styled, createTheme, ThemeProvider} from "@mui/system";

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//       contrastText: "white"
//     }
//   }

// });

// const MyStyleProvider = styled('div')(({theme}) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius

// }));

const FormDt = () => {
  return (
    <div>
      <h2>This is a demo Form</h2>
      <form>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup>
            <FormControlLabel control={<Radio />} label="Female" value="female" />
            <FormControlLabel control={<Radio />} label="Male" value="male" />
          </RadioGroup>
          <TextField
          label="First Name"
          variant="outlined" />
          <TextField
          label="Last Name"
          variant="standard" />
          <TextField
          label="Password"
          variant="standard"
          type="password"
          helperText="At least 9 characters" />
          <TextField
          label="Email"
          variant="standard"
          type="email" />
          <FormGroup>
            <FormLabel>Expertise</FormLabel>
            <FormControlLabel control={<Checkbox />} label="Java" size="small" color="primary"/>
            <FormControlLabel control={<Checkbox />} label="Python"/>
            <FormControlLabel control={<Checkbox />} label="JavaScript"/>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default FormDt;

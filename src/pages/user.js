import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./user.css";

const CreateUser = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: " 2.25rem 2.25rem 0.75rem ",
      }}
    >
      <div className="user">
        <Typography variant="h4" component="div" gutterBottom>
          Add User
        </Typography>
        <TextField
          required
          fullWidth
          label="Enter Name"
          id="fullWidth"
          variant="outlined"
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Enter Your Email Adress"
          id="fullWidth"
          variant="outlined"
          margin="normal"
        />
        <br />
        <TextField
          required
          fullWidth
          label="Mobile Number"
          id="fullWidth"
          variant="outlined"
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Mobile Verified?"
        />
        <br />
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Roles</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Roles"
          >
            <MenuItem value={10}>Admin</MenuItem>
            <MenuItem value={20}>Customer</MenuItem>
            <MenuItem value={30}>Vender</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button variant="contained" size="large" margin="normal">
          Save
        </Button>
      </div>
    </Box>
  );
};

export default CreateUser;

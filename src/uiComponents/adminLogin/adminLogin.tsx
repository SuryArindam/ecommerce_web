import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { TextBox } from "../../sharedComponents/textBox/textBox";
import classes from "./adminLogin.module.css";

export const AdminLogin: React.FC = () => {
  return (
    <div className="container">
      <div className={classes.loginContainer}>
        <Paper elevation={10} className={classes.loginCard}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <TextBox
            id="userName"
            label="User name"
            onChange={() => {}}
            floatLabel="Hello"
            className="mb-3"
          />
          <TextBox
            id="password"
            label="Password"
            onChange={() => {}}
            floatLabel="Hello"
            className="mb-3"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Paper>
      </div>
    </div>
  );
};

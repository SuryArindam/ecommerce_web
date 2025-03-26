import { Typography } from "@mui/material";
import React from "react";
import { TextBox } from "../../sharedComponents/textBox/textBox";
import classes from "./adminLogin.module.css";
import { IconType } from "../../sharedComponents/textBox/textBox.model";
import { Button } from "../../sharedComponents/button/button";
import { Color } from "../../App.model";

export const AdminLogin: React.FC = () => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center ${classes.outerContainer}`}
    >
      <div className={classes.loginContainer}>
        <div className={classes.loginCard}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <TextBox
            id="userName"
            label="User name"
            placeHolder="Enter User name"
            onChange={() => {}}
            className="mb-3"
            isRequired={true}
            iconType={IconType.UserName}
          />
          <TextBox
            id="password"
            label="Password"
            placeHolder="Enter Password"
            onChange={() => {}}
            className="mb-3"
            iconType={IconType.Password}
            isPasswordField={true}
            isRequired={true}
          />
          <Button color={Color.Info}>Login</Button>
        </div>
      </div>
    </div>
  );
};

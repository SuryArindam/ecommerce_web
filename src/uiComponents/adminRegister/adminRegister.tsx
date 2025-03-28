import { Link, Typography } from "@mui/material";
import React from "react";
import { TextBox } from "../../sharedComponents/textBox/textBox";
import classes from "./adminRegister.module.css";
import { IconType } from "../../sharedComponents/textBox/textBox.model";
import { Button } from "../../sharedComponents/button/button";
import { Color } from "../../App.model";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ButtonVariant } from "../../sharedComponents/button/button.model";
import Checkbox from "@mui/material/Checkbox";
import "../../App.css";

export const AdminRegister: React.FC = () => {
  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center ${classes.outerContainer}`}
    >
      <div className={classes.registerContainer}>
        <div className={classes.registerCard}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          <TextBox
            id="fullName"
            label="Full Name"
            placeHolder="Enter Full Name"
            onChange={() => {}}
            className="mb-3"
            isRequired={true}
            iconType={IconType.UserName}
          />
          <TextBox
            id="email"
            label="Email"
            placeHolder="Enter Email"
            onChange={() => {}}
            className="mb-3"
            isRequired={true}
            iconType={IconType.Email}
          />
          <TextBox
            id="phone"
            label="Phone"
            placeHolder="Enter Phone"
            onChange={() => {}}
            className="mb-3"
            isRequired={true}
            iconType={IconType.Phone}
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
          <TextBox
            id="confirmPassword"
            label="Confirm Password"
            placeHolder="Re-enter Password"
            onChange={() => {}}
            className="mb-3 border rounded-lg"
            iconType={IconType.Password}
            isPasswordField={true}
            isRequired={true}
          />
          <Button
            color={Color.Secondary}
            icon={<PersonAddIcon />}
            variant={ButtonVariant.Contained}
            onClick={() => {}}
          >
            Register
          </Button>
          <div className="mt-3">
            <Checkbox />I accept{" "}
            <Link
              className="termsLink"
              variant="subtitle1"
              onClick={() => console.log("Terms")}
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

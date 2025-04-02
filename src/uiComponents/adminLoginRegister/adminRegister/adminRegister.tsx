import { Link, Typography } from "@mui/material";
import React from "react";
import { TextBox } from "../../../sharedComponents/textBox/textBox";
import {
  IconType,
  TextboxVariant,
} from "../../../sharedComponents/textBox/textBox.model";
import { Button } from "../../../sharedComponents/button/button";
import { Color } from "../../../App.model";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ButtonVariant } from "../../../sharedComponents/button/button.model";
import "../../../App.css";
import classes from "../adminLoginRegister.module.css";

interface IAdminRegisterProps {
  onLoginClick: () => void;
}
export const AdminRegister: React.FC<IAdminRegisterProps> = ({
  onLoginClick,
}) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <div className={classes.adminCredentialBox}>
        <TextBox
          id="fullName"
          label="Full Name"
          placeHolder="Enter Full Name"
          onChange={() => {}}
          className="mb-3"
          isRequired={true}
          iconType={IconType.UserName}
          variant={TextboxVariant.Standard}
        />
      </div>
      <div className={classes.adminCredentialBox}>
        <TextBox
          id="email"
          label="Email"
          placeHolder="Enter Email"
          onChange={() => {}}
          className="mb-3"
          isRequired={true}
          iconType={IconType.Email}
          variant={TextboxVariant.Standard}
        />
      </div>
      <div className={classes.adminCredentialBox}>
        <TextBox
          id="phone"
          label="Phone"
          placeHolder="Enter Phone"
          onChange={() => {}}
          className="mb-3"
          isRequired={true}
          iconType={IconType.Phone}
          variant={TextboxVariant.Standard}
        />
      </div>
      <div className={classes.adminCredentialBox}>
        <TextBox
          id="password"
          label="Password"
          placeHolder="Enter Password"
          onChange={() => {}}
          className="mb-3"
          iconType={IconType.Password}
          variant={TextboxVariant.Standard}
          isPasswordField={true}
          isRequired={true}
        />
      </div>
      <div className={classes.adminCredentialBox}>
        <TextBox
          id="confirmPassword"
          label="Confirm Password"
          placeHolder="Re-enter Password"
          onChange={() => {}}
          className="mb-3"
          iconType={IconType.Password}
          variant={TextboxVariant.Standard}
          isPasswordField={true}
          isRequired={true}
        />
      </div>
      <div>
        <Button
          color={Color.Secondary}
          icon={<PersonAddIcon />}
          variant={ButtonVariant.Contained}
          onClick={() => {}}
          className="mt-3"
          fullWidth
        >
          Register
        </Button>
      </div>
      <div className="mt-2 text-start">
        Already have an account?
        <Link
          className="termsLink"
          variant="subtitle1"
          color={Color.Primary}
          onClick={onLoginClick}
        >
          Login here.
        </Link>
      </div>
    </div>
  );
};

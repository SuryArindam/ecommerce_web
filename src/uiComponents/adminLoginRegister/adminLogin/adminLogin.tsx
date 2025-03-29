import { Link, Typography } from "@mui/material";
import React from "react";
import { TextBox } from "../../../sharedComponents/textBox/textBox";
import classes from "../adminLoginRegister.module.css";
import {
  IconType,
  TextboxVariant,
} from "../../../sharedComponents/textBox/textBox.model";
import { Button } from "../../../sharedComponents/button/button";
import { Color } from "../../../App.model";
import LoginIcon from "@mui/icons-material/Login";
import { ButtonVariant } from "../../../sharedComponents/button/button.model";
import data from "../../../sampleData.json";
import { IAdmin } from "./admin.model";
import "../../../App.css";

interface IAdminLoginProps {
  onRegisterClick: () => void;
}
export const AdminLogin: React.FC<IAdminLoginProps> = ({ onRegisterClick }) => {
  const checkData = () => {
    const credential: IAdmin[] = structuredClone(data);
    console.info("credential=", credential);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <div className={classes.adminCredentialBox}>
        <TextBox
          id="userName"
          label="User name"
          placeHolder="Enter User name"
          onChange={() => {}}
          className="mb-3"
          isRequired={true}
          iconType={IconType.UserName}
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
          isPasswordField={true}
          isRequired={true}
          variant={TextboxVariant.Standard}
        />
      </div>
      <div className="my-3 text-end">
        Don&#39;t have an account?
        <Link
          className="termsLink"
          variant="subtitle1"
          color={Color.Primary}
          onClick={onRegisterClick}
        >
          {" "}
          Register here.
        </Link>
      </div>
      <div>
        <Button
          color={Color.Secondary}
          icon={<LoginIcon />}
          variant={ButtonVariant.Contained}
          onClick={checkData}
          fullWidth
        >
          Login
        </Button>
      </div>
    </div>
  );
};

import React from "react";
import "./errorPage.css";
import { Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { Color } from "../App.model";
import { Link } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  return (
    <div className="errorContainer">
      <div className="errorBox px-5 py-5">
        <div className="errorIcon">
          <ErrorIcon fontSize="large" color={Color.Error} />
        </div>
        <Typography color={"white"} align="center" variant="h4" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Typography color={"white"} variant="h5" align="center">
          Looks like either the system has encountered an error or the page you
          are looking for doesn't exist.
        </Typography>
        <Typography color={"white"} variant="h6" align="center">
          Click to return <Link to={"/"}>Home</Link>
        </Typography>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { AdminLogin } from "./adminLogin/adminLogin";
import { AdminRegister } from "./adminRegister/adminRegister";
import classes from "./adminLoginRegister.module.css";

export const AdminLoginRegister: React.FC = () => {
  const [dialog, setDialog] = useState<"login" | "register">("login");

  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center ${classes.outerContainer}`}
    >
      <div className={classes.adminCard}>
        {dialog === "login" ? (
          <AdminLogin onRegisterClick={() => setDialog("register")} />
        ) : (
          <AdminRegister onLoginClick={() => setDialog("login")} />
        )}
      </div>
    </div>
  );
};

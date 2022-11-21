import { AccountCircleRounded } from "@mui/icons-material";
import { AppBar, Modal, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "100px",
  },
}));

const AccountIcon = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleValueChange = (e, v) => {
    setValue(v);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <AccountCircleRounded onClick={() => setOpen(true)} />

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div className="box">
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleValueChange}
              variant="fullWidth"
            >
              <Tab label="login"></Tab>
              <Tab label="signup"></Tab>
            </Tabs>
          </AppBar>

          {value ===0 && <LoginForm/>}
          {value===1 && <SignupForm/>}
        </div>
      </Modal>
    </div>
  );
};

export default AccountIcon;
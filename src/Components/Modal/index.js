import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import "./index.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ open, setOpen, formData }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      fullWidth
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Purchase Docket"}</DialogTitle>
      <DialogContent className="modal__content">
        <DialogContentText id="alert-dialog-slide-description">
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="Name" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.name}
                />
              </div>
            </ListItem>
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="Start Time" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.startTime}
                />
              </div>
            </ListItem>
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="End Time" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.endTime}
                />
              </div>
            </ListItem>
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="Hours Worked" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.hoursWorked}
                />
              </div>
            </ListItem>
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="Rate Per Hour" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.ratePerHour}
                />
              </div>
            </ListItem>
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="Supplier Name" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.supplierName}
                />
              </div>
            </ListItem>
            <ListItem button>
              <div className="modal__items">
                <ListItemText primary="Purchase Order" className="modal__key" />
                <ListItemText
                  className="modal__value"
                  primary={formData.purchaseOrder}
                />
              </div>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

import React from 'react';
import Modal from '@material-ui/core/Modal';
import LogIn from '../LogIn';

import "../Components/Styles/Home.css"

const LogModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="main-bttns" type="button" onClick={handleOpen}>
        Log In
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <LogIn/>
      </Modal>
    </div>
  );
};

export default LogModal;

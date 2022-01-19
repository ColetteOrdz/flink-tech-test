import React from 'react';
import Register from '../Register';
import Modal from '@material-ui/core/Modal';

import "../Components/Styles/Home.css"

const RegModal = () => {
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
        Create account
      </button>
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <Register/>
      </Modal>
    </div>
  );
};

export default RegModal;

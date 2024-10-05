import React, { useState } from 'react';
import Main from '../components/layout/Main';
import DateRange from '../components/items/DateRange';
import Modal from '@mui/material/Modal';

const Planning = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Main>
      <div>Planning</div>
      <Modal
        open={open}
      >
        <div>
          <DateRange />
        </div>
      </Modal>
    </Main>
  )
}

export default Planning
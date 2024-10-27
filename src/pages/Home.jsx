import React, { useState, createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetTravel } from '../app/travleSlice';
//컴포넌트
import Main from '../components/layout/Main';
import WorldCard from '../components/items/WorldCard';
import LeftSection from './../components/items/LeftSection';
import Modal from '@mui/material/Modal';

export const ModalContext = createContext();

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetTravel());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const handleOpen = (data) => {
    setOpen(true); // 모달 열기
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider 
      value={{ open, handleOpen, handleClose }}
    >
      <Main>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div>
            <WorldCard />
          </div>
        </Modal>

        <div id='home'>
          <LeftSection /> 
        </div>
      </Main>
    </ModalContext.Provider>
  );
};

export default Home;

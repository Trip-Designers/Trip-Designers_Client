import React, { useState, createContext } from 'react';
//컴포넌트
import Main from '../components/layout/Main';
import WorldCard from '../components/items/WorldCard';
import LeftSection from './../components/items/LeftSection';
import Modal from '@mui/material/Modal';

export const ModalContext = createContext();

const Home = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null); 

  const handleOpen = (data) => {
    setName(data); // 선택한 데이터를 상태로 설정
    setOpen(true); // 모달 열기
  };

  const handleClose = () => {
    setOpen(false);
    setName(null); // 모달 닫을 때 선택한 데이터 초기화
  };

  return (
    <ModalContext.Provider 
      value={{ open, handleOpen, handleClose, name }}
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

import React, { useState } from 'react';
import Main from '../components/layout/Main';
import LeftSection from '../components/home/LeftSection';
import WorldCard from '../components/items/WorldCard';
import Modal from '@mui/material/Modal';
import { createContext } from 'react';

export const ModalContext = createContext();

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null); // 선택한 데이터를 저장할 상태 추가

  const handleOpen = (data) => {
    setSelectedData(data); // 선택한 데이터를 상태로 설정
    setOpen(true); // 모달 열기
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null); // 모달 닫을 때 선택한 데이터 초기화
  };

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose, selectedData }}>
      <Main>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div>
            <WorldCard onClose={handleClose} data={selectedData} />
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

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../app/travleSlice';
// 컴포넌트
import Button from './items/Button';
import Modal from '@mui/material/Modal';
import ThemeModal from './items/ThemeModal';
import { theme } from '../mockData';

const Step2SelectTheme = () => {
  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel);
  const [selectedTheme, setSelectedTheme] = useState(travel.theme);
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleThemeClick = (themeName) => {
    setSelectedTheme(themeName);
    dispatch(setTheme(themeName));  // Redux에 선택된 테마 저장
  };

  return (
    <div id='step2'>
      <div className='step2__inner'>
        <h1>{travel.location}</h1>
        <div className='step2__info'>
          <span>{travel.startDate}</span> - <span>{travel.endDate}</span>
        </div>
        <div className='step2__theme'>
          <h3>테마 선택하기</h3>
          <div className='step2__theme__item'>
            <ul>
              {theme.map((item, i) => (
                <li key={i} onClick={() => handleThemeClick(item.theme)} className={selectedTheme === item.theme ? 'selected' : ''}>
                  <div><img src={item.img} alt="icon" /></div>
                  {item.theme}
                </li>
              ))}
            </ul>
          </div>
          <div className='step2__add__theme' onClick={handleOpen}>테마 추가하기</div>
          <Button text={'테마 선택 완료'}/>
        </div>
      </div>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <div>
          <ThemeModal close={handleClose} />
        </div>
      </Modal>
    </div>
  )
}

export default Step2SelectTheme
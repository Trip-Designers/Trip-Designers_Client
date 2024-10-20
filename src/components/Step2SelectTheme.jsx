import React, { useState, useContext } from 'react'
import { DateContext } from './layout/Main';
import { theme } from '../mockData';
import Button from './items/Button';
import Modal from '@mui/material/Modal';
import ThemeModal from './items/ThemeModal';

const Step2SelectTheme = () => {
  const { mockData, setMockData } = useContext(DateContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedThemes, setSelectedThemes] = useState([]);

  const handleThemeClick = (theme) => {
    setSelectedThemes(prevSelected =>
      prevSelected.includes(theme)
        ? prevSelected.filter(t => t !== theme)
        : [...prevSelected, theme]
    );
  };

  return (
    <div id='step2'>
      <div className='step2__inner'>
        <h1>{mockData.location}</h1>
        <div className='step2__info'>
          <span>{mockData.startDate}</span> - <span>{mockData.endDate}</span>
        </div>
        <div className='step2__theme'>
          <h3>테마 선택하기</h3>
          <div className='step2__theme__item'>
            <ul>
              {theme.map((item, i) => (
                <li key={i}>
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
      >
        <div>
          <ThemeModal close={handleClose} />
        </div>
      </Modal>
    </div>
  )
}

export default Step2SelectTheme
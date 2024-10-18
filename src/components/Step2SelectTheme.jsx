import React, { useState, useContext } from 'react'
import { DateContext } from './layout/Main';

const Step2SelectTheme = () => {
  const { mockData, setMockData } = useContext(DateContext);
  const theme = [
    {img: '/img/active.png', theme: "액티브"}, 
    {img: '/img/food.png', theme: "음식"}, 
    {img: '/img/family.png', theme: "가족"}, 
    {img: '/img/parade.png', theme: "축제"}, 
    {img: '/img/recreation.png', theme: "휴양"}, 
    {img: '/img/culture.png', theme: "문화"}, 
    {img: '/img/lover.png', theme: "연인"}, 
    {img: '/img/friend.png', theme: "친구"}
  ];

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
          <button>테마 선택 완료</button>
        </div>
      </div>
    </div>
  )
}

export default Step2SelectTheme
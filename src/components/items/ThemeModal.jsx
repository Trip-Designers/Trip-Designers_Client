import React, { useState } from 'react'
import Button from './Button'
import { IoIosArrowBack } from "react-icons/io";

const ThemeModal = ({close}) => {
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('');
  console.log('theme', theme);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !theme) {
      alert('이메일과 테마를 입력해주세요.');
      return;
    }
  };

  const handleAlert = () => {
    alert('메일이 성공적으로 보내졌습니다!')
    close()
  }
  return (
    <div id='theme__modal'>
      <div className='theme__modal__inner'>
        <div>
          <IoIosArrowBack onClick={close} size={20}  className='theme__modal__close' />
        </div>
        <div className='theme__modal__header'>
          <h3>이메일 문의하기</h3>
          <p>원하시는 테마가 있다면 이메일로 보내주세요!</p>
        </div>
        <div className='theme__modal__form'>
          <form onSubmit={handleSubmit}>
            <label>이메일</label>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='이메일 주소' required />
            <label>테마 입력</label>
            <input type="text" value={theme} onChange={handleThemeChange} placeholder='테마 입력' required />
            <Button text={'메일 보내기'} type='submit' onClick={handleAlert} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ThemeModal
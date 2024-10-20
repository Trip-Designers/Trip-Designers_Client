import React from 'react'
import Button from './Button'
import { IoIosArrowBack } from "react-icons/io";

const ThemeModal = ({close}) => {
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
          <form>
            <label>이메일</label>
            <input type="email" pattern=".+@example\.com" placeholder='이메일 주소' required />
            <label>테마 입력</label>
            <input type="text" placeholder='테마 입력' />
          </form>
        </div>
        <Button text={'메일 보내기'} />
      </div>
    </div>
  )
}

export default ThemeModal
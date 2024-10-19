import { IoAirplaneSharp } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

export const travleInfoItems = [
  {
    id: 1,
    icon: <IoAirplaneSharp />,
    travel_detail: '항공',
    travel_type: '직항',
    misc_info: '약 8시간'
  },
  {
    id: 2,
    icon: <FaPassport />,
    travel_detail: '비자',
    travel_type: '단기',
    misc_info: '90일'
  },
  {
    id: 3,
    icon: <MdElectricalServices />,
    travel_detail: '전압',
    travel_type: '콘센트',
    misc_info: '120V'
  },
  {
    id: 4,
    icon: <FaRegClock />,
    travel_detail: '시차',
    travel_type: '한국대비',
    misc_info: '-19시간'
  },
]

export const locationData = [
  {
    id: 1,
    title: '제주',
    title_en: "JEJU",
    desc: '대한민국',
  },
  {
    id: 2,
    title_en: "JEJU",
    title: '하와이',
    desc: '미국',
  },
  {
    id: 3,
    title_en: "JEJU",
    title: '괌',
    desc: '미국',
  },
  {
    id: 4,
    title_en: "JEJU",
    title: '괌',
    desc: '미국',
  },
  {
    id: 5,
    title_en: "JEJU",
    title: '괌',
    desc: '미국',
  },
]

export const theme = [
  {img: '/img/active.png', theme: "액티브"}, 
  {img: '/img/food.png', theme: "음식"}, 
  {img: '/img/family.png', theme: "가족"}, 
  {img: '/img/parade.png', theme: "축제"}, 
  {img: '/img/recreation.png', theme: "휴양"}, 
  {img: '/img/culture.png', theme: "문화"}, 
  {img: '/img/lover.png', theme: "연인"}, 
  {img: '/img/friend.png', theme: "친구"}
]
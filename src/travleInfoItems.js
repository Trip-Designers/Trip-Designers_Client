import { IoAirplaneSharp } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

export const mockData = [
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